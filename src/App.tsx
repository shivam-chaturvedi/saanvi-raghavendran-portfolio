import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SvarAI from "./pages/SvarAI";
import AlphaBlend from "./pages/AlphaBlend";
import APRChatbot from "./pages/APRChatbot";
import SocialImpact from "./pages/SocialImpact";
import Performances from "./pages/Performances";
import Awards from "./pages/Awards";
import MediaKit from "./pages/MediaKit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/svarai" element={<SvarAI />} />
            <Route path="/projects/alpha-blend" element={<AlphaBlend />} />
            <Route path="/projects/apr-chatbot" element={<APRChatbot />} />
            <Route path="/social-impact" element={<SocialImpact />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/media-kit" element={<MediaKit />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
