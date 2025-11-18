import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Horoscope from "./pages/Horoscope";
import Numerology from "./pages/Numerology";
import Gems from "./pages/Gems";
import ShubhaMuhurt from "./pages/ShubhaMuhurt";
import PoojaHoma from "./pages/PoojaHoma";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ConsultationPage from "./pages/BookingPage";
import ConsultationForm from "./pages/BookingPage";

const queryClient = new QueryClient();

// ✅ Helper Layout Component
const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/admin" || 
  location.pathname.startsWith("/book/");

  return (
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
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/horoscope/:slug" element={<ServiceDetailsPage/>} />
          <Route path="/numerology/:slug" element={<ServiceDetailsPage/>} />
          <Route path="/pooja/:slug" element={<ServiceDetailsPage />} />
          <Route path="/muhurt/:slug" element={<ServiceDetailsPage />} />

          <Route path="/book/:serviceType" element={<ConsultationForm />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* 👇 Show footer everywhere except admin */}
      {!hideFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
