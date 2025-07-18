import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendEmail } from '../utils/emailService';
import { validateEmail } from '../utils/emailConfig';
import { Mail, Phone, MessageCircle, User, Users, Zap, Facebook } from 'lucide-react';

// New: Example avatars (replace with real images if available)
const AVATAR_PLACEHOLDER =
  'https://ui-avatars.com/api/?name=Kim+Tien&background=2563eb&color=fff&size=128&rounded=true';

const STAFF = [
  {
    name: 'Nguyễn Văn A',
    role: 'Trưởng phòng Kinh doanh',
    avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=2563eb&color=fff&size=128&rounded=true',
    description: 'Tư vấn, báo giá, hỗ trợ khách hàng doanh nghiệp.',
    phone: '0911111111',
    zalo: '0911111111',
    email: 'a@kimtienposm.com',
  },
  {
    name: 'Trần Thị B',
    role: 'Chuyên viên Marketing',
    avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=2563eb&color=fff&size=128&rounded=true',
    description: 'Chăm sóc khách hàng, hỗ trợ truyền thông.',
    phone: '0912222222',
    zalo: '0912222222',
    email: 'b@kimtienposm.com',
  },
  {
    name: 'Lê Văn C',
    role: 'Trưởng phòng Thiết kế',
    avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=2563eb&color=fff&size=128&rounded=true',
    description: 'Thiết kế sáng tạo, tư vấn giải pháp in ấn.',
    phone: '0913333333',
    zalo: '0913333333',
    email: 'c@kimtienposm.com',
  },
  {
    name: 'Phạm Thị D',
    role: 'Chuyên viên CSKH',
    avatar: 'https://ui-avatars.com/api/?name=Pham+Thi+D&background=2563eb&color=fff&size=128&rounded=true',
    description: 'Hỗ trợ khách hàng, giải đáp thắc mắc.',
    phone: '0914444444',
    zalo: '0914444444',
    email: 'd@kimtienposm.com',
  },
  {
    name: 'Ngô Văn E',
    role: 'Quản lý dự án',
    avatar: 'https://ui-avatars.com/api/?name=Ngo+Van+E&background=2563eb&color=fff&size=128&rounded=true',
    description: 'Theo dõi tiến độ, đảm bảo chất lượng dự án.',
    phone: '0915555555',
    zalo: '0915555555',
    email: 'e@kimtienposm.com',
  },
];

const ContactPage: React.FC = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Vui lòng nhập email hợp lệ');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await sendEmail({ ...formData });
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    } catch (err) {
      setError('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/imageHeader/contact.png" 
            alt="Contact Banner"
            className="w-full h-full object-cover blur-md scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M0 0L40 40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container max-w-3xl mx-auto px-4 py-24 md:py-32 relative z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Liên Hệ Đội Ngũ Kim Tiền
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto drop-shadow">
            Đội ngũ chuyên nghiệp, tận tâm luôn sẵn sàng hỗ trợ bạn mọi lúc.
          </p>
        </div>
      </section>

      {/* Staff grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAFF.map((member, idx) => (
            <div key={member.email} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full border-4 border-white shadow mb-4 object-cover bg-white" />
              <div className="font-bold text-lg text-blue-700 mb-1">{member.name}</div>
              <div className="text-sm text-gray-500 font-medium mb-2">{member.role}</div>
              <div className="text-gray-600 text-sm mb-4">{member.description}</div>
              <div className="flex gap-3 mt-auto">
                <a href={`tel:${member.phone}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 shadow transition-colors"><Phone className="w-4 h-4" />Gọi</a>
                <a href={`https://zalo.me/${member.zalo}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-sm bg-gray-100 text-blue-700 hover:bg-blue-100 shadow transition-colors"><Zap className="w-4 h-4" />Zalo</a>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-sm bg-gray-100 text-blue-700 hover:bg-blue-100 shadow transition-colors"><Mail className="w-4 h-4" />Email</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-16 px-4 bg-white border-t border-blue-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2"><Mail className="w-6 h-6" /> Gửi tin nhắn cho Kim Tiền</h2>
            <div className="mb-4 text-gray-500 text-sm">Chúng tôi cam kết bảo mật thông tin khách hàng. Vui lòng để lại thông tin, đội ngũ sẽ liên hệ tư vấn nhanh nhất!</div>
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg font-bold text-blue-700 mb-1">Tin nhắn đã được gửi!</h3>
                <p className="text-gray-600 text-sm">Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-3 p-2 bg-red-50 text-red-600 rounded border border-red-200 text-sm">{error}</div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Họ và tên <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Số điện thoại</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">Chủ đề <span className="text-red-500">*</span></label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm" required>
                      <option value="">-- Chọn chủ đề --</option>
                      <option value="Báo giá">Báo giá</option>
                      <option value="Tư vấn">Tư vấn</option>
                      <option value="Hợp tác">Hợp tác</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-xs font-medium mb-1">Nội dung <span className="text-red-500">*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm" required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full px-5 py-2 font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}>{isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto rounded-2xl shadow-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d322.69801405682443!2d106.70177359504456!3d10.865253638687967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1752684525268!5m2!1svi!2s"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 