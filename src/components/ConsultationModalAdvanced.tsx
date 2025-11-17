// src/components/ConsultationModalAdvanced.tsx
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ServiceKey } from "@/types/serviceKeys";
import PayButton from "./PayButton";

type FieldType = "text" | "email" | "tel" | "date" | "time" | "textarea" | "select" | "radio" | "number";

interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[]; // for select / radio
}

/* -------------------------
   Shared/base definitions
   ------------------------- */
const BASE_FIELDS: FieldConfig[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Enter full name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91 9XXXXXXXXX" },
];

const RASI_OPTIONS = [
  "Mesha","Vrushaba","Mithuna","Karkataka","Simha","Kanya","Tula","Vrischika","Dhanus","Makara","Khumbha","Meena"
].map((v) => ({ label: v, value: v }));

const NAKSHATRA_OPTIONS = [
  "Ashwini","Bharani","Krittika","Rohini","Mrigshirsha","Arudra","Punarvasu","Pushya","Ashlesha","Magha","Purvaphalguni",
  "Uttaraphalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Moola","Purvashadha","Uttarashadha","Shravana",
  "Dhanishtha","Shatabhisha","Poorvabhadrapada","Uttarabhadrapada","Revati"
].map((v) => ({ label: v, value: v }));

/* -------------------------
   Form config for each ServiceKey
   ------------------------- */
