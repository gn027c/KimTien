import React from 'react';

const ShippingPolicyPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 7h13l2-7H6" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">Shipping & Delivery</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Shipping Coverage</h2>
          <p>Kim Tiền delivers nationwide, free for orders over 2 million VND within Ho Chi Minh City. Other areas will be charged based on the shipping price table.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Shipping Partners</h2>
          <p>We collaborate with reputable shipping partners such as Viettel Post, GHTK, J&T, etc. to ensure that goods reach customers safely and on time.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Delivery Time</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Within Ho Chi Minh City: 1-3 working days</li>
            <li>Other provinces/cities: 3-7 working days</li>
            <li>Delivery time may vary depending on weather conditions, epidemics, or other external factors.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Inspection & Receipt</h2>
          <p>Customers are inspected before receiving. If any product is found to be defective, damaged, please contact Kim Tiền immediately for replacement.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Special Shipping Policy</h2>
          <p>For large orders or urgent delivery requests, please contact us directly for consultation on the most suitable shipping plan.</p>
        </section>
      </div>
    </div>
  </div>
);

export default ShippingPolicyPage; 