import React from 'react';

const ChinhSachBaoHanhPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-600">Chính sách bảo hành</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Đối tượng áp dụng</h2>
          <p>Chính sách bảo hành áp dụng cho tất cả sản phẩm in ấn, thiết kế do Kim Tiền cung cấp.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Thời gian bảo hành</h2>
          <p>Bảo hành trong vòng 7 ngày kể từ khi khách hàng nhận sản phẩm.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Điều kiện bảo hành</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sản phẩm bị lỗi kỹ thuật do sản xuất, in ấn hoặc vận chuyển.</li>
            <li>Sản phẩm còn nguyên vẹn, chưa qua sử dụng hoặc sửa chữa bởi bên thứ ba.</li>
            <li>Có đầy đủ hóa đơn, chứng từ mua hàng tại Kim Tiền.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Trường hợp không được bảo hành</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sản phẩm bị hư hỏng do sử dụng sai mục đích, bảo quản không đúng hướng dẫn.</li>
            <li>Sản phẩm đã qua sửa chữa bởi bên thứ ba không phải Kim Tiền.</li>
            <li>Hết thời gian bảo hành.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Quy trình bảo hành</h2>
          <p>Liên hệ hotline <a href="tel:+84919535525" className="text-yellow-600 underline">0919.535.525</a> hoặc email <a href="mailto:kimtien@kimtienposm.com" className="text-yellow-600 underline">kimtien@kimtienposm.com</a> để được hướng dẫn chi tiết. Kim Tiền sẽ kiểm tra và xử lý bảo hành trong thời gian sớm nhất.</p>
        </section>
      </div>
    </div>
  </div>
);

export default ChinhSachBaoHanhPage; 