import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProductPage() {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const { t, translations } = useLanguage();

  // FAQ Data from translations
  const faqData = translations.faqData || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-0 bg-black overflow-hidden">
        {/* Green radial gradients at bottom corners */}
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full" style={{transform: 'translateX(calc(-50% + 2vw)) translateY(50%)'}}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full" style={{transform: 'translateX(calc(50% - 2vw)) translateY(50%)'}}></div>
        
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 xl:py-36">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                100% TRUSTED PLATFORM
              </span>
            </div>

            <h1 className="font-bold text-white mb-8 leading-tight" style={{fontSize: '48px'}}>
              POWERING GLOBAL PAYMENTS
              <br />
              WITH <span className="text-brand-green" style={{textShadow: '2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 0 2px 0 white, 2px 0 0 white, 0 -2px 0 white, -2px 0 0 white'}}>BLOCKCHAIN</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Praith Is A Blockchain-Powered Crypto Payment Gateway That Solves The Traditional 
              Payment Problems. Our Platform Enables Fast, Low-Fee, And Borderless Transactions Using 
              Stablecoins On The Tron And Binance Smart Chain (BEP-20) Networks.
            </p>

            <button className="bg-brand-green text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-12 sm:mb-16">
            Trusted by Over 5,500+ Industry Leaders
          </h3>
          
          {/* Crypto logos container - arranged in two rows like the image */}
          <div className="space-y-8">
            {/* First row - Tron, Bitcoin, Tether */}
            <div className="flex items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
              <img
                src="/tron-product.png"
                alt="Tron"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 object-contain"
              />
              <img
                src="/bitcoin-product.png"
                alt="Bitcoin"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 object-contain"
              />
              <img
                src="/tether-product.png"
                alt="Tether"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 object-contain"
              />
            </div>
            
            {/* Second row - Litecoin, Ethereum */}
            <div className="flex items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
              <img
                src="/litecoin-product.png"
                alt="Litecoin"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 object-contain"
              />
              <img
                src="/ether-product.png"
                alt="Ethereum"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  WHAT WE DO
                </span>
              </div>
              
              <h2 className="font-bold text-gray-900 mb-6 leading-tight sm:leading-[1.2] lg:leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px] text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
                Lorem ipsum dolor sit amet, consectetur elit.
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed" style={{fontSize: '16px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla 
                suspendisse tortor aene. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>

              {/* Feature List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#F1F5F9'}}>
                    <img src="/bank.png" alt="Bank" className="w-[25px] h-[25px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="text-gray-600" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#F1F5F9'}}>
                    <img src="/locate.png" alt="Locate" className="w-[25px] h-[25px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="text-gray-600" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#F1F5F9'}}>
                    <img src="/support.png" alt="Support" className="w-[25px] h-[25px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="text-gray-600" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-brand-green text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Right Content - Frame 129 Image */}
            <div className="relative h-full">
              <div className="relative z-10 h-full flex items-center justify-center">
                <img src="/Frame 129.png" alt="Frame 129" className="w-full h-full object-cover" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Your Business Further Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            {/* Benefits Tag */}
            <div className="flex justify-center mb-8">
              <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <span className="text-orange-500 mr-2">🔥</span>
                BENEFITS
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-6">
              <h2 className="font-bold text-gray-900 leading-tight" style={{fontSize: '48px'}}>
                TAKE YOUR BUSINESS{' '}
                <span className="text-brand-green">FURTHER</span>, FASTER<br />
                AND <span className="text-brand-green">GLOBAL</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-16">
              <p className="text-lg text-gray-600">
                Some benefits that makes our platform unique
              </p>
            </div>

            {/* Features Grid */}
            <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-10">
              {/* Left Column - Feature Cards */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                {/* Top Left Card */}
                <div className="w-[325px] h-[295px] rounded-2xl p-6 flex flex-col items-start justify-center" style={{backgroundColor: '#f7f7f7'}}>
                  <div className="bg-brand-green rounded-xl flex items-center justify-center" style={{width: '67px', height: '67px'}}>
                    <img src="/arrow.png" alt="Arrow" style={{width: '42px', height: '41px'}} />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="font-bold text-gray-900 mb-2" style={{fontSize: '18px'}}>SEND & RECEIVE</h3>
                    <p className="text-gray-600 text-sm" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean.
                    </p>
                  </div>
                </div>

                {/* Bottom Left Card */}
                <div className="w-[325px] h-[295px] rounded-2xl p-6 flex flex-col items-start justify-center" style={{backgroundColor: '#f7f7f7'}}>
                    <div className="bg-brand-green rounded-xl flex items-center justify-center" style={{width: '67px', height: '67px'}}>
                      <img src="/wallet.png" alt="Wallet" style={{width: '43px', height: '39px'}} />
                    </div>
                  <div className="mt-4 text-left">
                    <h3 className="font-bold text-gray-900 mb-2" style={{fontSize: '18px'}}>SEND & RECEIVE</h3>
                    <p className="text-gray-600 text-sm" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center - Main Card with Phone */}
              <div className="flex justify-center">
                <div className="bg-brand-green rounded-3xl px-8 pt-8 relative flex flex-col" style={{width: '500px', height: '610px'}}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-4">LOREM IPSUM DOLOR SIT AMET</h3>
                    <p className="text-black text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.</p>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <img src="/iPhones.png" alt="iPhones" className="w-100 h-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Right Column - Feature Cards */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                {/* Top Right Card */}
                <div className="w-[325px] h-[295px] rounded-2xl p-6 flex flex-col items-start justify-center" style={{backgroundColor: '#f7f7f7'}}>
                  <div className="bg-brand-green rounded-xl flex items-center justify-center" style={{width: '67px', height: '67px'}}>
                    <img src="/chart.png" alt="Chart" style={{width: '42px', height: '42px'}} />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="font-bold text-gray-900 mb-2" style={{fontSize: '18px'}}>SEND & RECEIVE</h3>
                    <p className="text-gray-600 text-sm" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean.
                    </p>
                  </div>
                </div>

                {/* Bottom Right Card */}
                <div className="w-[325px] h-[295px] rounded-2xl p-6 flex flex-col items-start justify-center" style={{backgroundColor: '#f7f7f7'}}>
                  <div className="bg-brand-green rounded-xl flex items-center justify-center" style={{width: '67px', height: '67px'}}>
                    <img src="/reload.png" alt="Reload" style={{width: '58px', height: '47px'}} />
                  </div>
                  <div className="mt-4 text-left">
                    <h3 className="font-bold text-gray-900 mb-2" style={{fontSize: '18px'}}>SEND & RECEIVE</h3>
                    <p className="text-gray-600 text-sm" style={{fontSize: '16px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Section - Frame 19 Image */}
            <div className="flex-1 flex justify-center">
              <img src="/Frame 19.png" alt="Features Dashboard" className="w-full max-w-lg h-auto object-contain" />
            </div>

            {/* Right Section - Content */}
            <div className="flex-1 max-w-lg">
              <div className="mb-6">
                <p className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">▲ OUR FEATURES</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor eliten amet, consectetur.
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#f6f7f9'}}>
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#f6f7f9'}}>
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#f6f7f9'}}>
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#f6f7f9'}}>
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
              </div>

              {/* Get Started Button */}
              <button className="bg-brand-green text-black font-semibold px-8 py-3 rounded-lg hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
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
                <button className="bg-brand-green text-black font-semibold px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-brand-green/90 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
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
                <p className="text-white/80 text-sm sm:text-base mt-4 sm:mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
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
            <div className="space-y-4 sm:space-y-6">
              <img
                src="/logo.png"
                alt="Praith Logo" 
                className="h-5 xs:h-6 sm:h-7 md:h-8 lg:h-8 w-auto object-contain lg:object-none"
              />
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#about" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.aboutUs')}</a>
                <a href="#features" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.features')}</a>
                <a href="#how-it-works" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.howItWorks')}</a>
                <a href="#faqs" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.faqs')}</a>
                <a href="#contact" className="text-praith-white hover:text-brand-green transition-colors text-sm sm:text-base">{t('footer.links.contact')}</a>
              </div>
            </div>
            
            {/* Right Section - Newsletter */}
            <div className="space-y-3 sm:space-y-4">
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
              <p className="text-praith-white text-right text-sm sm:text-base">{t('footer.newsletter.commitment')}</p>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              <p className="text-praith-white text-sm sm:text-base text-center lg:text-left">{t('footer.copyright')}</p>
              
              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
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