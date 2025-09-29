import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

// Component to handle language-based routing
const LanguageRouter = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  // Valid language codes
  const validLanguages = ['en', 'es', 'fr', 'de', 'zh', 'pt'];
  
  // Check if the first segment is a valid language
  const isValidLanguage = validLanguages.includes(firstSegment);
  
  // If no language in path or invalid language, redirect to /en
  if (!firstSegment || !isValidLanguage) {
    // If it's root path, redirect to /en
    if (location.pathname === '/') {
      return <Navigate to="/en" replace />;
    }
    // If it's an invalid path that doesn't start with a language, show 404
    return <NotFound />;
  }
  
  // Extract the rest of the path after language
  const restOfPath = pathSegments.slice(1).join('/');
  
  // Route based on the path after language
  if (restOfPath === '' || restOfPath === '/') {
    // Language root (e.g., /en, /es)
    return <Index />;
  } else if (restOfPath === 'product') {
    // Product page (e.g., /en/product, /es/product)
    return <ProductPage />;
  } else {
    // Invalid route for this language
    return <NotFound />;
  }
};

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        {/* Handle all routes with the LanguageRouter */}
        <Route path="/*" element={<LanguageRouter />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
