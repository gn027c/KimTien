import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="contact"
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="flex items-center space-x-3 mb-6"
            >
              <motion.img
                src="/kimtienlogo_small.png"
                alt="Kim Tiền Logo"
                className="h-10 w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Kim Tiền</span>
                <span className="text-xs text-red-400 font-medium">Kết nối thành công - Vươn tầm cao mới</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
            >
              Nhà cung cấp hàng đầu các giải pháp in ấn và thiết kế bao bì cao cấp cho doanh nghiệp. 
              Chúng tôi kết hợp thiết kế sáng tạo với chất lượng đặc biệt để nâng tầm thương hiệu của bạn.
            </motion.p>
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }} viewport={{ once: true }} className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">+84 919.535.525</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }} viewport={{ once: true }} className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">kimtien@kimtienposm.com</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">8h - 17h (Thứ 2 - Thứ 7)</span>
              </motion.div>
            </div>
            {/* Social Links */}
            <motion.div
              className="flex space-x-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } }
              }}
            >
              {[{icon: Facebook, color: 'bg-gray-800 hover:bg-blue-600'}, {icon: Twitter, color: 'bg-gray-800 hover:bg-blue-400'}, {icon: Instagram, color: 'bg-gray-800 hover:bg-pink-600'}, {icon: Linkedin, color: 'bg-gray-800 hover:bg-blue-700'}].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.18 }}
                  transition={{ duration: 0.18 }}
                  className={`${item.color} p-2 rounded-full`}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Sitemap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="col-span-6 md:col-span-2"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-400">Trang chính</h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } }
              }}
              className="space-y-3"
            >
              {[{to: '/', label: 'Trang chủ'}, {to: '/dich-vu', label: 'Dịch vụ'}, {to: '/du-an', label: 'Dự án'}, {to: '/ve-chung-toi', label: 'Về chúng tôi'}, {to: '/blog', label: 'Blog'}, {to: '/lien-he', label: 'Liên hệ'}].map((item, idx) => (
                <motion.li
                  key={item.to}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Link to={item.to} className="text-gray-300 hover:text-white">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Hỗ trợ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="col-span-6 md:col-span-2"
          >
            <h3 className="text-lg font-bold mb-4 text-green-400">Hỗ trợ khách hàng</h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } }
              }}
              className="space-y-3"
            >
              {[{to: '/huong-dan-dat-hang', label: 'Hướng dẫn đặt hàng'}, {to: '/giao-hang-van-chuyen', label: 'Giao hàng và vận chuyển'}, {to: '/chinh-sach-bao-hanh', label: 'Chính sách bảo hành'}].map((item, idx) => (
                <motion.li
                  key={item.to}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Link to={item.to} className="text-gray-300 hover:text-white">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <h3 className="text-lg font-bold mb-4 mt-8 text-yellow-400">Chính sách</h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } }
              }}
              className="space-y-3"
            >
              {[{to: '/thoa-thuan-su-dung', label: 'Thỏa thuận sử dụng'}, {to: '/chinh-sach-bao-mat', label: 'Chính sách bảo mật'}, {to: '/chinh-sach', label: 'Chính sách & hỗ trợ khách hàng'}].map((item, idx) => (
                <motion.li
                  key={item.to}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } } }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Link to={item.to} className="text-gray-300 hover:text-white">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-2"
          >
            <h3 className="text-lg font-bold mb-4 text-purple-400">Địa điểm</h3>
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }} viewport={{ once: true }}>
                <div className="text-white font-medium mb-1">Văn phòng:</div>
                <a 
                  href="https://maps.app.goo.gl/qF3XbKXFW3MS9Aun6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white flex items-start"
                >
                  <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>81/2 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</span>
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }} viewport={{ once: true }}>
                <div className="text-white font-medium mb-1">Xưởng sản xuất:</div>
                <a 
                  href="https://maps.app.goo.gl/pgUG7co2PMre3iFo6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white flex items-start"
                >
                  <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>100/1/3 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              © {year} Kim Tiền. Tất cả quyền được bảo lưu.
            </div>
            
            <div className="text-gray-500 text-sm">
              Thiết kế bởi <a href="#" className="text-blue-400 hover:text-blue-300">kimtienposm.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;