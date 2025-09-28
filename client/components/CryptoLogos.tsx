export default function CryptoLogos() {
  return (
    <section className="bg-zinc-800 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-11 border-0 relative z-50 overflow-hidden">
      {/* Green radial gradients - responsive sizes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full" style={{ transform: 'translateX(calc(-50% + 2vw)) translateY(50%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-brand-green/25 via-brand-green/15 to-transparent rounded-full" style={{ transform: 'translateX(calc(50% - 2vw)) translateY(50%)' }}></div>
      
      {/* Crypto logos container with better mobile spacing */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto overflow-x-auto border-0 px-2 sm:px-0">
        <img
          src="/tether.png"
          alt="Tether"
          className="h-6 sm:h-8 md:h-9 lg:h-[40px] w-auto lg:w-[137px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 border-0 object-contain"
        />
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          className="h-4 sm:h-8 md:h-9 lg:h-[40px] w-auto lg:w-[137px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 border-0 object-contain"
        />
        <img
          src="/tron.png"
          alt="Tron"
          className="hidden sm:block h-6 sm:h-8 md:h-9 lg:h-[40px] w-auto lg:w-[137px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 border-0 object-contain"
        />
        <img
          src="/ether.png"
          alt="Ethereum"
          className="h-6 sm:h-8 md:h-9 lg:h-[40px] w-auto lg:w-[137px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 border-0 object-contain"
        />
        <img
          src="/litecoin.png"
          alt="Litecoin"
          className="hidden sm:block h-8 md:h-9 lg:h-[40px] w-auto lg:w-[137px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 border-0 object-contain"
        />
      </div>
    </section>
  );
}
