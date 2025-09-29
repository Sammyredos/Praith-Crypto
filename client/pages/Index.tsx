import { useState } from 'react';
import { ChevronDown, Quote } from 'lucide-react';
import Header from '../components/Header';
import FasterSettlements from '../components/FasterSettlements';
import CryptoLogos from '../components/CryptoLogos';
import { useLanguage } from '../contexts/LanguageContext';

export default function Index() {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const { t, translations } = useLanguage();

  // FAQ Data from translations
  const faqData = translations.faqData || [];

  // Testimonials Data from translations
  const testimonials = translations.testimonialsData || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-0 bg-black overflow-hidden">
        {/* Detailed Grid Pattern from Figma */}
        <div className="absolute z-0 inset-0 w-full h-full opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(208, 213, 221, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(208, 213, 221, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(208, 213, 221, 0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(208, 213, 221, 0.35) 1px, transparent 1px)
              `,
              backgroundSize: '96px 96px, 96px 96px, 96px 96px, 96px 96px',
              backgroundPosition: '0 0, 0 0, 0 96px, 0 96px'
            }}
          >
            {/* Highlighted grid blocks */}
            <div className="relative w-full h-full">
              {/* Row 2 highlights */}
              <div className="absolute top-24 left-48 w-24 h-24 bg-gray-100/35"></div>
              <div className="absolute top-24 right-5 w-24 h-24 bg-gray-100/35"></div>

              {/* Row 3 highlights */}
              <div className="absolute top-48 left-96 w-24 h-24 bg-gray-100/35"></div>
              <div className="absolute top-48 right-12 w-24 h-24 bg-gray-100/35"></div>

              {/* Row 4 highlights */}
              <div className="absolute top-72 left-[672px] w-24 h-24 bg-gray-100/35"></div>
              <div className="absolute top-72 left-[1056px] w-24 h-24 bg-gray-100/35"></div>

              {/* Row 5 highlights */}
              <div className="absolute top-96 left-48 w-24 h-24 bg-gray-100/35"></div>
              <div className="absolute top-96 right-12 w-24 h-24 bg-gray-100/35"></div>

              {/* Row 6 highlights - lighter */}
              <div className="absolute top-[480px] left-[768px] w-24 h-24 bg-gray-100/10"></div>
              <div className="absolute top-[480px] right-0 w-24 h-24 bg-gray-100/10"></div>

              {/* Row 7 highlights */}
              <div className="absolute top-[576px] left-96 w-24 h-24 bg-gray-100/35"></div>

              {/* Row 8 highlights - lighter */}
              <div className="absolute top-[672px] left-72 w-24 h-24 bg-gray-100/10"></div>
              <div className="absolute top-[672px] right-0 w-24 h-24 bg-gray-100/10"></div>

              {/* Row 9 highlights - lighter */}
              <div className="absolute top-[768px] left-[768px] w-24 h-24 bg-gray-100/10"></div>
              <div className="absolute top-[768px] right-12 w-24 h-24 bg-gray-100/10"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-27">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center md:text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 justify-center md:justify-center lg:justify-start">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7322_4302)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_7322_4302" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EF3E3D"/>
                      <stop offset="1" stopColor="#FFC828"/>
                    </linearGradient>
                    <clipPath id="clip0_7322_4302">
                      <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-praith-white font-medium text-sm uppercase tracking-wider">{t('hero.trustedPlatform')}</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h1 className="font-bold leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {t('hero.mainHeading1')}
                </h1>
                <h1 className="font-bold text-brand-green leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {t('hero.mainHeading2')}
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl md:max-w-none lg:max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
              
              {/* CTA Button */}
              <div className="pt-4 sm:pt-6 flex justify-center md:flex md:justify-center lg:justify-start">
                <button className="bg-brand-green text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
                  {t('hero.getStarted')}
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src="/assets_b31603029ccf4c2dbca01eb59214ec6c_4c57e91d0a1449bc9cfe85f192c5e67c.webp"
                alt="Global Blockchain Network"
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-2xl sm:rounded-3xl shadow-2xl object-contain relative z-100 lg:object-none"
              />
            </div>
          </div>
        </div>
        
        {/* Crypto Logos Strip */}
        <CryptoLogos />
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Mobile/Tablet: Processing Container at Top */}
            <div className="relative h-full order-1 lg:order-1 lg:col-span-1">
              <div className="bg-gray-100 h-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-20 border border-gray-200">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl max-w-sm sm:max-w-md mx-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">Processing</span>
                    </div>
                    <div className="border border-gray-300 px-3 py-1 rounded text-xs">
                      Network: ETH Mainnet
                    </div>
                  </div>
                  
                  {/* Amount */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-center">
                    <p className="text-xs text-gray-600 mb-2">Payment Amount</p>
                    <p className="text-xl font-medium">3,200.00 USDT</p>
                    <p className="text-xs text-gray-500">$4,8000.00</p>
                  </div>
                  
                  {/* Loading */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-4 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
                    <p className="font-medium mb-2">Confirming</p>
                    <p className="text-xs text-gray-500">Waiting for network confirmation....</p>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600 mb-1">Network Fee</p>
                      <p className="text-sm font-medium">0.001 ETH</p>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-600 mb-1">Status</p>
                      <p className="text-sm font-medium">Confirming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 lg:col-span-1">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 bg-praith-neutral-50 border border-praith-neutral-200 px-4 py-2 rounded-lg">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7322_4302_about)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302_about)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_7322_4302_about" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#EF3E3D"/>
                      <stop offset="1" stopColor="#FFC828"/>
                    </linearGradient>
                    <clipPath id="clip0_7322_4302_about">
                      <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                  </svg>
                  <span className="text-praith-dark font-medium text-sm uppercase tracking-wider">{t('about.badge')}</span>
                </div>
              </div>
              
              {/* Heading */}
              <h2 className="font-bold leading-tight text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {t('about.heading')}
              </h2>
              
              {/* Features */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-brand-green-light border border-brand-green-light rounded-xl p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2">{t('about.globalAccessibility.title')}</h3>
                  <p className="text-gray opacity-80 text-sm sm:text-base">{t('about.globalAccessibility.description')}</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-praith-dark">{t('about.lowFees.title')}</h3>
                  <p className="text-gray-600 opacity-80 text-sm sm:text-base">{t('about.lowFees.description')}</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-praith-dark">{t('about.fastSettlement.title')}</h3>
                  <p className="text-gray-600 opacity-80 text-sm sm:text-base">{t('about.fastSettlement.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Left Content Card */}
            <div className="flex-1 relative rounded-[22px] overflow-hidden">
              <div
                className="relative bg-[#F7FCE4] rounded-[20px] p-11 lg:p-16 bg-contain lg:bg-cover bg-bottom sm:bg-center bg-no-repeat min-h-[556px] sm:min-h-[800px]"
                style={{
                  backgroundImage: `url('/01a29649ab67662e61322260e16c76d8dcb8c3eb.png')`
                }}
              >
                <div className="relative z-10 max-w-[553px] space-y-7">
                  <div className="space-y-7">
                    <div className="text-brand-green text-base font-semibold uppercase tracking-[2px] leading-4">
                      {t('anywhere.badge')}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#1B1F28] leading-tight tracking-wide">
                      {t('anywhere.heading')}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-[549px]">
                    {t('anywhere.description')}
                  </p>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[134px] rounded-b-[20px] bg-gradient-to-t from-brand-green to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Right Image - Hidden on mobile and tablet */}
            <div className="flex-1 hidden lg:block">
              <img
                src="/535b5abc71113907f6e43043a8f003f4a87f2476.png"
                alt="Woman using mobile payments"
                className="w-full h-auto rounded-[20px]"
                style={{
                  maxHeight: '802px',
                  objectFit: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faster Settlements Section */}
      <FasterSettlements />

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute flex whitespace-nowrap"
            style={{
              top: '3px',
              left: '0',
              width: '100vw',
              height: '275px',
              opacity: '1'
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  fontFamily: 'Afacad, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: 'clamp(120px, 20vw, 250px)',
                  fontWeight: '700',
                  color: 'rgba(0,0,0,0.7)',
                  WebkitTextStroke: '1px rgba(150, 244, 19, 0.22)',
                  lineHeight: '110%',
                  marginRight: 'clamp(12px, 3vw, 24px)'
                }}
              >
                PRAITH
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7322_4302)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_7322_4302" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF3E3D"/>
                    <stop offset="1" stopColor="#FFC828"/>
                  </linearGradient>
                  <clipPath id="clip0_7322_4302">
                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-black font-medium text-sm uppercase">{t('howItWorks.badge')}</span>
            </div>

            <h2 className="font-bold text-white uppercase leading-[120%] max-w-[709px] px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {t('howItWorks.heading')}
            </h2>
            <p className="text-white text-base sm:text-lg leading-6 px-4">{t('howItWorks.description')}</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting Lines */}
            <svg className="absolute top-1/3 left-16 right-16 h-2 text-brand-green hidden lg:block pointer-events-none" style={{ width: '963px', height: '193px', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }} viewBox="0 0 965 195">
              <path d="M1 108.223C66.7345 27.31 258.547 -85.9682 499.919 108.223C648.599 237.35 841.447 206.82 964 108.223" stroke="#96F413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 10"/>
            </svg>

            {/* Step 1 */}
            <div className="border border-gray-600/30 rounded-[21px] p-4 sm:p-6 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col items-center gap-4 sm:gap-5 relative" style={{ minHeight: 'clamp(350px, 50vw, 443px)' }}>
              <div className="absolute top-0 left-0 bg-brand-green text-white w-[56px] sm:w-[68px] h-10 sm:h-12 rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tight">
                1
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
                {/* Visual */}
                <div className="w-full max-w-[240px] sm:max-w-[281px] h-[160px] sm:h-[200px] flex items-center justify-center">
                  <img 
                    src="/create image.png" 
                    alt="Create Account Process" 
                    className="w-full h-full object-cover sm:object-none rounded-[15px] sm:rounded-[20px]"
                  />
                </div>

                {/* Content */}
                <div className="text-left space-y-2 sm:space-y-3 max-w-[280px] sm:max-w-[303px] px-2 sm:px-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">{t('howItWorks.steps.createAccount.title')}</h3>
                  <p className="text-white text-sm sm:text-base leading-[20px] sm:leading-[22px]">
                    {t('howItWorks.steps.createAccount.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-600/30 rounded-[21px] p-4 sm:p-6 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col items-center gap-4 sm:gap-5 relative" style={{ minHeight: 'clamp(350px, 50vw, 443px)' }}>
              <div className="absolute top-0 left-0 bg-brand-green text-white w-[56px] sm:w-[68px] h-10 sm:h-12 rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tight">
                2
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
                {/* Visual */}
                <div className="w-full max-w-[240px] sm:max-w-[283px] h-[160px] sm:h-[200px] flex items-center justify-center">
                  <img 
                    src="/kyc verification.png" 
                    alt="KYC Verification Process" 
                    className="w-full h-full object-cover sm:object-none rounded-[15px] sm:rounded-[20px]"
                  />
                </div>

                {/* Content */}
                <div className="text-left space-y-2 sm:space-y-3 max-w-[280px] sm:max-w-[303px] px-2 sm:px-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">{t('howItWorks.steps.kycVerification.title')}</h3>
                  <p className="text-white text-sm sm:text-base leading-[20px] sm:leading-[22px]">
                    {t('howItWorks.steps.kycVerification.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-600/30 rounded-[21px] p-4 sm:p-6 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col items-center gap-4 sm:gap-5 relative lg:col-span-1" style={{ minHeight: 'clamp(350px, 50vw, 443px)' }}>
              <div className="absolute top-0 left-0 bg-brand-green text-white w-[56px] sm:w-[68px] h-10 sm:h-12 rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tight">
                3
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
                {/* Visual */}
                <div className="w-full max-w-[240px] sm:max-w-[273px] h-[160px] sm:h-[200px] flex items-center justify-center">
                  <img 
                    src="/integration.png" 
                    alt="Integration Process" 
                    className="w-full h-full object-cover sm:object-none rounded-[15px] sm:rounded-[20px]"
                  />
                </div>

                {/* Content */}
                <div className="text-left space-y-2 sm:space-y-3 max-w-[220px] sm:max-w-[244px] px-2 sm:px-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">{t('howItWorks.steps.integrationDone.title')}</h3>
                  <p className="text-white text-sm sm:text-base leading-[20px] sm:leading-[22px]">
                    {t('howItWorks.steps.integrationDone.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-praith-neutral-50 border border-praith-neutral-200 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7322_4302_features)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302_features)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_7322_4302_features" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF3E3D"/>
                    <stop offset="1" stopColor="#FFC828"/>
                  </linearGradient>
                  <clipPath id="clip0_7322_4302_features">
                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-praith-dark font-medium text-sm uppercase tracking-wider">{t('features.badge')}</span>
            </div>
            
            <h2 className="font-bold leading-tight mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {t('features.heading')}
            </h2>
            <p className="text-base sm:text-lg text-black px-4">{t('features.description')}</p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 */}
            <div className="bg-praith-light-gray rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/lower fees.svg" alt="Lower Fees" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.lowerFees.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('features.items.lowerFees.description')}</p>
              </div>
            </div>
            
            {/* Feature 2 - Featured */}
            <div className="bg-black text-white rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/no bank.svg" alt="No Bank Account Needed" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.noBankAccount.title')}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{t('features.items.noBankAccount.description')}</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-praith-light-gray rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/borderless payment.svg" alt="Borderless Payments" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.borderlessPayments.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('features.items.borderlessPayments.description')}</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-praith-light-gray rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/zero.svg" alt="Zero Chargebacks" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.zeroChargebacks.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('features.items.zeroChargebacks.description')}</p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-praith-light-gray rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/stable.svg" alt="Stable Payments" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.stablePayments.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('features.items.stablePayments.description')}</p>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-praith-light-gray rounded-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <img src="/devloper friendly.svg" alt="Developer-Friendly" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{t('features.items.developerFriendly.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('features.items.developerFriendly.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-praith-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-praith-neutral-50 border border-praith-neutral-200 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_7322_4302_testimonial)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302_testimonial)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_7322_4302_testimonial" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF3E3D"/>
                    <stop offset="1" stopColor="#FFC828"/>
                  </linearGradient>
                  <clipPath id="clip0_7322_4302_testimonial">
                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-praith-dark font-medium text-sm uppercase tracking-wider">{t('testimonials.badge')}</span>
            </div>
            
            <h2 className="font-bold text-black uppercase px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {t('testimonials.heading')}
            </h2>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 sm:p-8 ${
                  testimonial.featured ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                <Quote className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 ${testimonial.featured ? 'text-brand-green-light' : 'text-black'}`} />
                <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${testimonial.featured ? 'text-white' : 'text-praith-dark'}`}>
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className={`text-sm sm:text-base font-medium ${testimonial.featured ? 'text-white' : 'text-praith-dark'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs sm:text-sm ${testimonial.featured ? 'text-gray-400' : 'text-praith-gray'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Side */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 bg-praith-neutral-50 border border-praith-neutral-200 px-4 py-2 rounded">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="paint0_linear_7322_4302_faq" x1="11.1985" y1="4.41639" x2="3.19901" y2="12.4159" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EF3E3D"/>
                        <stop offset="1" stopColor="#FFC828"/>
                      </linearGradient>
                      <clipPath id="clip0_7322_4302_faq">
                        <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#clip0_7322_4302_faq)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.25564 14.3359C8.95178 13.3064 9.01593 12.1945 8.44808 11.0002C8.29017 11.6409 8.00131 12.0298 7.58148 12.1669C7.97134 11.0535 7.64557 9.85058 6.60413 8.55818C6.58165 9.89299 6.26088 10.8653 5.64179 11.4752C4.78894 12.3146 4.79898 13.2619 5.67187 14.3171C2.04833 12.3888 1.53711 9.80248 4.13816 6.55834C4.29949 7.34206 4.69042 7.82323 5.31101 8.00184C4.63456 5.13127 5.34629 2.68534 7.44618 0.664062C7.45908 5.14972 8.83461 5.54842 10.5738 7.55072C12.4515 9.95358 11.348 12.7265 8.25564 14.3359Z" fill="url(#paint0_linear_7322_4302_faq)"/>
                    </g>
                  </svg>
                  <span className="text-praith-dark font-medium text-sm uppercase tracking-wider">{t('faq.badge')}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left">{t('faq.heading')}</h2>
                <p className="text-gray-600 text-base sm:text-lg text-center lg:text-left">{t('faq.description')}</p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <button className="bg-brand-green text-black font-semibold px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-brand-green/90 transition-all w-full sm:w-auto">
                  <span className="text-base sm:text-lg">{t('faq.haveQuestion')}</span>
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-90" />
                </button>
              </div>
            </div>
            
            {/* Right Side - FAQ Items */}
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className={`rounded-xl border ${
                  openFaq === faq.id 
                    ? 'border-brand-green' 
                    : 'border-gray-300 bg-white'
                }`} style={openFaq === faq.id ? { backgroundColor: '#D8FEA3' } : {}}>
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between"
                  >
                    <span className={`text-base sm:text-lg ${
                      openFaq === faq.id ? 'font-semibold text-black' : 'font-normal text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ml-2 ${
                      openFaq === faq.id 
                        ? 'rotate-180 text-brand-green' 
                        : 'text-gray-400'
                    }`} />
                  </button>
                  
                  {openFaq === faq.id && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
          <div className="bg-black rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Vector Images */}
            <img 
              src="/Vector-top-right.png" 
              alt="Vector Top Right" 
              className="absolute top-0 right-0 w-auto h-auto object-contain pointer-events-none z-10"
            />
            <img 
              src="/Vector-bottom-left-corner.png" 
              alt="Vector Bottom Left" 
              className="absolute bottom-0 left-0 w-auto h-auto object-contain pointer-events-none z-10"
            />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 relative z-20">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-brand-green text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('ctaSection.badge')}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3 sm:mt-4 max-w-lg mx-auto lg:mx-0">
                  {t('ctaSection.heading')}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mt-4 sm:mt-6">
                  {t('ctaSection.description')}
                </p>
              </div>
              
              <div className="flex-shrink-0 lg:mt-16 w-full lg:w-auto">
                <button className="bg-brand-green text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105 w-full lg:w-auto">
                  {t('ctaSection.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Green radial gradients at bottom corners */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full translate-y-1/2" style={{transform: 'translateX(calc(-50% + 2vw)) translateY(50%)'}}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full translate-y-1/2" style={{transform: 'translateX(calc(50% - 2vw)) translateY(50%)'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Left Section */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/logo.png"
                  alt="Praith Logo" 
                  className="h-5 xs:h-6 sm:h-7 md:h-8 lg:h-8 w-auto object-contain lg:object-none"
                />
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                <a href="#about" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.aboutUs')}</a>
                <a href="#features" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.features')}</a>
                <a href="#how-it-works" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.howItWorks')}</a>
                <a href="#faqs" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.faqs')}</a>
                <a href="#contact" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.contact')}</a>
              </div>
            </div>
            
            {/* Right Section - Newsletter */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row rounded-lg border border-gray-600 overflow-hidden">
                <input 
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')} 
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
                />
                <button className="bg-brand-green text-black font-medium px-4 sm:px-6 py-3 sm:py-4 hover:bg-brand-green/90 transition-colors text-sm sm:text-base">
                  {t('footer.newsletter.button')}
                </button>
              </div>
              <p className="text-praith-white text-center lg:text-right text-sm sm:text-base">{t('footer.newsletter.commitment')}</p>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              <p className="text-praith-white text-sm sm:text-base text-center lg:text-left">{t('footer.copyright')}</p>
              
              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
                {[
                  'facebook', 'twitter', 'linkedin', 'instagram'
                ].map((social) => (
                  <a 
                    key={social} 
                    href={`#${social}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-700 rounded-lg bg-black flex items-center justify-center hover:border-brand-green hover:bg-brand-green/10 transition-all"
                  >
                    <img 
                      src={`/${social}.png`} 
                      alt={`${social.charAt(0).toUpperCase() + social.slice(1)} icon`}
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Praith Display Images - Multiplied across viewport */}
         <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <img 
              src="/praith display.png" 
              alt="Praith Display" 
              className="w-auto object-contain opacity-80"
            />
            <img 
              src="/praith display.png" 
              alt="Praith Display" 
              className="w-auto object-contain opacity-80 hidden sm:block"
            />
            <img 
              src="/praith display.png" 
              alt="Praith Display" 
              className="w-auto object-contain opacity-80 hidden md:block"
            />
            <img 
              src="/praith display.png" 
              alt="Praith Display" 
              className="w-auto object-contain opacity-80 hidden lg:block"
            />
            <img 
              src="/praith display.png" 
              alt="Praith Display" 
              className="w-auto object-contain opacity-80 hidden xl:block"
            />
          </div>
      </footer>
    </div>
  );
}
