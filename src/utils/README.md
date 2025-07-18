# Cấu hình EmailJS

## Giới thiệu

Dự án này sử dụng EmailJS để gửi email từ các form trên website, bao gồm form liên hệ và form báo giá. EmailJS cho phép gửi email trực tiếp từ client-side JavaScript mà không cần backend server.

## Cách thiết lập EmailJS

1. **Đăng ký tài khoản EmailJS**
   - Truy cập [EmailJS](https://www.emailjs.com/) và đăng ký tài khoản miễn phí
   - Gói miễn phí cho phép gửi 200 email mỗi tháng

2. **Tạo Email Service**
   - Trong dashboard EmailJS, chọn "Email Services" > "Add New Service"
   - Chọn nhà cung cấp email của bạn (Gmail, Outlook, v.v.) và kết nối tài khoản
   - Sau khi tạo xong, lưu lại Service ID (ví dụ: service_abc123)

3. **Tạo Email Template**
   - Chọn "Email Templates" > "Create New Template"
   - Thiết kế template email với các biến động
   - Đảm bảo template có các biến sau:
     - `from_name`: Tên người gửi
     - `from_email`: Email người gửi
     - `from_phone`: Số điện thoại người gửi
     - `subject`: Chủ đề email
     - `message`: Nội dung tin nhắn
     - `product`: Tên sản phẩm (cho form báo giá)
   - Lưu lại Template ID (ví dụ: template_xyz789)

4. **Lấy Public Key**
   - Vào "Account" > "API Keys"
   - Copy Public Key (ví dụ: public_key_abcxyz)

5. **Cấu hình trong dự án**
   - Tạo file `.env` trong thư mục gốc dự án với nội dung:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Cấu trúc file

- `emailConfig.ts`: Chứa cấu hình EmailJS và hàm kiểm tra email
- `emailService.ts`: Chứa các hàm gửi email thông qua EmailJS

## Sử dụng trong dự án

### Form Liên hệ
```tsx
import { sendEmail } from '../utils/emailService';

// Trong component Contact
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: formData.subject,
    });
    
    // Xử lý thành công
  } catch (error) {
    // Xử lý lỗi
  }
};
```

### Form Báo giá
```tsx
import { sendQuoteRequest } from '../utils/emailService';

// Trong component QuoteModal
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await sendQuoteRequest({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: messageDetails,
      product: formData.productName,
    });
    
    // Xử lý thành công
  } catch (error) {
    // Xử lý lỗi
  }
};
``` 