import React from 'react';

const OrderGuidePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Order Guide</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Select product/service</h2>
          <p>Access the <b>Service</b> or <b>Product</b> page to choose a product or service that meets your needs. View detailed descriptions, images, and features of each service.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Submit a quote request</h2>
          <p>Click the <b>Request Quote</b> button on the service detail page or use the <b>Quote Request</b> form on the website. Fill in all contact information, product quote request, quantity, and detailed requirements.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Receive consultation & quote</h2>
          <p>Our Kim Tiền team will contact you for consultation, confirm information, and send a detailed quote via email, Zalo, or phone within 24 hours.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Confirm order</h2>
          <p>After agreeing to the quote, you confirm the order via email, Zalo, or phone. Kim Tiền will send an order confirmation and proceed with production.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Payment</h2>
          <p>Payment according to the instructions on the quote (bank transfer, cash, or other forms). Orders will be processed after receiving payment or as agreed.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">6. Delivery & receipt</h2>
          <p>Products will be delivered to your address. Please check the products carefully when receiving and contact us immediately if any issues arise.</p>
        </section>
      </div>
    </div>
  </div>
);

export default OrderGuidePage; 