import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceCategory from '../components/ServiceCategory';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceCTA from '../components/ServiceCTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useLoadingOverlay } from '../context/LoadingOverlayContext';

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
    description: 'Dịch vụ thiết kế đồ họa chuyên nghiệp, sáng tạo và độc đáo. Chúng tôi cung cấp các giải pháp thiết kế phù hợp với thương hiệu và mục tiêu kinh doanh của bạn.',
    image: '/imageProduct/Showcase/36.png',
    features: ['Nhận dạng thương hiệu & Logo', 'Thiết kế bao bì sản phẩm', 'Thiết kế quảng cáo in ấn', 'Hỗ trợ chỉnh sửa không giới hạn'],
    category: 'design',
    isNew: false
  },
  {
    id: 'thiet-ke-logo',
    title: 'Thiết kế Logo',
    description: 'Tạo ra logo độc đáo và phù hợp cho thương hiệu của bạn với những ý tưởng sáng tạo, độc đáo và phù hợp với vị trí thương hiệu.',
    image: '/imageProduct/Showcase/7.png',
    features: ['Nhiều tùy chọn thiết kế', 'Tệp in chuẩn', 'Bộ trình diễn mockup hiệu ứng', 'Bản quyền vĩnh viễn'],
    category: 'design',
    isNew: true
  },
  {
    id: 'thiet-ke-bao-bi',
    title: 'Thiết kế bao bì',
    description: 'Thiết kế bao bì thu hút khách hàng và tạo nên danh tiếng độc đáo cho sản phẩm của bạn trên thị trường.',
    image: '/imageProduct/Showcase/20.png',
    features: ['Thiết kế cấu trúc 3D', 'Đề xuất vật liệu phù hợp', 'Tệp in chuẩn chính xác', 'Tư vấn kỹ thuật in'],
    category: 'design',
    isNew: false
  }
];

const printingServices: ServiceItem[] = [
  {
    id: 'in-ap-phich',
    title: 'In ốp phích',
    description: 'Dịch vụ in ốp phích chất lượng cao với màu sắc sống động, phù hợp cho chiến dịch quảng cáo, sự kiện và khuyến mãi sản phẩm.',
    image: '/imageProject/1-ÁP-PHÍCH.png',
    features: ['Nhiều kích thước', 'In offset, in số', 'Giấy chất lượng bền', 'CNC, Lamination'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-carton',
    title: 'In giấy carton',
    description: 'In trên giấy carton, hộp để bảo vệ sản phẩm, an toàn vận chuyển, thiết kế theo yêu cầu kinh doanh của bạn.',
    image: '/imageProject/2-CARTON.png',
    features: ['Wave E/B/C Carton', 'Flexo, Offset', 'Khả năng chống lại lực', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-dangler',
    title: 'In dây treo',
    description: 'Dây treo quảng cáo treo, thu hút sự chú ý tại các điểm bán hàng, tăng cường nhận diện thương hiệu.',
    image: '/imageProject/3-DANGLER.png',
    features: ['In hai mặt', 'Bunting, Lamination', 'Cắt theo khuôn', 'Dây treo chắc chắn'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hanger',
    title: 'In hanger',
    description: 'Dây treo quảng cáo hanger cho sản phẩm, tăng hiệu quả hiển thị tại siêu thị, cửa hàng.',
    image: '/imageProject/4-HANGER.png',
    features: ['Vật liệu cứng', 'In màu sắc chính xác', 'Cắt theo khuôn', 'Thiết kế sáng tạo'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hop-cung',
    title: 'In hộp cứng',
    description: 'Hộp cứng cao cấp, sang trọng, bảo vệ sản phẩm và nâng cao giá trị thương hiệu.',
    image: '/imageProject/5-HỘP-CỨNG.png',
    features: ['Hộp carton cứng', 'Bìa giấy đẹp', 'Nam châm, dây', 'Xử lý cao cấp'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-hop-mem',
    title: 'In hộp mềm',
    description: 'Hộp mềm theo nhiều kiểu dáng, phù hợp để đóng gói thực phẩm, kem đầu, quà tặng.',
    image: '/imageProject/6-HỘP-MỀM.png',
    features: ['Giấy kép, trắng', 'In chất lượng offset', 'Lamin, Lamination', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-showcase',
    title: 'In showcase',
    description: 'Showcase để hiển thị sản phẩm, quảng cáo POSM tại các điểm bán hàng, tăng nhận diện thương hiệu.',
    image: '/imageProject/7-SHOWCASE.png',
    features: ['Thiết kế 3D', 'Vật liệu carton, bông', 'In sắc nét', 'Lắp ráp dễ dàng'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-standee',
    title: 'In standee',
    description: 'In standee quảng cáo di động, dễ lắp đặt, phù hợp cho sự kiện, triển lãm, cửa hàng.',
    image: '/imageProject/8-STANDEE.png',
    features: ['Khung nhôm, nhựa', 'Hiflex, PP Banner', 'Nhiều kích thước', 'Thiết kế độc đáo'],
    category: 'printing',
    isNew: true
  },
  {
    id: 'in-tui-giay',
    title: 'In túi giấy',
    description: 'Túi giấy cao cấp, thân thiện với môi trường, in logo thương hiệu, phù hợp cho cửa hàng, sự kiện, quà tặng.',
    image: '/imageProject/9-TÚI-GIẤY.png',
    features: ['Giấy kraft, Couche', 'Lamin, Lamination', 'Dây đai chắc chắn', 'Thiết kế theo yêu cầu'],
    category: 'printing',
    isNew: true
  },
];

const ServicesPage: React.FC = () => {
  useScrollAnimation();
  const { show } = useLoadingOverlay();
  React.useEffect(() => {
    // Lấy danh sách ảnh local của dịch vụ in
    const images = printingServices.map(p => p.image).filter(src => src.startsWith('/imageProject/'));
    show(images);
    // eslint-disable-next-line
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero 
        title="Thiết kế & Dịch vụ in"
        subtitle="Chúng tôi cung cấp các giải pháp thiết kế sáng tạo và dịch vụ in chất lượng cao để đáp ứng tất cả nhu cầu kinh doanh của bạn."
      />
      <div id="service-list" className="max-w-7xl mx-auto px-4 py-16">
        {/* Design Services */}
        <ServiceCategory
                title="Dịch vụ thiết kế" 
                description="Đội ngũ thiết kế của chúng tôi sẽ mang đến cho bạn các giải pháp thị giác độc đáo và hiệu quả cho thương hiệu của bạn."
                category="design"
          services={designServices}
        />
        {/* Printing Services */}
        <ServiceCategory
                title="Dịch vụ in" 
                description="Chúng tôi cung cấp các dịch vụ in chất lượng cao với công nghệ hiện đại, vật liệu đa dạng và hoàn thành chuyên nghiệp."
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