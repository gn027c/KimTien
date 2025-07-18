import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServiceProcess from '../components/ServiceProcess';

const BaoGiaPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productFromQuery = query.get('product') || '';
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: productFromQuery,
    quantity: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productFromQuery) {
      setForm((prev) => ({ ...prev, product: productFromQuery }));
    }
  }, [productFromQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Gửi dữ liệu đến backend hoặc email
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center mb-6">
          <svg className="w-10 h-10 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6m0 0v2a4 4 0 008 0v-2" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Yêu cầu báo giá</h1>
        </div>
        {submitted ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Gửi yêu cầu thành công!</h2>
            <p className="text-gray-600">Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Họ và tên <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập họ tên"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nhập email (không bắt buộc)"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Sản phẩm/dịch vụ cần báo giá <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="VD: In hộp giấy, in catalogue, thiết kế logo..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Số lượng</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                min={1}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập số lượng (nếu có)"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Ghi chú thêm</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Yêu cầu chi tiết, quy cách, chất liệu, thời gian..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg mt-2 shadow-lg"
            >
              Gửi yêu cầu báo giá
            </button>
          </form>
        )}
      </div>
      {/* Quy trình làm việc */}
      <div className="w-full mt-16">
        <ServiceProcess />
      </div>
    </div>
  );
};

export default BaoGiaPage; 