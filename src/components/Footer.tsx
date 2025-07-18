import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/kimtienlogo_small.png"
                alt="Kim Tiền Logo"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Kim Tiền</span>
                <span className="text-xs text-red-400 font-medium">Kết nối thành công - Vươn tầm cao mới</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Nhà cung cấp hàng đầu các giải pháp in ấn và thiết kế bao bì cao cấp cho doanh nghiệp. 
              Chúng tôi kết hợp thiết kế sáng tạo với chất lượng đặc biệt để nâng tầm thương hiệu của bạn.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">+84 919.535.525</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">kimtien@kimtienposm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">8h - 17h (Thứ 2 - Thứ 7)</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Trang chính</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Trang chủ</Link></li>
              <li><Link to="/dich-vu" className="text-gray-300 hover:text-white transition-colors duration-300">Dịch vụ</Link></li>
              <li><Link to="/du-an" className="text-gray-300 hover:text-white transition-colors duration-300">Dự án</Link></li>
              <li><Link to="/ve-chung-toi" className="text-gray-300 hover:text-white transition-colors duration-300">Về chúng tôi</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link to="/lien-he" className="text-gray-300 hover:text-white transition-colors duration-300">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-green-400">Hỗ trợ khách hàng</h3>
            <ul className="space-y-3">
              <li><Link to="/huong-dan-dat-hang" className="text-gray-300 hover:text-white transition-colors duration-300">Hướng dẫn đặt hàng</Link></li>
              <li><Link to="/giao-hang-van-chuyen" className="text-gray-300 hover:text-white transition-colors duration-300">Giao hàng và vận chuyển</Link></li>
              <li><Link to="/chinh-sach-bao-hanh" className="text-gray-300 hover:text-white transition-colors duration-300">Chính sách bảo hành</Link></li>
            </ul>
            
            <h3 className="text-lg font-bold mb-4 mt-8 text-yellow-400">Chính sách</h3>
            <ul className="space-y-3">
              <li><Link to="/thoa-thuan-su-dung" className="text-gray-300 hover:text-white transition-colors duration-300">Thoả thuận sử dụng</Link></li>
              <li><Link to="/chinh-sach-bao-mat" className="text-gray-300 hover:text-white transition-colors duration-300">Chính sách bảo mật</Link></li>
              <li><Link to="/chinh-sach" className="text-gray-300 hover:text-white transition-colors duration-300">Chính sách & hỗ trợ khách hàng</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="col-span-12 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-purple-400">Địa điểm</h3>
            <div className="space-y-4">
              <div>
                <div className="text-white font-medium mb-1">Văn phòng:</div>
                <a 
                  href="https://maps.app.goo.gl/qF3XbKXFW3MS9Aun6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-start"
                >
                  <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>81/2 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</span>
                </a>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Xưởng sản xuất:</div>
                <a 
                  href="https://maps.app.goo.gl/pgUG7co2PMre3iFo6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-start"
                >
                  <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>100/1/3 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              © {year} Kim Tiền. Tất cả quyền được bảo lưu.
            </div>
            
            <div className="text-gray-500 text-sm">
              Thiết kế bởi <a href="#" className="text-blue-400 hover:text-blue-300">kimtienposm.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;