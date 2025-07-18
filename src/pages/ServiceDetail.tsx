import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Dữ liệu dịch vụ mẫu (nên import từ file data thực tế nếu có)
const allServices = [
  // ... (có thể import từ src/pages/Services.tsx hoặc src/utils/serviceData.ts nếu có)
  {
    id: 'thiet-ke',
    title: 'Thiết kế đồ họa',
    description: 'Dịch vụ thiết kế đồ họa chuyên nghiệp, sáng tạo và độc đáo. Mang đến giải pháp thiết kế phù hợp với thương hiệu và mục tiêu kinh doanh của bạn.',
    image: '/imageProduct/Showcase/36.png',
    features: ['Logo & nhận diện thương hiệu', 'Thiết kế bao bì sản phẩm', 'Thiết kế ấn phẩm quảng cáo', 'Hỗ trợ chỉnh sửa không giới hạn'],
    category: 'design',
  },
  {
    id: 'in-to-roi',
    title: 'In tờ rơi',
    description: 'Tờ rơi quảng cáo chất lượng cao với nhiều tùy chọn về giấy, kích thước và hoàn thiện. Giúp doanh nghiệp tiếp cận khách hàng hiệu quả.',
    image: '/imageProduct/Túi giấy/1.png',
    features: ['Nhiều loại giấy', 'Cán màng bóng/mờ', 'In offset chất lượng cao', 'Giao hàng nhanh'],
    category: 'printing',
  },
  // ... Thêm các dịch vụ khác tương tự
];

const ServiceDetailPage: React.FC = () => {
  useScrollAnimation();
  const { id } = useParams<{ id: string }>();
  const service = allServices.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Không tìm thấy dịch vụ</h2>
        <Link to="/dich-vu" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">Quay lại danh sách dịch vụ</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center mb-6">
          <svg className="w-10 h-10 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6m0 0v2a4 4 0 008 0v-2" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">{service.title}</h1>
        </div>
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
        </div>
        <p className="text-gray-700 text-lg mb-6">{service.description}</p>
        <div className="mb-8">
          <h2 className="font-semibold text-xl mb-3 text-blue-700">Tính năng nổi bật</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {service.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="flex gap-4 mt-8">
          <Link to="/bao-gia" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">Yêu cầu báo giá</Link>
          <Link to="/dich-vu" className="px-6 py-3 bg-gray-100 text-blue-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">Xem các dịch vụ khác</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage; 