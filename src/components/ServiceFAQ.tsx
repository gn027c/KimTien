import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const ServiceFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Danh sách câu hỏi thường gặp
  const faqs: FAQItem[] = [
    {
      question: 'Thời gian sản xuất và giao hàng là bao lâu?',
      answer: 'Thời gian sản xuất phụ thuộc vào loại sản phẩm, số lượng và độ phức tạp của thiết kế. Thông thường, thời gian giao hàng từ 3-7 ngày làm việc sau khi duyệt mẫu. Đối với đơn hàng lớn hoặc yêu cầu đặc biệt, chúng tôi sẽ thông báo thời gian cụ thể khi báo giá.',
    },
    {
      question: 'Tôi có thể đặt số lượng ít không?',
      answer: 'Có, chúng tôi nhận đơn hàng với số lượng linh hoạt. Tuy nhiên, mỗi loại sản phẩm sẽ có số lượng đặt hàng tối thiểu khác nhau để đảm bảo hiệu quả sản xuất và giá thành hợp lý. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết về số lượng tối thiểu cho từng sản phẩm.',
    },
    {
      question: 'Tôi chưa có thiết kế, có được hỗ trợ không?',
      answer: 'Hoàn toàn được! Chúng tôi có đội ngũ thiết kế chuyên nghiệp sẽ hỗ trợ bạn tạo ra thiết kế phù hợp với yêu cầu và thương hiệu của bạn. Dịch vụ thiết kế có thể được tính phí riêng hoặc miễn phí tùy theo quy mô đơn hàng.',
    },
    {
      question: 'Làm thế nào để nhận báo giá chi tiết?',
      answer: 'Bạn có thể nhận báo giá bằng cách điền thông tin vào form báo giá trên website, gọi điện trực tiếp hoặc gửi email cho chúng tôi. Để có báo giá chính xác nhất, vui lòng cung cấp thông tin chi tiết về sản phẩm, kích thước, chất liệu, số lượng và các yêu cầu đặc biệt khác.',
    },
    {
      question: 'Tôi có thể xem mẫu sản phẩm trước khi đặt hàng không?',
      answer: 'Có, chúng tôi có thể cung cấp mẫu sản phẩm hoặc file thiết kế 3D để bạn xem trước khi quyết định đặt hàng. Đối với một số sản phẩm đặc biệt, chúng tôi có thể sản xuất mẫu thử với chi phí phát sinh.',
    },
    {
      question: 'Các phương thức thanh toán được chấp nhận?',
      answer: 'Chúng tôi chấp nhận nhiều phương thức thanh toán như chuyển khoản ngân hàng, tiền mặt và các ví điện tử phổ biến. Thông thường, chúng tôi yêu cầu đặt cọc 30-50% giá trị đơn hàng trước khi sản xuất và thanh toán phần còn lại trước khi giao hàng.',
    },
  ];

  // Xử lý khi click vào câu hỏi
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu Hỏi Thường Gặp</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Giải đáp những thắc mắc phổ biến về dịch vụ thiết kế và in ấn của chúng tôi
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-bold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Không tìm thấy câu trả lời cho thắc mắc của bạn?
          </p>
          <a 
            href="/lien-he" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <span>Liên hệ tư vấn</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ; 