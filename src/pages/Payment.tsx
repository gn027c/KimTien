import React from 'react';

const PaymentPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">Thanh toán</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visa/MasterCard */}
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow">
          <svg viewBox="0 0 40 16" width="40" height="20" className="mb-2"><text x="2" y="13" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="13" fill="#1A1F71">VISA</text></svg>
          <svg width="40" height="20" viewBox="0 0 32 16" className="mb-2"><circle cx="11" cy="8" r="7" fill="#EB001B"/><circle cx="21" cy="8" r="7" fill="#F79E1B"/><text x="7" y="12" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="7" fill="#fff">MC</text></svg>
          <div className="text-gray-700 text-sm mb-2">Thanh toán qua thẻ Visa/MasterCard</div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">Thanh toán thẻ</button>
        </div>
        {/* Momo */}
        <div className="bg-[#A50064]/10 rounded-xl p-6 flex flex-col items-center shadow">
          <span className="text-[#A50064] font-bold text-lg mb-2">MoMo</span>
          <div className="text-gray-700 text-sm mb-2">Quét mã QR hoặc chuyển khoản qua ví MoMo</div>
          <button className="px-4 py-2 bg-[#A50064] text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-sm">Thanh toán MoMo</button>
        </div>
        {/* ZaloPay */}
        <div className="bg-[#009DF6]/10 rounded-xl p-6 flex flex-col items-center shadow">
          <span className="text-[#009DF6] font-bold text-lg mb-2">ZaloPay</span>
          <div className="text-gray-700 text-sm mb-2">Quét mã QR hoặc chuyển khoản qua ZaloPay</div>
          <button className="px-4 py-2 bg-[#009DF6] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">Thanh toán ZaloPay</button>
        </div>
        {/* Bank transfer */}
        <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center shadow">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mb-2"><path d="M3 10V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2M3 10v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6M3 10l9-6 9 6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 16v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div className="text-gray-700 text-sm mb-2">Chuyển khoản ngân hàng</div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm">Xem thông tin chuyển khoản</button>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8">* Thông tin chi tiết từng phương thức sẽ được bổ sung hoặc chỉnh sửa theo yêu cầu của bạn.</div>
    </div>
  </div>
);

export default PaymentPage; 