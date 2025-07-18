import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center mb-6">
        <svg className="w-10 h-10 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-6.13V7a4 4 0 00-3-3.87M5 10V7a4 4 0 013-3.87m0 0A4 4 0 0112 3a4 4 0 014 4v3m-8 0a4 4 0 014 4v3m0 0a4 4 0 01-4-4v-3m8 0a4 4 0 014 4v3m0 0a4 4 0 01-4 4v3" />
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Terms of Use</h1>
      </div>
      <div className="text-gray-700 text-base md:text-lg space-y-6">
        <section>
          <h2 className="font-semibold text-xl mb-2">1. Introduction</h2>
          <p>Welcome to Kim Tiền's website. When accessing and using the website, you agree to comply with the terms of use below. Please read carefully before using the service.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">2. User Rights and Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate information when contacting or placing orders.</li>
            <li>Do not use the website for illegal purposes, disseminate false information, and affect the operation of the website.</li>
            <li>Be responsible for the security of account information (if any) and any activities under your account.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">3. Kim Tiền's Rights and Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Protect customer information in accordance with the <Link to="/chinh-sach-bao-mat" className="text-blue-600 underline">Privacy Policy</Link>.</li>
            <li>Reserve the right to change, temporarily suspend, or terminate the service at any time if necessary.</li>
            <li>Not responsible for any damages incurred by users due to violations of the terms of use.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">4. Order and Payment Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Customers need to carefully check product information, quantity, and price before confirming the order.</li>
            <li>Payment can be made via bank transfer, cash, or other forms accepted on the website.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">5. Return and Warranty Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Only returns are accepted for products that are defective due to production or transportation, in accordance with the <Link to="/chinh-sach" className="text-blue-600 underline">Terms of Use</Link>.</li>
            <li>Return time: within 3 days from receiving the product.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">6. Intellectual Property Rights</h2>
          <p>All content, images, logos, and designs on the website are owned by Kim Tiền or partners. Prohibited from copying or reusing without permission.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">7. Changes to Terms</h2>
          <p>Kim Tiền reserves the right to change or update the terms of use at any time. Changes will be announced on the website.</p>
        </section>
        <section>
          <h2 className="font-semibold text-xl mb-2">8. Contact</h2>
          <p>If you have any questions regarding the terms of use, please contact us via the <Link to="/lien-he" className="text-blue-600 underline">Contact</Link> section.</p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsOfUsePage; 