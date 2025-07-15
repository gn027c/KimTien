import React, { useEffect, useRef, useState } from 'react';

const partnerLogos = [
  { src: "/logoPartner/acecook.png", alt: "Acecook", delay: 0 },
  { src: "/logoPartner/massan-group.png", alt: "Masan Group", delay: 100 },
  { src: "/logoPartner/unibeen.png", alt: "Uniben", delay: 200 },
  { src: "/logoPartner/nutifood.svg", alt: "Nutifood", delay: 300 },
  { src: "/logoPartner/kun.png", alt: "Kun", delay: 400 },
  { src: "/logoPartner/nabati.png", alt: "Nabati", delay: 500 },
];

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="partners" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with staggered animation */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Đối tác Tin cậy
            </h2>
          </div>
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi tự hào được đồng hành cùng các thương hiệu hàng đầu, 
              mang đến những giải pháp bao bì chất lượng cao
            </p>
          </div>
          
          {/* Decorative line */}
          <div className={`mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-500 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`} style={{ transitionDelay: '400ms' }} />
        </div>

        {/* Partners Grid with enhanced animations */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent rounded-3xl" />
          
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`group flex items-center justify-center transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{ transitionDelay: `${600 + logo.delay}ms` }}
                >
                  <div className="relative p-4 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:scale-110 group-hover:-translate-y-2">
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="relative h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {logo.alt}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating elements for visual interest */}
          <div className={`absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-60' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '800ms' }} />
          
          <div className={`absolute -bottom-6 -right-6 w-12 h-12 bg-red-200 rounded-full opacity-40 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-40' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }} />
          
          <div className={`absolute top-1/2 -left-8 w-6 h-6 bg-purple-200 rounded-full opacity-50 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-50' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '1200ms' }} />
        </div>

        {/* Trust indicators */}
        <div className={`mt-16 text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-600">Dự án hoàn thành</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;