import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: 'design' | 'printing';
  isNew?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  features,
  category,
  isNew = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      {/* Banner with blur instead of product image */}
      <div className={`relative overflow-hidden h-40 rounded-t-xl bg-gray-100`}>
        <img 
          src={category === 'printing' ? image : '/imageHeader/service.png'} 
          alt={title}
          className={`w-full h-full object-cover ${category === 'printing' ? 'scale-105 mix-blend-multiply opacity-90' : 'blur-sm scale-105'}`}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full`}>
            {category === 'design' ? 'Thiết kế' : 'In ấn'}
          </span>
          {isNew && (
            <span className="ml-2 bg-green-100 text-green-600 text-xs font-medium px-2.5 py-1 rounded-full">
              Mới
            </span>
          )}
        </div>
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
            {title}
          </h3>
          {/* Animated underline */}
          <div className={`h-0.5 w-0 group-hover:w-16 bg-gray-300 transition-all duration-300`}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Đặc điểm nổi bật
          </h4>
          
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className={`w-5 h-5 text-gray-700 mt-0.5 mr-2 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button 
            className={`flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center`}
            onClick={() => navigate(`/bao-gia?product=${encodeURIComponent(title)}`)}
          >
            <span>Báo giá</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <Link 
            to={`/dich-vu/${id}`}
            className="py-2.5 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 