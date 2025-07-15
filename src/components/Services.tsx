import React from 'react';
import { Package, Palette, Cog, Truck } from 'lucide-react';

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
    <section id="services" className="py-20 bg-white animate-fade-in overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-bottom">
            Giải Pháp Bao Bì Toàn Diện
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Từ ý tưởng ban đầu đến giao hàng cuối cùng, chúng tôi cung cấp dịch vụ bao bì và thiết kế 
            từ đầu đến cuối giúp các khách hàng doanh nghiệp đạt được mục tiêu thương hiệu và vận hành.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-stagger-children">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 group animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="bg-blue-700 group-hover:bg-red-500 transition-colors w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 animate-bounce-subtle group-hover:animate-pulse">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse-slow"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;