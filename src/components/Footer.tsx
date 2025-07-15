import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16" data-aos="fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2" data-aos="fade-right">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/kimtienlogo_small.png"
                alt="Kim Tiền Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold">Kim Tiền</span>
                <span className="text-xs text-red-400 font-medium">Kết nối thành công - Vươn tầm cao mới</span>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-md" data-aos="fade-up" data-aos-delay="100">
              Nhà cung cấp hàng đầu các giải pháp bao bì và thiết kế cao cấp cho khách hàng doanh nghiệp.
              Chúng tôi kết hợp thiết kế sáng tạo với chất lượng đặc biệt để nâng tầm sự hiện diện thương hiệu của bạn.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <span className="text-gray-300 text-sm sm:text-base">+84 919.535.525</span>
              </div>
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="300">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <span className="text-gray-300 text-sm sm:text-base">kimtien@kimtienposm.com</span>
              </div>
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay="400">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <span className="text-gray-300 text-sm sm:text-base">8h - 17h (Thứ 2 - Thứ 7)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Thiết Kế Bao Bì Tùy Chỉnh</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Nhận Diện Thương Hiệu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Sản Xuất & Gia Công</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Logistics & Thực Hiện</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Giải Pháp Bền Vững</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Địa Điểm</h3>
            <div className="space-y-4 text-sm">
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Văn Phòng:</div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('100/1/3 Đường An Phú Đông 25, An Phú Đông, Quận 12, Hồ Chí Minh 71500, Việt Nam')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors duration-300">100/1/3 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</a>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Xưởng Thành Phẩm:</div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('100/1/3 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors duration-300">100/1/3 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</a>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">Phân Xưởng Sắt:</div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('E15/19B Ấp 5, Kênh Trung Ương, Vĩnh Lộc B, Bình Chánh, TP.HCM')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors duration-300">E15/19B Ấp 5, Kênh Trung Ương, Vĩnh Lộc B, Bình Chánh, TP.HCM</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 Kim Tiền. Tất cả quyền được bảo lưu. | Chính Sách Bảo Mật | Điều Khoản Dịch Vụ
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-transform duration-300 hover:scale-125">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-transform duration-300 hover:scale-125">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-transform duration-300 hover:scale-125">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;