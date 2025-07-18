import React from 'react';
import { Package, Palette, Cog, Truck } from 'lucide-react';
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Thiết Kế Bao Bì Tùy Chỉnh',
      description: 'Giải pháp bao bì độc quyền được thiết kế riêng theo bản sắc thương hiệu và yêu cầu sản phẩm của bạn. Từ ý tưởng đến sản xuất, chúng tôi tạo ra bao bì kể câu chuyện của bạn.',
      features: ['Tích Hợp Chiến Lược Thương Hiệu', 'Thiết Kế Cấu Trúc', 'Lựa Chọn Vật Liệu', 'Phát Triển Mẫu Thử']
    },
    {
      icon: Palette,
      title: 'Dịch Vụ Thiết Kế Thương Hiệu',
      description: 'Phát triển bộ nhận diện thị giác hoàn chỉnh bao gồm thiết kế logo, bảng màu, typography và hướng dẫn thương hiệu phù hợp với thị trường mục tiêu.',
      features: ['Thiết Kế Logo & Nhận Diện', 'Hướng Dẫn Thương Hiệu', 'Tâm Lý Màu Sắc', 'Lựa Chọn Typography']
    },
    {
      icon: Cog,
      title: 'Sản Xuất & Gia Công',
      description: 'Cơ sở in ấn và sản xuất hiện đại với quy trình kiểm soát chất lượng đảm bảo kết quả nhất quán và cao cấp mọi lúc.',
      features: ['Công Nghệ In Tiên Tiến', 'Đảm Bảo Chất Lượng', 'Vật Liệu Bền Vững', 'Sản Xuất Quy Mô Lớn']
    },
    {
      icon: Truck,
      title: 'Vận chuyển',
      description: 'Nhanh chóng với quy trình dẳm bảo chất lượng và hoàn thành ngay lập tức',
      features: ['Nhan Chóng', 'Tiện Lợi', 'Dễ Dàng']
    }
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Giải Pháp Bao Bì Toàn Diện
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Từ ý tưởng ban đầu đến giao hàng cuối cùng, chúng tôi cung cấp dịch vụ bao bì và thiết kế 
            từ đầu đến cuối giúp các khách hàng doanh nghiệp đạt được mục tiêu thương hiệu và vận hành.
          </motion.p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
              }}
              whileHover={{ scale: 1.07, boxShadow: '0 12px 40px rgba(59,130,246,0.13)', transition: { duration: 0.18, ease: 'easeOut' } }}
              whileTap={{ scale: 0.97 }}
              style={{ willChange: 'transform, box-shadow' }}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 group shadow-md"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 8px 32px rgba(59,130,246,0.18)' }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, type: 'spring', stiffness: 220 }}
                viewport={{ once: true }}
                className="bg-blue-700 group-hover:bg-red-500 transition-colors w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 shadow-lg"
              >
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ color: '#2563eb', scale: 1.08 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
              >
                {service.description}
              </motion.p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.11 } }
                }}
                className="space-y-2 mt-4"
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } }
                    }}
                    whileHover={{ color: '#dc2626', scale: 1.08 }}
                    className="flex items-center text-xs sm:text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <motion.div
                      className="w-2 h-2 bg-red-500 rounded-full mr-3"
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.3, backgroundColor: '#2563eb' }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;