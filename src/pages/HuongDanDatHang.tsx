import React from 'react';

const HuongDanDatHangPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Hướng dẫn đặt hàng</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Chọn sản phẩm/dịch vụ</h2>
          <p>Truy cập trang <b>Dịch vụ</b> hoặc <b>Sản phẩm</b> để lựa chọn sản phẩm, dịch vụ phù hợp nhu cầu của bạn. Xem chi tiết mô tả, hình ảnh, tính năng từng dịch vụ.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Gửi yêu cầu báo giá</h2>
          <p>Nhấn nút <b>Yêu cầu báo giá</b> tại trang chi tiết dịch vụ hoặc sử dụng form <b>Báo giá</b> trên website. Điền đầy đủ thông tin liên hệ, sản phẩm cần báo giá, số lượng, yêu cầu chi tiết.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Nhận tư vấn & báo giá</h2>
          <p>Đội ngũ Kim Tiền sẽ liên hệ tư vấn, xác nhận thông tin và gửi báo giá chi tiết qua email, Zalo hoặc điện thoại trong vòng 24h.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Xác nhận đơn hàng</h2>
          <p>Sau khi đồng ý báo giá, bạn xác nhận đặt hàng qua email, Zalo hoặc điện thoại. Kim Tiền sẽ gửi xác nhận đơn hàng và tiến hành sản xuất.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Thanh toán</h2>
          <p>Thanh toán theo hướng dẫn trên báo giá (chuyển khoản, tiền mặt hoặc hình thức khác). Đơn hàng sẽ được xử lý sau khi nhận thanh toán hoặc theo thỏa thuận.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">6. Giao hàng & nhận hàng</h2>
          <p>Sản phẩm sẽ được giao tận nơi theo thông tin bạn cung cấp. Vui lòng kiểm tra kỹ sản phẩm khi nhận hàng và liên hệ ngay nếu có vấn đề phát sinh.</p>
        </section>
      </div>
    </div>
  </div>
);

export default HuongDanDatHangPage; 