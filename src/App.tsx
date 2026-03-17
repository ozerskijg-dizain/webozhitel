import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Demo pages
import CoffeeDemo from "./pages/demos/CoffeeDemo";
import BeautySalonDemo from "./pages/demos/BeautySalonDemo";
import NewsDemo from "./pages/demos/NewsDemo";
import SeafoodDemo from "./pages/demos/SeafoodDemo";
import HabitsDemo from "./pages/demos/HabitsDemo";
import CalculatorDemo from "./pages/demos/CalculatorDemo";
import NutritionCRMDemo from "./pages/demos/NutritionCRMDemo";
import PsychologistDemo from "./pages/demos/PsychologistDemo";
import AIConsultantDemo from "./pages/demos/AIConsultantDemo";
import AICRMDemo from "./pages/demos/AICRMDemo";
import AIAdminDemo from "./pages/demos/AIAdminDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Demo routes */}
          <Route path="/test/coffee" element={<CoffeeDemo />} />
          <Route path="/test/beauty-salon" element={<BeautySalonDemo />} />
          <Route path="/test/news" element={<NewsDemo />} />
          <Route path="/test/seafood" element={<SeafoodDemo />} />
          <Route path="/test/habits" element={<HabitsDemo />} />
          <Route path="/test/calculator" element={<CalculatorDemo />} />
          <Route path="/test/nutrition-crm" element={<NutritionCRMDemo />} />
          <Route path="/test/psychologist" element={<PsychologistDemo />} />
          <Route path="/test/ai-consultant" element={<AIConsultantDemo />} />
          <Route path="/test/ai-crm" element={<AICRMDemo />} />
          <Route path="/test/ai-admin" element={<AIAdminDemo />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
