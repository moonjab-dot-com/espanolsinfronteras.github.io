import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CoursePage from "@/pages/CoursePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [lang, setLang] = useState<"es" | "en">("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <Layout lang={lang} onToggleLang={toggleLang}>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/curso/:slug" element={<CoursePage lang={lang} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
