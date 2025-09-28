import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* Language-specific routes - only valid language codes */}
        <Route path="/en" element={<Index />} />
        <Route path="/es" element={<Index />} />
        <Route path="/fr" element={<Index />} />
        <Route path="/de" element={<Index />} />
        <Route path="/zh" element={<Index />} />
        <Route path="/pt" element={<Index />} />
        
        {/* Product page routes for all languages */}
        <Route path="/product/en" element={<ProductPage />} />
        <Route path="/product/es" element={<ProductPage />} />
        <Route path="/product/fr" element={<ProductPage />} />
        <Route path="/product/de" element={<ProductPage />} />
        <Route path="/product/zh" element={<ProductPage />} />
        <Route path="/product/pt" element={<ProductPage />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
