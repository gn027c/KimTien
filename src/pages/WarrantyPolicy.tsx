import React from 'react';

const WarrantyPolicyPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-600">Warranty Policy</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Applicable Object</h2>
          <p>This warranty policy applies to all products provided by Kim Tiền, including printing and design services.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. Warranty Period</h2>
          <p>Warranty is valid for 7 days from the date you receive the product.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Conditions for Warranty</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Product defects due to manufacturing, printing, or transportation.</li>
            <li>Product remains in its original condition, not used or repaired by a third party.</li>
            <li>You have a valid receipt and purchase documents from Kim Tiền.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Cases Not Covered by Warranty</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Product damage due to improper use or improper storage.</li>
            <li>Product has been repaired by a third party other than Kim Tiền.</li>
            <li>Warranty period has expired.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Warranty Process</h2>
          <p>Please contact our hotline <a href="tel:+84919535525" className="text-yellow-600 underline">0919.535.525</a> or email <a href="mailto:kimtien@kimtienposm.com" className="text-yellow-600 underline">kimtien@kimtienposm.com</a> for detailed guidance. Kim Tiền will promptly investigate and process the warranty.</p>
        </section>
      </div>
    </div>
  </div>
);

export default WarrantyPolicyPage; 