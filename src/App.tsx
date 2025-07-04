
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Entidades from "./pages/Entidades";
import EntityDetail from "./pages/EntityDetail";
import CreateEntity from "./pages/CreateEntity";
import EditEntity from "./pages/EditEntity";
import Admin from "./pages/Admin";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/entidades" element={<Entidades />} />
          <Route path="/entidades/:id" element={<EntityDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/entities/new" element={<CreateEntity />} />
          <Route path="/admin/entities/edit/:id" element={<EditEntity />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
