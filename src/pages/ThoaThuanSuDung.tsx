import React from 'react';
import { Link } from 'react-router-dom';

const ThoaThuanSuDungPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-6.13V7a4 4 0 00-3-3.87M5 10V7a4 4 0 013-3.87m0 0A4 4 0 0112 3a4 4 0 014 4v3m-8 0a4 4 0 014 4v3m0 0a4 4 0 01-4-4v-3m8 0a4 4 0 014 4v3m0 0a4 4 0 01-4 4v3" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Thoả thuận sử dụng</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Giới thiệu</h2>
          <p>Chào mừng bạn đến với website của Kim Tiền. Khi truy cập và sử dụng website, bạn đồng ý tuân thủ các điều khoản sử dụng dưới đây. Vui lòng đọc kỹ trước khi sử dụng dịch vụ.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Quyền và trách nhiệm của người dùng</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cung cấp thông tin chính xác khi liên hệ hoặc đặt hàng.</li>
            <li>Không sử dụng website cho mục đích vi phạm pháp luật, phát tán thông tin sai lệch, gây ảnh hưởng đến hoạt động của website.</li>
            <li>Chịu trách nhiệm bảo mật thông tin tài khoản (nếu có) và mọi hoạt động dưới tài khoản của mình.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Quyền và trách nhiệm của Kim Tiền</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bảo mật thông tin khách hàng theo <Link to="/chinh-sach-bao-mat" className="text-blue-600 underline">chính sách bảo mật</Link>.</li>
            <li>Có quyền thay đổi, tạm ngưng hoặc chấm dứt dịch vụ mà không cần báo trước trong trường hợp cần thiết.</li>
            <li>Không chịu trách nhiệm với các thiệt hại phát sinh do người dùng vi phạm điều khoản sử dụng.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Chính sách đặt hàng & thanh toán</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Khách hàng cần kiểm tra kỹ thông tin sản phẩm, số lượng, giá cả trước khi xác nhận đặt hàng.</li>
            <li>Thanh toán có thể thực hiện qua chuyển khoản, tiền mặt hoặc các hình thức khác được chấp nhận trên website.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Chính sách đổi trả & bảo hành</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chỉ nhận đổi trả đối với sản phẩm bị lỗi do sản xuất hoặc vận chuyển, theo quy định tại <Link to="/chinh-sach" className="text-blue-600 underline">Chính sách</Link>.</li>
            <li>Thời gian đổi trả: trong vòng 3 ngày kể từ khi nhận hàng.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">6. Sở hữu trí tuệ</h2>
          <p>Mọi nội dung, hình ảnh, logo, thiết kế trên website thuộc sở hữu của Kim Tiền hoặc đối tác. Nghiêm cấm sao chép, sử dụng lại khi chưa được phép.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">7. Thay đổi điều khoản</h2>
          <p>Kim Tiền có quyền thay đổi, cập nhật điều khoản sử dụng bất cứ lúc nào. Các thay đổi sẽ được thông báo trên website.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">8. Liên hệ</h2>
          <p>Nếu có thắc mắc về điều khoản sử dụng, vui lòng liên hệ qua mục <Link to="/lien-he" className="text-blue-600 underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default ThoaThuanSuDungPage; 