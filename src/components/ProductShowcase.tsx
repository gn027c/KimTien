import React, { useEffect, useState, useRef, useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { portfolioItemsData, featuredProductIds } from '../utils/portfolioData';
import { motion } from "framer-motion";

export interface ProductShowcaseItem {
  id: number;
  title: string;
  image: string;
  tag?: string;
  category?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const ProductShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  // Get unique categories from featured products
  const featuredProducts = featuredProductIds
    .map(id => portfolioItemsData.find(item => item.id === id))
    .filter(Boolean) as ProductShowcaseItem[];
  
  const categories = Array.from(new Set(featuredProducts.map(item => item.category)));

  // Preload all product images on mount
  useEffect(() => {
    featuredProducts.forEach(item => {
      if (item.image) {
        const img = new window.Image();
        img.src = item.image;
      }
    });
  }, [featuredProducts]);

  // XÓA: useMemo allProducts và hàm isVisible

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProducts = activeCategory 
    ? featuredProducts.filter(product => product.category === activeCategory)
    : featuredProducts;

  const ProductCard = ({ item, index }: { item: ProductShowcaseItem; index: number }) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const delay = (index % 4) * 0.1;

    useEffect(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
            }
          });
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [hasAnimated]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          transition: { duration: 0.22, ease: 'easeOut' }
        }}
        whileTap={{ scale: 0.98 }}
        style={{ willChange: 'transform, box-shadow' }}
        className="w-full group relative cursor-pointer bg-white rounded-2xl shadow-md max-h-[280px]"
        onClick={() => window.location.href = `/bao-gia?product=${encodeURIComponent(item.title)}`}
      >
        {/* Badges: top-left and top-right, with padding */}
        <div className="absolute top-0 left-0 flex flex-col gap-2 p-2 z-20">
          {item.isPopular && (
            <span className="bg-amber-500/90 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Phổ biến</span>
          )}
        </div>
        <div className="absolute top-0 right-0 flex flex-col gap-2 p-2 z-20">
          {item.tag && (
            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">{item.tag}</span>
          )}
          {item.isNew && (
            <span className="bg-green-500/90 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Mới</span>
          )}
        </div>
        {/* Image container: vertically center, add top padding for rope, limit height */}
        <div className="flex items-center justify-center pt-8 pb-4 min-h-[180px] h-[220px] w-full overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.1, ease: 'easeOut' }}
            className="object-contain max-h-[200px] w-auto mx-auto"
            style={{ maxWidth: '90%' }}
          />
        </div>
        {/* Product info */}
        <div className="px-4 pb-4">
          <h3 className="font-semibold text-gray-800 line-clamp-1 text-center">{item.title}</h3>
        </div>
      </motion.div>
    );
  };

  // Special featured product card (only shown on desktop)
  const FeaturedSpotlightCard = ({ item }: { item: ProductShowcaseItem }) => (
    <div 
      className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      onClick={() => window.location.href = `/bao-gia?product=${encodeURIComponent(item.title)}`}
    >
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 transition-all duration-1000 ease-in-out group-hover:from-blue-500 group-hover:to-blue-700"></div>
      
      {/* Background pattern with subtle animation */}
      <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-6">
        <div>
          <span className="bg-white/20 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full backdrop-blur-sm inline-block transition-all duration-500 ease-in-out group-hover:bg-white/30">
            Sản phẩm nổi bật
          </span>
          <h3 className="text-white text-xl font-bold mt-4 mb-2 transition-transform duration-700 ease-in-out group-hover:translate-x-2 line-clamp-1">{item.title}</h3>
          <div className="w-16 h-1 bg-white/40 rounded-full mb-4 transition-all duration-700 ease-in-out group-hover:w-24 group-hover:bg-white/60"></div>
        </div>
        
        {/* Image with enhanced animation - fixed height */}
        <div className="flex-1 flex items-center justify-center h-[240px] my-4 overflow-hidden">
        <img
          src={item.image}
            alt={item.title}
            className="max-h-full max-w-[80%] object-contain filter drop-shadow-lg transition-all duration-1000 ease-in-out group-hover:drop-shadow-2xl group-hover:scale-110"
            style={{
              animation: 'float 6s ease-in-out infinite',
            }}
          />
        </div>
        
        <button
          className="mt-auto w-full py-3 bg-white text-blue-600 rounded-lg font-semibold transition-all duration-500 ease-in-out 
            hover:bg-blue-50 hover:scale-[1.03] hover:shadow-xl shadow-lg"
        >
          Báo giá ngay
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes softPulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes gentleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center mb-12">

          
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Sản phẩm tiêu biểu</h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-6"></div>
          
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">
            Khám phá bộ sưu tập sản phẩm đa dạng và chất lượng cao của chúng tôi,
            được thiết kế đáp ứng mọi nhu cầu của khách hàng.
          </p>
        </div>

        {/* Category filter (desktop only) */}
        {!isMobile && (
          <div className="hidden md:flex justify-center flex-wrap gap-2 mb-10">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === null 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              onClick={() => setActiveCategory(null)}
            >
              Tất cả
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => category && setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid + Featured Product: Desktop & Tablet */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Featured spotlight product (first column) */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="h-full">
              {filteredProducts.length > 0 && <FeaturedSpotlightCard item={filteredProducts[0]} />}
            </div>
          </div>
          
          {/* Products grid (remaining columns) */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredProducts.slice(1, 7).map((item, index) => (
              <ProductCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden">
        <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect="cards"
              grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay]}
            className="h-[450px]"
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
              pagination={{
                clickable: true,
            }}
          >
            {filteredProducts.slice(0, 6).map((item, index) => (
              <SwiperSlide key={item.id} className="rounded-2xl overflow-hidden">
                <div 
                  className="h-full w-full bg-white flex flex-col cursor-pointer"
                  onClick={() => window.location.href = `/bao-gia?product=${encodeURIComponent(item.title)}`}
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                        Mới
                      </span>
                        )}
                        {item.isPopular && (
                      <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                        Phổ biến
                      </span>
                        )}
                    </div>
                    
                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-gray-50">
                      <img
                        src={item.image}
                        alt={item.title}
                      className="max-h-[70%] max-w-[80%] object-contain"
                      />
                    </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                    
                    {/* Removed star rating display */}
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Báo giá
                      </button>
                    </div>
                    </div>
                  </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

        {/* "Xem thêm" button */}
        <div className="text-center mt-12">
          <a 
            href="/du-an"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          >
            Xem tất cả sản phẩm
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