const formConfig: Record<ServiceKey, FieldConfig[]> = {
  // numerology
  numerology_complete: [
    ...BASE_FIELDS,
    { name: "who", label: "Consultation For", type: "radio", required: true, options: [{ label: "Self", value: "self" }, { label: "Other", value: "other" }]},
    { name: "otherName", label: "Other Person Name", type: "text" },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    { name: "gender", label: "Gender", type: "radio", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea", placeholder: "Anything to add?" }
  ],

  numerology_name_correction: [
    ...BASE_FIELDS,
    { name: "who", label: "Consultation For", type: "radio", required: true, options: [{ label: "Self", value: "self" }, { label: "Other", value: "other" }]},
    { name: "otherName", label: "Other Person Name", type: "text" },
    { name: "nameToCorrect", label: "Name to Correct", type: "text", required: true },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    { name: "gender", label: "Gender", type: "radio", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_baby_name: [
    ...BASE_FIELDS,
    // child fields handled inside accordion
    { name: "childName", label: "Child Name (if known)", type: "text" },
    { name: "childGender", label: "Child Gender", type: "radio", required: true, options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Child Time", type: "time" },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "filters", label: "Name Filters (summary)", type: "textarea", placeholder: "Short preferences summary" },
    { name: "comment", label: "Comments", type: "textarea" }
  ],

  numerology_match_making: [
    ...BASE_FIELDS,
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "male_name", label: "Male: Full Name", type: "text", required: true },
    { name: "male_dob", label: "Male: DOB", type: "date", required: true },
    { name: "male_time", label: "Male: Time", type: "time" },
    { name: "male_place", label: "Male: Place", type: "text" },
    { name: "female_name", label: "Female: Full Name", type: "text", required: true },
    { name: "female_dob", label: "Female: DOB", type: "date", required: true },
    { name: "female_time", label: "Female: Time", type: "time" },
    { name: "female_place", label: "Female: Place", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_business: [
    ...BASE_FIELDS,
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "businessNames", label: "Business Names (one per line)", type: "textarea", placeholder: "One name per line" },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  numerology_family: [
    ...BASE_FIELDS,
    { name: "familyMembers", label: "Family Members (Name | DOB | Gender each line)", type: "textarea", placeholder: "Ramesh | 1990-01-01 | M" },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"}, {label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  gems: [
    ...BASE_FIELDS,
    { name: "who", label: "Consultation For", type: "radio", required: true, options: [{ label: "Self", value: "self" }, { label: "Other", value: "other" }]},
    { name: "otherName", label: "Other Person Name", type: "text" },
    { name: "purpose", label: "Purpose", type: "select", required: true, options: [
      {label:"Business", value:"business"},{label:"Career",value:"career"},{label:"Health",value:"health"},{label:"Relations", value:"relations"},{label:"General",value:"general"}
    ] },
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "birthTime", label: "Birth Time", type: "time" },
    { name: "birthPlace", label: "Birth Place", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  horoscope: [
    ...BASE_FIELDS,
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "birthTime", label: "Birth Time", type: "time" },
    { name: "birthPlace", label: "Birth Place", type: "text" },
    { name: "query", label: "Specific Questions", type: "textarea" },
  ],

  pooja: [
    ...BASE_FIELDS,
    { name: "poojaType", label: "Pooja Type", type: "select", required: true, options: [{label:"Pooja",value:"pooja"},{label:"Homa",value:"homa"}] },
    { name: "preferredDate", label: "Preferred Date (if any)", type: "date" },
    { name: "comment", label: "Instructions / Offerings", type: "textarea" },
  ],

  // Muhurt services - consistent form fields
  muhurt_namakaranam: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childGender", label: "Child Gender", type: "radio", required: true, options: [{label:"Male",value:"male"},{label:"Female",value:"female"}] },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Time of Birth", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_annaprasana: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childGender", label: "Child Gender", type: "radio", required: true, options: [{label:"Male",value:"male"},{label:"Female",value:"female"}] },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Time of Birth", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_kesa_khandana: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childGender", label: "Child Gender", type: "radio", required: true, options: [{label:"Male",value:"male"},{label:"Female",value:"female"}] },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Time of Birth", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_karna_vedha: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childGender", label: "Child Gender", type: "radio", required: true, options: [{label:"Male",value:"male"},{label:"Female",value:"female"}] },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Time of Birth", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_aksharabhyasa: [
    ...BASE_FIELDS,
    { name: "fatherName", label: "Father Name", type: "text", required: true },
    { name: "motherName", label: "Mother Name", type: "text" },
    { name: "childDob", label: "Child DOB", type: "date", required: true },
    { name: "childTime", label: "Time of Birth", type: "time" },
    { name: "childPlace", label: "Place of Birth", type: "text" },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" }
  ],

  muhurt_vivaha: [
    ...BASE_FIELDS,
    { name: "brideName", label: "Bride Name", type: "text", required: true },
    { name: "brideDob", label: "Bride DOB", type: "date", required: true },
    { name: "brideTime", label: "Bride Birth Time", type: "time" },
    { name: "bridePlace", label: "Bride Place", type: "text" },
    { name: "groomName", label: "Groom Name", type: "text", required: true },
    { name: "groomDob", label: "Groom DOB", type: "date", required: true },
    { name: "groomTime", label: "Groom Birth Time", type: "time" },
    { name: "groomPlace", label: "Groom Place", type: "text" },
    { name: "reportLanguage", label: "Report Language", type: "select", options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_bhoomi_pooja: [
    ...BASE_FIELDS,
    { name: "ownerName", label: "Owner Name", type: "text", required: true },
    { name: "landLocation", label: "Land Location", type: "text" },
    { name: "reportLanguage", label: "Report Language", type: "select", options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  muhurt_gruha_pravesh: [
    ...BASE_FIELDS,
    { name: "ownerName", label: "Owner Name", type: "text", required: true },
    { name: "propertyLocation", label: "Property Location", type: "text" },
    { name: "reportLanguage", label: "Report Language", type: "select", options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  // General fallback for "other" muhurts
  muhurt_other: [
    ...BASE_FIELDS,
    { name: "details", label: "Type / Details", type: "text", required: true },
    { name: "preferredDate", label: "Preferred Date", type: "date" },
    { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
    { name: "comment", label: "Comments", type: "textarea" },
  ],

  // Additional muhurts: matchmaking (as separate muhurt key)
  // muhurt_match_making: [
  //   ...BASE_FIELDS,
  //   { name: "reportLanguage", label: "Report Language", type: "select", required: true, options: [{label:"English", value:"english"},{label:"Telugu", value:"telugu"}] },
  //   { name: "male_name", label: "Male: Full Name", type: "text", required: true },
  //   { name: "male_dob", label: "Male: DOB", type: "date", required: true },
  //   { name: "male_time", label: "Male: Time", type: "time" },
  //   { name: "male_place", label: "Male: Place", type: "text" },
  //   { name: "female_name", label: "Female: Full Name", type: "text", required: true },
  //   { name: "female_dob", label: "Female: DOB", type: "date", required: true },
  //   { name: "female_time", label: "Female: Time", type: "time" },
  //   { name: "female_place", label: "Female: Place", type: "text" },
  //   { name: "comment", label: "Comments", type: "textarea" },
  // ],
};

/* -------------------------
   Helpers
   ------------------------- */
function getFieldsFor(service: ServiceKey) {
  return formConfig[service] ?? formConfig["horoscope"];
}

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType: ServiceKey;
  whatsappNumber?: string;
  price : number;
};

export default function ConsultationModalAdvanced({
  open,
  onOpenChange,
  serviceType,
  whatsappNumber = "919553231199",
  price
}: Props) {
  const fields = useMemo(() => getFieldsFor(serviceType), [serviceType]);

  const initialState = useMemo(() => {
    const s: Record<string, any> = {};
    fields.forEach((f) => {
      s[f.name] = "";
    });
    if ("who" in s) s["who"] = s["who"] || "self";
    if ("reportLanguage" in s) s["reportLanguage"] = s["reportLanguage"] || "english";
    return s;
  }, [fields]);

  const [form, setForm] = useState<Record<string, any>>(initialState);
  useEffect(() => setForm(initialState), [initialState]);

  // Terms checkbox (square)
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    if (!open) {
      setAcceptedTerms(false);
      setForm(initialState);
    }
  }, [open, initialState]);

  const handleChange = (name: string, value: any) => setForm((p) => ({ ...p, [name]: value }));

  const validate = () => {
    const missing: string[] = [];
    fields.forEach((f) => {
      if (f.required) {
        // conditional otherName only when who === other
        if (f.name === "otherName" && form["who"] === "other") {
          if (!form["otherName"]) missing.push(f.label);
          return;
        }
        if (!form[f.name]) missing.push(f.label);
      }
    });

    // extra check: if who === other and otherName exists in config but empty
    if (form["who"] === "other" && fields.some((f) => f.name === "otherName") && !form["otherName"]) {
      missing.push("Other Person Name");
    }

    // baby-specific
    if (serviceType === "numerology_baby_name") {
      if (!form["childDob"]) missing.push("Child DOB");
      if (!form["childGender"]) missing.push("Child Gender");
    }

    return { ok: missing.length === 0, missing };
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!acceptedTerms) {
      alert("Please accept Terms & Conditions to proceed.");
      return;
    }

    const { ok, missing } = validate();
    if (!ok) {
      alert("Please fill required fields:\n" + (missing?.join(", ") || ""));
      return;
    }

    // Build WhatsApp message
    let message = `*${serviceType.replace(/_/g, " ").toUpperCase()} REQUEST*\n\n`;

    // Basic info first
    ["name", "email", "phone"].forEach((k) => {
      if (form[k]) message += `*${k}:* ${form[k]}\n`;
    });

    // Append all other fields in config order
    fields.forEach((f) => {
      if (["name", "email", "phone"].includes(f.name)) return;
      if (f.name === "otherName" && form["who"] !== "other") return; // skip when not needed
      if (form[f.name]) {
        message += `*${f.label}:* ${form[f.name]}\n`;
      }
    });

    // baby extras (rasi/star/word search fields)
    if (serviceType === "numerology_baby_name") {
      if (form["birthRasi"]) message += `*Birth Rasi:* ${form["birthRasi"]}\n`;
      if (form["birthStar"]) message += `*Birth Star:* ${form["birthStar"]}\n`;
      ["nameStartsWith","nameEndsWith","nameContains1","nameContains2","surnameInitials","filters"].forEach((k) => {
        if (form[k]) message += `*${k}:* ${form[k]}\n`;
      });
    }

    // Add service delivery notes automatically
    if (serviceType.startsWith("numerology")) {
      message += `\n_Note:_ Numerology report will be delivered to your provided email within 2 business days.\nSupport: numberinfo.astrobrahma.com\n`;
    }
    if (serviceType.startsWith("muhurt") || serviceType === "muhurt_vivaha") {
      message += `\n_Note:_ Muhurt reports deliver within 2 business days. Support: muhurtinfo.astrobrahma.com\n`;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Reset & close
    setForm(initialState);
    setAcceptedTerms(false);
    onOpenChange(false);
  };

  /* Styling helpers */
  const LABEL = "text-foreground font-medium mb-2 block";
  const INPUT = "bg-background border border-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/50";


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* DialogContent: fixed height + flex column so header/footer stay fixed and middle area scrolls */}
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-4">
        {/* Header (fixed) */}
        <DialogHeader className="px-6 pt-2 flex-shrink-0 bg-background">
          <DialogTitle className="text-2xl text-center font-playfair text-primary capitalize">
            {serviceType.replace(/_/g, " ")}
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable body (accordion + form) */}
        <ScrollArea className="flex-1 overflow-y-auto px-4 md:px-6">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
            <Accordion type="single" collapsible defaultValue="basic">
              <AccordionItem value="basic">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 ">
                  Basic Information
                </AccordionTrigger>

                <AccordionContent className="space-y-4 pt-4 pb-2 px-4">
                  {/* Basic fields (name,email,phone) */}
                  {fields.filter((f) => ["name", "email", "phone"].includes(f.name)).map((f) => (
                    <div key={f.name}>
                      <Label className={LABEL}>{f.label}{f.required ? " *" : ""}</Label>
                      <Input
                        id={f.name}
                        className={`${INPUT} px-3 py-2`}
                        placeholder={f.placeholder}
                        value={form[f.name] || ""}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                      />
                    </div>
                  ))}

                  {/* who: self/other (if present in config) */}
                  {fields.some((f) => f.name === "who") && (
                    <div>
                      <Label className={LABEL}>Consultation For *</Label>
                      <RadioGroup value={form["who"] || "self"} onValueChange={(v) => handleChange("who", v)} className="flex gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="who_self" value="self" />
                          <Label htmlFor="who_self" className="cursor-pointer font-normal">Self</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="who_other" value="other" />
                          <Label htmlFor="who_other" className="cursor-pointer font-normal">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {/* Other person's name appears only when who === 'other' */}
                  {form["who"] === "other" && fields.some((f) => f.name === "otherName") && (
                    <div>
                      <Label className={LABEL}>Other Person Name *</Label>
                      <Input
                        className={`${INPUT} px-3 py-2`}
                        value={form["otherName"] || ""}
                        onChange={(e) => handleChange("otherName", e.target.value)}
                        placeholder="Other person's name"
                      />
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Service-specific details */}
            {/* For non-baby services we show a single "Service Details" accordion */}
            {serviceType !== "numerology_baby_name" && (
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                    Service Details
                  </AccordionTrigger>

                  <AccordionContent className="space-y-4 pt-4 pb-2 px-4">
                    {fields.filter((f) => !["name","email","phone","who","otherName"].includes(f.name)).map((f) => {
                      // render by type
                      if (f.type === "textarea") {
                        return (
                          <div key={f.name}>
                            <Label className={LABEL}>{f.label}</Label>
                            <Textarea className={`${INPUT} px-3 py-2`} rows={4} value={form[f.name] || ""} onChange={(e) => handleChange(f.name, e.target.value)} />
                          </div>
                        );
                      }
                      if (f.type === "select") {
                        return (
                          <div key={f.name}>
                            <Label className={LABEL}>{f.label}</Label>
                            <Select value={form[f.name] || ""} onValueChange={(v) => handleChange(f.name, v)}>
                              <SelectTrigger className={INPUT}><SelectValue placeholder={f.placeholder || "Select"} /></SelectTrigger>
                              <SelectContent>
                                {f.options?.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        );
                      }
                      if (f.type === "radio") {
                        return (
                          <div key={f.name}>
                            <Label className={LABEL}>{f.label}</Label>
                            <RadioGroup value={form[f.name] || ""} onValueChange={(v) => handleChange(f.name, v)} className="mt-2 flex gap-4 flex-wrap">
                              {f.options?.map((opt) => (
                                <div key={opt.value} className="flex items-center gap-2">
                                  <RadioGroupItem id={`${f.name}_${opt.value}`} value={opt.value} />
                                  <Label htmlFor={`${f.name}_${opt.value}`} className="cursor-pointer font-normal">{opt.label}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        );
                      }
                      // default single-line input
                      return (
                        <div key={f.name}>
                          <Label className={LABEL}>{f.label}</Label>
                          <Input className={`${INPUT} px-3 py-2`} value={form[f.name] || ""} placeholder={f.placeholder || ""} onChange={(e) => handleChange(f.name, e.target.value)} type={f.type} />
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}

            {/* Baby naming: use accordion sections (mobile friendly) */}
            {serviceType === "numerology_baby_name" && (
              <Accordion type="multiple" className="space-y-4">
                <AccordionItem value="baby_basic">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">Basic Baby Details</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 pb-2">
                    <div>
                      <Label className={LABEL}>Child Gender *</Label>
                      <RadioGroup value={form["childGender"] || ""} onValueChange={(v) => handleChange("childGender", v)} className="mt-2 flex gap-4">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="cg_m" value="male" />
                          <Label htmlFor="cg_m" className="cursor-pointer font-normal">Male</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="cg_f" value="female" />
                          <Label htmlFor="cg_f" className="cursor-pointer font-normal">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className={LABEL}>Child DOB *</Label>
                      <Input type="date" className={`${INPUT} px-3 py-2`} value={form["childDob"] || ""} onChange={(e) => handleChange("childDob", e.target.value)} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className={LABEL}>Child Time</Label>
                        <Input type="time" className={`${INPUT} px-3 py-2`} value={form["childTime"] || ""} onChange={(e) => handleChange("childTime", e.target.value)} />
                      </div>
                      <div>
                        <Label className={LABEL}>Child Name (if any)</Label>
                        <Input className={`${INPUT} px-3 py-2`} value={form["childName"] || ""} onChange={(e) => handleChange("childName", e.target.value)} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className={LABEL}>Mother's Name</Label>
                        <Input className={`${INPUT} px-3 py-2`} value={form["motherName"] || ""} onChange={(e) => handleChange("motherName", e.target.value)} />
                      </div>
                      <div>
                        <Label className={LABEL}>Father's Name</Label>
                        <Input className={`${INPUT} px-3 py-2`} value={form["fatherName"] || ""} onChange={(e) => handleChange("fatherName", e.target.value)} />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="word">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">Word Search Preferences</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 pb-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className={LABEL}>Name starting with</Label>
                        <Input className={`${INPUT} px-3 py-2`} value={form["nameStartsWith"] || ""} onChange={(e) => handleChange("nameStartsWith", e.target.value)} />
                      </div>
                      <div>
                        <Label className={LABEL}>Name ending with</Label>
                        <Input className={`${INPUT} px-3 py-2`} value={form["nameEndsWith"] || ""} onChange={(e) => handleChange("nameEndsWith", e.target.value)} />
                      </div>
                      <div className="md:col-span-2">
                        <Label className={LABEL}>Name containing (two options)</Label>
                        <div className="flex gap-2">
                          <Input className={`${INPUT} px-3 py-2`} value={form["nameContains1"] || ""} onChange={(e) => handleChange("nameContains1", e.target.value)} placeholder="Option 1" />
                          <Input className={`${INPUT} px-3 py-2`} value={form["nameContains2"] || ""} onChange={(e) => handleChange("nameContains2", e.target.value)} placeholder="Option 2" />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="num">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">Numerology Preferences</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 pb-2">
                    <div>
                      <Label className={LABEL}>Surname / Initials</Label>
                      <Input className={`${INPUT} px-3 py-2`} value={form["surnameInitials"] || ""} onChange={(e) => handleChange("surnameInitials", e.target.value)} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className={LABEL}>Birth Rasi</Label>
                        <Select value={form["birthRasi"] || ""} onValueChange={(v) => handleChange("birthRasi", v)}>
                          <SelectTrigger className={INPUT}><SelectValue placeholder="Select Rasi" /></SelectTrigger>
                          <SelectContent>{RASI_OPTIONS.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className={LABEL}>Birth Star (Nakshatra)</Label>
                        <Select value={form["birthStar"] || ""} onValueChange={(v) => handleChange("birthStar", v)}>
                          <SelectTrigger className={INPUT}><SelectValue placeholder="Select Nakshatra" /></SelectTrigger>
                          <SelectContent>{NAKSHATRA_OPTIONS.map((opt) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="guidance">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">Additional Guidance</AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <Textarea className={`${INPUT} px-3 py-2`} rows={4} value={form["filters"] || ""} onChange={(e) => handleChange("filters", e.target.value)} placeholder="Any culture / preference / style notes" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </form>
        </ScrollArea>
                  <p className="text-xs text-left px-6 text-secondary">
          Note : report will deliver to your provided mail id within 2 business days.
          </p>

        {/* Footer (fixed) */}
        <div className="px-6 py-2  bg-background flex-shrink-0 space-y-4">
          <div className="flex items-center gap-3">
  <Checkbox
    id="terms"
    className="rounded-[4px]"
    checked={acceptedTerms}
    onCheckedChange={(v) => setAcceptedTerms(!!v)}
  />

  <Label htmlFor="terms" className="text-sm font-medium cursor-pointer">
    I agree to AstroWak's Terms & Conditions
  </Label>
</div>


<PayButton amount={price} disabled={!acceptedTerms} email={form.email} name={form.name} />

<p className="text-xs text-secondary mt-1 ml-7">
  You agree to delivery timelines & consultation policy.
</p>


          <div className="flex gap-3">
            <Button type="button" className="flex-1 bg-primary text-primary-foreground" onClick={() => handleSubmit()} disabled={!acceptedTerms}>
              Send via WhatsApp
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          </div>


        </div>
      </DialogContent>
    </Dialog>
  );
}
