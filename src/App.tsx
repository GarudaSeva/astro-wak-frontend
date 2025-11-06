import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this line
import Home from "./pages/Home";
import Horoscope from "./pages/Horoscope";
import Numerology from "./pages/Numerology";
import Gems from "./pages/Gems";
import ShubhaMuhurt from "./pages/ShubhaMuhurt";
import PoojaHoma from "./pages/PoojaHoma";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 👇 Add this line inside BrowserRouter, before content */}
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/horoscope" element={<Horoscope />} />
              <Route path="/numerology" element={<Numerology />} />
              <Route path="/gems" element={<Gems />} />
              <Route path="/muhurt" element={<ShubhaMuhurt />} />
              <Route path="/pooja" element={<PoojaHoma />} />
              <Route path="/blog" element={<Blog />} />
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
