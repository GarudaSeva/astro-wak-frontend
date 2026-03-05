import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Send, Download, Info } from "lucide-react";
import { toast } from "sonner";

const ReportPage = () => {
  const [params] = useSearchParams();
  const name = params.get("name") || "Guest";
  const phone = params.get("phone") || "";
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!content.trim()) {
      toast.error("Please enter some content for the report.");
      return;
    }

    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      
      // PDF Styling
      doc.setFontSize(22);
      doc.setTextColor(22, 163, 74); // green-600
      doc.text("ASTRO WAK REPORT", 105, 20, { align: "center" });
      
      doc.setDrawColor(22, 163, 74);
      doc.line(20, 25, 190, 25);
      
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text(`Report for: ${name}`, 20, 40);
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 48);
      
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      const splitContent = doc.splitTextToSize(content, 170);
      doc.text(splitContent, 20, 65);

      const pdfBlob = doc.output("blob");
      const pdfFile = new File([pdfBlob], `${name.replace(/\s+/g, "_")}_Report.pdf`, {
        type: "application/pdf",
      });

      // WhatsApp Message
      const whatsappMsg = encodeURIComponent(`Hi ${name}, I have prepared your report. Please find the attached PDF.`);
      const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMsg}`;

      // Check if Web Share API is supported for files
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        try {
          await navigator.share({
            files: [pdfFile],
            title: `${name}'s Report`,
            text: `Report for ${name} from Astro Wak`,
          });
          toast.success("Report shared successfully!");
        } catch (error) {
          if ((error as Error).name !== "AbortError") {
            console.error("Error sharing:", error);
            handleFallback(pdfFile, whatsappUrl);
          }
        }
      } else {
        handleFallback(pdfFile, whatsappUrl);
      }
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error("Failed to generate report.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFallback = (file: File, whatsappUrl: string) => {
    // Download PDF
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.info("Opening WhatsApp. Please attach the downloaded PDF.", {
        duration: 5000,
    });

    // Open WhatsApp
    setTimeout(() => {
        window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl border-none">
          <CardHeader className="bg-white border-b pb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">Create Report</CardTitle>
            </div>
            <CardDescription className="text-slate-500 text-lg">
              Generating report for <span className="font-semibold text-slate-700">{name}</span>
              {phone && <span className="block text-sm">WhatsApp: {phone}</span>}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                Report Details
              </label>
              <Textarea
                className="min-h-[300px] text-lg p-4 border-slate-200 focus:ring-green-500 focus:border-green-500 rounded-xl"
                placeholder="Type the detailed report content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-blue-700 text-sm">
                <Info className="h-5 w-5 shrink-0" />
                <p>
                    On mobile, you can share directly to WhatsApp. On desktop, the PDF will download and WhatsApp will open for you to manually attach the file.
                </p>
            </div>

            <Button
              onClick={generatePDF}
              disabled={isGenerating}
              className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {isGenerating ? (
                "Generating..."
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Generate & Send to WhatsApp
                </>
              )}
            </Button>
            
            <p className="text-center text-slate-400 text-sm italic">
                The report will be saved as <span className="font-mono">{name.replace(/\s+/g, "_")}_Report.pdf</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;
