import React from 'react';
import { ArrowRight, Award, Clock, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-[length:200%_200%] animate-gradient-pan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4 animate-stagger-children">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Bao Bì Cao Cấp
                <span className="text-blue-700 block animate-slide-in-right animation-delay-300">Nâng Tầm Thương Hiệu</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-500">
                Biến đổi cách trình bày sản phẩm của bạn với các giải pháp bao bì tùy chỉnh 
                được thiết kế cho sự thành công của doanh nghiệp. Chúng tôi mang đến chất lượng 
                đặc biệt, thiết kế sáng tạo và dịch vụ đáng tin cậy mà các thương hiệu hàng đầu tin tưởng.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-3 sm:gap-6 animate-stagger-children">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-bounce-in">
                <Award className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Chất Lượng Cao Cấp</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-bounce-in animation-delay-200">
                <Clock className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Giao Hàng Đúng Hẹn</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-bounce-in animation-delay-400">
                <Zap className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Thiết Kế Tùy Chỉnh</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-700">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center group hover:shadow-xl animate-pulse-button">
                Yêu Cầu Báo Giá Miễn Phí
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 hover:shadow-lg">
                Đặt Lịch Tư Vấn
              </button>
            </div>

          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last animate-slide-in-right">
            <div className="relative z-10 animate-float">
              <img
                src="https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ví dụ bao bì cao cấp"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-red-500 text-white p-2 sm:p-4 rounded-full shadow-lg z-20 animate-bounce-subtle">
              <Award className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-blue-700 text-white p-2 sm:p-4 rounded-full shadow-lg z-20 animate-bounce-subtle animation-delay-500">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;