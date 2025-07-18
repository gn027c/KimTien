import React from 'react';

const GiaoHangVanChuyenPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 7h13l2-7H6" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">Giao hàng & Vận chuyển</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Phạm vi giao hàng</h2>
          <p>Kim Tiền giao hàng toàn quốc, miễn phí nội thành TP.HCM cho đơn hàng từ 2 triệu đồng. Các khu vực khác sẽ tính phí theo bảng giá của đơn vị vận chuyển.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Đơn vị vận chuyển</h2>
          <p>Chúng tôi hợp tác với các đối tác vận chuyển uy tín như Viettel Post, GHTK, J&T, v.v. để đảm bảo hàng hóa đến tay khách hàng an toàn, đúng hẹn.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Thời gian giao hàng</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nội thành TP.HCM: 1-3 ngày làm việc</li>
            <li>Các tỉnh/thành khác: 3-7 ngày làm việc</li>
            <li>Thời gian có thể thay đổi tùy theo điều kiện thời tiết, dịch bệnh hoặc các yếu tố khách quan khác.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Kiểm tra & nhận hàng</h2>
          <p>Khách hàng được kiểm tra sản phẩm trước khi nhận. Nếu phát hiện sản phẩm bị lỗi, hư hỏng, vui lòng liên hệ ngay với Kim Tiền để được hỗ trợ đổi trả.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Chính sách vận chuyển đặc biệt</h2>
          <p>Đối với các đơn hàng số lượng lớn hoặc yêu cầu giao hàng gấp, vui lòng liên hệ trực tiếp để được tư vấn phương án vận chuyển phù hợp nhất.</p>
        </section>
      </div>
    </div>
  </div>
);

export default GiaoHangVanChuyenPage; 