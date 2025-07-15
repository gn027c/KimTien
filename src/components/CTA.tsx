import React from 'react';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900" data-aos="fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sẵn Sàng Biến Đổi Bao Bì Của Bạn?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Tham gia cùng hàng trăm khách hàng doanh nghiệp đã nâng tầm thương hiệu với các
            giải pháp bao bì cao cấp của chúng tôi. Hãy thảo luận về cách chúng tôi có thể hiện thực hóa tầm nhìn của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Contact Options */}
          <div className="space-y-6 sm:space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Bắt Đầu Ngay Hôm Nay</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="300">
                  <div className="bg-red-500 p-2 sm:p-3 rounded-lg">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Gọi Trực Tiếp</div>
                    <div className="text-blue-100 text-sm sm:text-base">+84 919.535.525</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="400">
                  <div className="bg-red-500 p-2 sm:p-3 rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Email Đội Ngũ</div>
                    <div className="text-blue-100 text-sm sm:text-base">kimtien@kimtienposm.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="500">
                  <div className="bg-red-500 p-2 sm:p-3 rounded-lg">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Giờ Làm Việc</div>
                    <div className="text-blue-100 text-sm sm:text-base">8h - 17h (Thứ 2 - Thứ 7)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105" data-aos="zoom-in" data-aos-delay="600">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-blue-100 text-sm">Phản Hồi Báo Giá</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105" data-aos="zoom-in" data-aos-delay="700">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Miễn Phí</div>
                <div className="text-blue-100 text-sm">Tư Vấn Thiết Kế</div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl transition-shadow duration-300 hover:shadow-3xl" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Yêu Cầu Báo Giá Tùy Chỉnh</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                    placeholder="Nguyễn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                    placeholder="Văn An"
                  />
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="400">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Công Ty *
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                  placeholder="an@congty.com"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="500">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên Công Ty *
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                  placeholder="Công Ty TNHH ABC"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="600">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chi Tiết Dự Án
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all duration-300"
                  placeholder="Hãy cho chúng tôi biết về nhu cầu bao bì, số lượng, thời gian và các yêu cầu cụ thể..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-secondary text-base sm:text-lg py-3 sm:py-4 flex items-center justify-center group"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                Nhận Báo Giá Tùy Chỉnh
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-4" data-aos="fade-up" data-aos-delay="800">
              * Chúng tôi tôn trọng quyền riêng tư của bạn. Thông tin sẽ không bao giờ được chia sẻ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;