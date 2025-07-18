import React from 'react';
import { Link } from 'react-router-dom';

const ChinhSachPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6m0 0v2a4 4 0 008 0v-2" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-600">Chính sách & hỗ trợ khách hàng</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Chính sách đổi trả</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chỉ nhận đổi trả đối với sản phẩm bị lỗi do sản xuất hoặc vận chuyển.</li>
            <li>Thời gian đổi trả: trong vòng 3 ngày kể từ khi nhận hàng.</li>
            <li>Khách hàng cần cung cấp hình ảnh, video chứng minh lỗi sản phẩm.</li>
            <li>Không áp dụng đổi trả với sản phẩm đã qua sử dụng hoặc do lỗi từ phía khách hàng.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Chính sách vận chuyển</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Miễn phí giao hàng nội thành TP.HCM cho đơn hàng từ 2 triệu đồng.</li>
            <li>Giao hàng toàn quốc qua các đơn vị vận chuyển uy tín.</li>
            <li>Thời gian giao hàng: 1-3 ngày nội thành, 3-7 ngày toàn quốc.</li>
            <li>Khách hàng kiểm tra hàng trước khi nhận.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Chính sách thanh toán</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chấp nhận thanh toán chuyển khoản, tiền mặt hoặc các hình thức khác được chấp nhận trên website.</li>
            <li>Khách hàng thanh toán đủ 100% giá trị đơn hàng trước khi giao hàng, trừ trường hợp có thỏa thuận khác.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Hỗ trợ khách hàng</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hotline hỗ trợ: <a href="tel:+84919535525" className="text-yellow-600 underline">0919.535.525</a></li>
            <li>Zalo: <a href="https://zalo.me/0919535525" className="text-yellow-600 underline">0919.535.525</a></li>
            <li>Email: <a href="mailto:kimtien@kimtienposm.com" className="text-yellow-600 underline">kimtien@kimtienposm.com</a></li>
            <li>Thời gian hỗ trợ: 8h00 - 18h00 (Thứ 2 - Thứ 7)</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Liên hệ</h2>
          <p>Nếu có thắc mắc về chính sách hoặc cần hỗ trợ, vui lòng liên hệ qua mục <Link to="/lien-he" className="text-yellow-600 underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default ChinhSachPage; 