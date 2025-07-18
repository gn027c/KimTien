import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sẵn sàng cho dự án tiếp theo của bạn?
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Chúng tôi cung cấp giải pháp thiết kế và in ấn toàn diện, từ ý tưởng đến sản phẩm hoàn thiện.
                Liên hệ ngay để được tư vấn và báo giá miễn phí!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/bao-gia"
                  className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Báo giá ngay
                </Link>
                <a 
                  href="/lien-he" 
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-70 blur-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-70 blur-lg"></div>
                
              </div>
            </div>
          </div>
          
          {/* Features list */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="mr-4 bg-white/20 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Giao hàng nhanh chóng</h3>
                <p className="text-blue-100 text-sm">Đảm bảo thời gian giao hàng đúng hẹn</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-white/20 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Chất lượng hàng đầu</h3>
                <p className="text-blue-100 text-sm">Cam kết sản phẩm chất lượng cao</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-white/20 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Giá cả cạnh tranh</h3>
                <p className="text-blue-100 text-sm">Mức giá hợp lý cho mọi ngân sách</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 