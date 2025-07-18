import React from 'react';

const ChinhSachPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
    <div className="max-w-2xl w-full bg-white rounded-xl shadow p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">Chính Sách & Hỗ Trợ Khách Hàng</h1>
      <div className="space-y-8 text-gray-700 text-base">
        <section>
          <h2 className="text-xl font-semibold text-black mb-2">1. Chính sách bảo mật thông tin</h2>
          <p>Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin cá nhân của khách hàng. Thông tin chỉ được sử dụng cho mục đích liên hệ, tư vấn, giao dịch và không chia sẻ cho bên thứ ba khi chưa có sự đồng ý của khách hàng.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-black mb-2">2. Chính sách đổi trả & hoàn tiền</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Khách hàng được đổi trả sản phẩm trong vòng <b>7 ngày</b> kể từ khi nhận hàng nếu sản phẩm bị lỗi do sản xuất hoặc vận chuyển.</li>
            <li>Hỗ trợ hoàn tiền 100% nếu sản phẩm không đúng mô tả hoặc không thể khắc phục lỗi.</li>
            <li>Vui lòng liên hệ hotline hoặc email để được hướng dẫn chi tiết quy trình đổi trả.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-black mb-2">3. Chính sách vận chuyển & giao hàng</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Miễn phí giao hàng nội thành TP.HCM cho đơn hàng từ 2 triệu đồng.</li>
            <li>Giao hàng toàn quốc qua các đối tác uy tín (Viettel Post, GHTK, v.v.).</li>
            <li>Thời gian giao hàng: 1-3 ngày nội thành, 3-7 ngày toàn quốc.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-black mb-2">4. Chính sách thanh toán</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chấp nhận thanh toán chuyển khoản ngân hàng, tiền mặt khi nhận hàng (COD), hoặc qua ví điện tử.</li>
            <li>Thông tin tài khoản ngân hàng sẽ được cung cấp khi xác nhận đơn hàng.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-black mb-2">5. Hỗ trợ khách hàng</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hotline: <a href="tel:+84919535525" className="text-blue-600 hover:underline font-medium">0919.535.525</a></li>
            <li>Email: <a href="mailto:kimtien@kimtienposm.com" className="text-blue-600 hover:underline font-medium">kimtien@kimtienposm.com</a></li>
            <li>Zalo: <a href="https://zalo.me/0919535525" className="text-blue-600 hover:underline font-medium">0919.535.525</a></li>
            <li>Địa chỉ: 81/2 Đường An Phú Đông 25, P. An Phú Đông, Q.12, TP.HCM</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default ChinhSachPage; 