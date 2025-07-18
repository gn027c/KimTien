import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
    <div className="max-w-3xl w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">Điều khoản sử dụng</h1>
      <div className="text-gray-700 text-base md:text-lg space-y-6 bg-white rounded-xl shadow-lg p-8">
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
            <li>Bảo mật thông tin khách hàng theo chính sách bảo mật.</li>
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
          <p>Nếu có thắc mắc về điều khoản sử dụng, vui lòng liên hệ qua mục <Link to="/contact" className="text-blue-600 underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsPage; 