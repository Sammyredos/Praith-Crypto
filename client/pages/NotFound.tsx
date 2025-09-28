import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const handleReturnHome = () => {
    navigate(`/${language}`);
  };

  const handleGoBack = () => {
    // Check if there's a previous page in history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to home page if no history
      navigate(`/${language}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Logo */}
      <div className="mb-12">
        <img 
          src="/logo.png" 
          alt="Praith Logo" 
          className="w-auto"
        />
      </div>

      {/* Large 404 Text */}
      <div className="text-center mb-8">
        <h1 className="text-[200px] sm:text-[250px] md:text-[300px] font-bold leading-none text-brand-green opacity-80">
          404
        </h1>
      </div>

      {/* Error Message */}
      <div className="text-center mb-12 max-w-md">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          {t('notFound.heading')}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {t('notFound.description')}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={handleReturnHome}
          className="flex items-center gap-2 bg-brand-green hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <Home className="w-5 h-5" />
          {t('notFound.returnHome')}
        </button>
        
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 bg-transparent border border-gray-600 hover:border-gray-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('notFound.goBack')}
        </button>
      </div>

      {/* Error Details */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
          <span className="text-xs text-gray-400 uppercase tracking-wider">{t('notFound.errorCode')}</span>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">{t('notFound.path')}</span>
          <code className="text-sm font-mono text-brand-green bg-gray-800/50 px-2 py-1 rounded">{location.pathname}</code>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
