import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceCategory from '../components/ServiceCategory';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceCTA from '../components/ServiceCTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: 'design' | 'printing';
  isNew?: boolean;
}

// Mock data for services
const designServices: ServiceItem[] = [
  {
    id: 'thiet-ke',
    title: 'Thiết kế đồ họa',
    description: 'Dịch vụ thiết kế đồ họa chuyên nghiệp, sáng tạo và độc đáo. Chúng tôi mang đến những giải pháp thiết kế phù hợp với thương hiệu và mục tiêu kinh doanh của bạn.',
    image: '/imageProduct/Showcase/36.png',
    features: ['Logo & nhận diện thương hiệu', 'Thiết kế bao bì sản phẩm', 'Thiết kế ấn phẩm quảng cáo', 'Hỗ trợ chỉnh sửa không giới hạn'],
    category: 'design',
    isNew: false
  },
  {
    id: 'thiet-ke-logo',
    title: 'Thiết kế logo',
    description: 'Tạo dựng logo đặc trưng cho thương hiệu của bạn với ý tưởng sáng tạo, độc đáo và phù hợp với định vị thương hiệu của doanh nghiệp.',
    image: '/imageProduct/Showcase/7.png',
    features: ['Nhiều phương án lựa chọn', 'File vector chuẩn in ấn', 'Hiệu ứng mockup trình bày', 'Bản quyền trọn đời'],
    category: 'design',
    isNew: true
  },
  {
    id: 'thiet-ke-bao-bi',
    title: 'Thiết kế bao bì',
    description: 'Thiết kế bao bì sản phẩm ấn tượng, thu hút ánh nhìn khách hàng và tạo dấu ấn khác biệt cho sản phẩm của bạn trên thị trường.',
    image: '/imageProduct/Showcase/20.png',
    features: ['Thiết kế cấu trúc 3D', 'Đề xuất chất liệu phù hợp', 'File in ấn chuẩn xác', 'Tư vấn kỹ thuật in'],
    category: 'design',
    isNew: false
  }
];

const printingServices: ServiceItem[] = [
  {
    id: 'in-ap-phich',
    title: 'In Áp Phích',
    description: 'Dịch vụ in áp phích quảng cáo chất lượng cao, màu sắc sống động, phù hợp cho các chiến dịch truyền thông, sự kiện, quảng bá sản phẩm.',
    image: '/imageProject/1-ÁP-PHÍCH.png',
    features: ['Kích thước đa dạng', 'In offset, in kỹ thuật số', 'Chất liệu giấy bền đẹp', 'Gia công cán màng, ép kim'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-carton',
    title: 'In Carton',
    description: 'In thùng carton, hộp carton bảo vệ sản phẩm, vận chuyển an toàn, thiết kế theo yêu cầu doanh nghiệp.',
    image: '/imageProject/2-CARTON.png',
    features: ['Carton sóng E/B/C', 'In flexo, offset', 'Chịu lực tốt', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-dangler',
    title: 'In Dangler',
    description: 'Dangler quảng cáo treo kệ, thu hút sự chú ý tại điểm bán, tăng nhận diện thương hiệu.',
    image: '/imageProject/3-DANGLER.png',
    features: ['In 2 mặt', 'Gia công bồi, cán màng', 'Cắt bế theo khuôn', 'Dây treo chắc chắn'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hanger',
    title: 'In Hanger',
    description: 'Hanger quảng cáo treo sản phẩm, tăng hiệu quả trưng bày tại siêu thị, cửa hàng.',
    image: '/imageProject/4-HANGER.png',
    features: ['Chất liệu cứng cáp', 'In màu sắc nét', 'Cắt bế theo mẫu', 'Thiết kế sáng tạo'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hop-cung',
    title: 'In Hộp Cứng',
    description: 'Hộp cứng cao cấp, sang trọng, bảo vệ sản phẩm và nâng tầm giá trị thương hiệu.',
    image: '/imageProject/5-HỘP-CỨNG.png',
    features: ['Bìa carton cứng', 'Bọc giấy mỹ thuật', 'Nam châm, ruy băng', 'Gia công cao cấp'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hop-mem',
    title: 'In Hộp Mềm',
    description: 'Hộp mềm đa dạng kiểu dáng, phù hợp đóng gói thực phẩm, mỹ phẩm, quà tặng.',
    image: '/imageProject/6-HỘP-MỀM.png',
    features: ['Giấy duplex, ivory', 'In offset chất lượng', 'Cán màng, ép kim', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-showcase',
    title: 'In Showcase',
    description: 'Showcase trưng bày sản phẩm, POSM quảng cáo tại điểm bán, tăng nhận diện thương hiệu.',
    image: '/imageProject/7-SHOWCASE.png',
    features: ['Thiết kế 3D', 'Chất liệu carton, foam', 'In ấn sắc nét', 'Lắp ráp dễ dàng'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-standee',
    title: 'In Standee',
    description: 'Standee quảng cáo di động, dễ lắp đặt, phù hợp cho sự kiện, hội chợ, cửa hàng.',
    image: '/imageProject/8-STANDEE.png',
    features: ['Khung nhôm, nhựa', 'In bạt Hiflex, PP', 'Kích thước đa dạng', 'Thiết kế nổi bật'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-tui-giay',
    title: 'In Túi Giấy',
    description: 'Túi giấy cao cấp, thân thiện môi trường, in logo thương hiệu, dùng cho shop, sự kiện, quà tặng.',
    image: '/imageProject/9-TÚI-GIẤY.png',
    features: ['Giấy kraft, couche', 'Cán màng, ép kim', 'Dây quai chắc chắn', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
];

const ServicesPage: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero 
        title="Dịch Vụ Thiết Kế & In Ấn Chuyên Nghiệp"
        subtitle="Chúng tôi cung cấp các giải pháp thiết kế sáng tạo và dịch vụ in ấn chất lượng cao, đáp ứng mọi nhu cầu của doanh nghiệp bạn."
      />
      <div id="service-list" className="max-w-7xl mx-auto px-4 py-16">
        {/* Design Services */}
        <ServiceCategory
                title="Dịch Vụ Thiết Kế" 
                description="Đội ngũ thiết kế sáng tạo của chúng tôi sẽ mang đến những giải pháp thị giác độc đáo và hiệu quả cho thương hiệu của bạn."
                category="design"
          services={designServices}
        />
        {/* Printing Services */}
        <ServiceCategory
                title="Dịch Vụ In Ấn" 
                description="Cung cấp dịch vụ in ấn chất lượng cao với công nghệ hiện đại, đa dạng chất liệu và hoàn thiện chuyên nghiệp."
                category="printing"
          services={printingServices}
        />
      </div>
      {/* FAQ Section */}
      <ServiceFAQ />
      {/* CTA Section */}
      <ServiceCTA />
    </div>
  );
};

export default ServicesPage; 