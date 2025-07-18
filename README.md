# Kim Tiền Printing Services Website

Một website hiện đại cho dịch vụ in ấn, được phát triển bằng React, TypeScript và Tailwind CSS.

## 🚀 Tính năng chính

- **Thiết kế Responsive**: Tương thích với tất cả thiết bị (Mobile, Tablet, Desktop)
- **UI/UX Hiện đại**: Giao diện sạch sẽ, hiệu ứng mượt mà và tương tác trực quan
- **Trang sản phẩm**: Hiển thị danh mục sản phẩm với bộ lọc và tìm kiếm
- **Trang báo giá**: Báo giá tự động dựa trên lựa chọn của người dùng
- **Danh mục dự án**: Hiển thị các dự án đã hoàn thành với bộ lọc theo loại
- **Blog**: Hỗ trợ bài viết với phân loại và tìm kiếm
- **Form liên hệ**: Form liên hệ đầy đủ với kiểm tra đầu vào và gửi email qua EmailJS
- **Tối ưu SEO**: Cấu trúc trang tối ưu cho công cụ tìm kiếm

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide Icons
- **Animation**: AOS (Animate on Scroll)
- **Carousel**: Swiper.js
- **Form Handling**: Native React
- **Email Service**: EmailJS

## 📂 Cấu trúc dự án

```
project/
├── public/            # Tài nguyên tĩnh và hình ảnh
├── src/
│   ├── components/    # Các component tái sử dụng
│   ├── hooks/         # Custom hooks React
│   ├── pages/         # Components trang (routing-level)
│   ├── utils/         # Utility functions và helpers
│   ├── App.tsx        # Component gốc của ứng dụng
│   └── main.tsx       # Entry point
└── ...                # Các file config khác
```

## 🗂️ Cấu trúc Routing

- `/` - Trang chủ
- `/dich-vu` - Trang dịch vụ in ấn
- `/bao-gia` - Trang báo giá tự động
- `/du-an` - Trang dự án (portfolio)
- `/ve-chung-toi` - Trang giới thiệu công ty
- `/lien-he` - Trang liên hệ
- `/blog` - Trang blog
- `/blog/:slug` - Trang chi tiết bài viết

## 🚦 Khởi động dự án

### Yêu cầu hệ thống

- Node.js 16.x trở lên
- npm 8.x trở lên hoặc yarn 1.22.x trở lên

### Cài đặt

1. Clone repository:
   ```bash
   git clone https://github.com/your-username/kimtien-printing.git
   cd kimtien-printing
   ```

2. Cài đặt dependencies:
```bash
npm install
   # hoặc
   yarn
   ```

3. Cấu hình EmailJS:
   - Tạo tài khoản tại [EmailJS](https://www.emailjs.com/)
   - Tạo một service và template email
   - Tạo file `.env` trong thư mục gốc dự án với nội dung sau:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Chạy ứng dụng ở môi trường phát triển:
   ```bash
npm run dev
   # hoặc
   yarn dev
```

5. Build ứng dụng cho production:
```bash
npm run build
   # hoặc
   yarn build
   ```

## 🔧 Cấu hình

- **Tailwind CSS**: Cấu hình trong `tailwind.config.js`
- **Vite**: Cấu hình trong `vite.config.ts`
- **TypeScript**: Cấu hình trong `tsconfig.json`
- **ESLint**: Cấu hình trong `eslint.config.js`
- **EmailJS**: Cấu hình trong `src/utils/emailConfig.ts` và biến môi trường

## 📱 Responsive Design

Website được thiết kế theo nguyên tắc "Mobile First" và hỗ trợ đầy đủ các kích thước màn hình:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 SEO Optimization

- Sử dụng semantic HTML tags
- Meta tags tối ưu cho từng trang
- Tối ưu hóa tốc độ tải trang
- Hỗ trợ chia sẻ trên mạng xã hội (Open Graph tags)
- Sitemap XML tự động

## 📨 Tính năng Email

Website sử dụng EmailJS để gửi email từ các form:
- **Form liên hệ**: Gửi thông tin liên hệ từ trang Liên hệ
- **Form báo giá**: Gửi yêu cầu báo giá từ modal Báo giá
- **Cấu hình template**: Điều chỉnh template email trong tài khoản EmailJS

## 📈 Triển khai và Theo dõi

- **Hosting**: Có thể triển khai trên Vercel, Netlify, hoặc bất kỳ dịch vụ host tĩnh nào khác
- **Analytics**: Đã tích hợp Google Analytics (cần bổ sung ID theo dõi của bạn)
- **Hiệu suất**: Lighthouse score > 90 cho tất cả các metrics

## 📝 Phát triển trong tương lai

- [ ] Tích hợp CMS (Contentful, Strapi) cho quản lý nội dung động
- [ ] Hỗ trợ đa ngôn ngữ (i18n)
- [ ] Tính năng đăng nhập và quản lý tài khoản khách hàng
- [ ] Hệ thống quản lý đơn hàng
- [ ] Chat trực tuyến với khách hàng

## 📄 Giấy phép

[MIT](LICENSE)

---

&copy; 2024 Kim Tiền Printing Services. Được phát triển bởi [KimTienPOSM.com](https://kimtienposm.com)
