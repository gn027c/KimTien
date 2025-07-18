import React from 'react';
import { Link } from 'react-router-dom';

const ChinhSachBaoMatPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">Chính sách bảo mật</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Mục đích thu thập thông tin</h2>
          <p>Chúng tôi thu thập thông tin cá nhân của khách hàng nhằm nâng cao chất lượng dịch vụ, hỗ trợ khách hàng tốt hơn và đảm bảo quyền lợi cho khách hàng khi sử dụng dịch vụ của Kim Tiền.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Phạm vi sử dụng thông tin</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hỗ trợ khách hàng khi liên hệ, đặt hàng, thanh toán.</li>
            <li>Cung cấp thông tin về sản phẩm, dịch vụ, chương trình khuyến mãi.</li>
            <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng.</li>
            <li>Liên hệ giải quyết các vấn đề phát sinh liên quan đến giao dịch.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Bảo mật thông tin khách hàng</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng.</li>
            <li>Không chia sẻ, bán hoặc cho thuê thông tin khách hàng cho bên thứ ba khi chưa có sự đồng ý của khách hàng, trừ trường hợp theo quy định pháp luật.</li>
            <li>Thông tin chỉ được sử dụng nội bộ cho mục đích phục vụ khách hàng.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Thời gian lưu trữ thông tin</h2>
          <p>Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu huỷ bỏ hoặc khách hàng tự đăng nhập và thực hiện huỷ bỏ. Trong mọi trường hợp, thông tin cá nhân sẽ được bảo mật trên máy chủ của Kim Tiền.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Quyền của khách hàng đối với thông tin cá nhân</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Khách hàng có quyền kiểm tra, cập nhật, điều chỉnh hoặc huỷ bỏ thông tin cá nhân của mình.</li>
            <li>Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ ba đến <a href="mailto:kimtien@kimtienposm.com" className="text-green-600 underline">kimtien@kimtienposm.com</a>.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">6. Cam kết bảo mật</h2>
          <p>Kim Tiền cam kết bảo mật thông tin khách hàng bằng mọi hình thức có thể, sử dụng các biện pháp kỹ thuật và an ninh phù hợp để bảo vệ dữ liệu cá nhân khỏi truy cập trái phép.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">7. Thay đổi chính sách</h2>
          <p>Chính sách bảo mật có thể được cập nhật, thay đổi bất cứ lúc nào. Mọi thay đổi sẽ được thông báo trên website.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">8. Liên hệ</h2>
          <p>Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ qua mục <Link to="/lien-he" className="text-green-600 underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default ChinhSachBaoMatPage; 