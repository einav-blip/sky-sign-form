import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneEntry from "./pages/PhoneEntry";
import SelectSkydiver from "./pages/SelectSkydiver";
import ReviewDetails from "./pages/ReviewDetails";
import WaiverForm from "./pages/WaiverForm";
import WeightConfirmation from "./pages/WeightConfirmation";
import MedicalQuestionnaire from "./pages/MedicalQuestionnaire";
import Completion from "./pages/Completion";
import CRMDashboard from "./pages/CRMDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneEntry />} />
          <Route path="/select-skydiver" element={<SelectSkydiver />} />
          <Route path="/review-details/:skydiverId" element={<ReviewDetails />} />
          <Route path="/waiver/:skydiverId" element={<WaiverForm />} />
          <Route path="/weight-confirmation/:skydiverId" element={<WeightConfirmation />} />
          <Route path="/medical-questionnaire/:skydiverId" element={<MedicalQuestionnaire />} />
          <Route path="/completion/:skydiverId" element={<Completion />} />
          <Route path="/crm" element={<CRMDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
