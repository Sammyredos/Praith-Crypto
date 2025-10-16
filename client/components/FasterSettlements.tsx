import { useLanguage } from '../contexts/LanguageContext';

export default function FasterSettlements() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[15px] sm:rounded-[20px] border border-gray-300/20 relative overflow-hidden"
          style={{
            backgroundColor: '#F7F7F7',
            minHeight: 'auto'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 items-center lg:items-start">
            {/* Left Content */}
            <div className="p-6 sm:p-8 md:p-12 lg:py-16 lg:px-16 space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
              <div className="space-y-4 sm:space-y-6 lg:space-y-6">
                <h3 className="font-bold text-[#1B1F28] leading-tight sm:leading-[1.2] lg:leading-[1.1] tracking-[-0.5px] sm:tracking-[-1px] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] max-w-full lg:max-w-[420px]">
                  {t('fasterSettlements.heading')}
                </h3>
              </div>
              <p className="text-[#222] leading-6 sm:leading-7 lg:leading-[1.6] tracking-[-0.1px] sm:tracking-[-0.15px] text-base sm:text-lg lg:text-xl max-w-full lg:max-w-[480px] opacity-90">
                {t('fasterSettlements.description')}
              </p>
            </div>

            {/* Right Image - Hidden on mobile and tablet */}
            <div className="relative p-4 lg:p-0 lg:pt-8 lg:pb-0 hidden lg:block lg:flex lg:justify-end lg:items-center">
              <div className="lg:w-full lg:max-w-[500px] lg:h-auto">
                <img
                  src="/f542ab53c6ee779fe6610be4331c70b5ee605483.png"
                  alt="Network connections visualization"
                  className="w-full h-auto object-contain"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
