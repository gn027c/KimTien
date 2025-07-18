import React from 'react';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  title: string;
  description: string;
  category: 'design' | 'printing';
  services: {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    category: 'design' | 'printing';
    isNew?: boolean;
  }[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  category,
  services,
}) => {
  return (
    <div className={`mb-20 relative`} id={`${category}-services`}>
      {/* Đã xoá background image cho printing */}
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className={`text-3xl font-bold text-gray-800 mb-4`}>
          {title}
        </h2>
        <div className={`w-20 h-1 bg-gray-300 mx-auto mb-6 rounded-full`}></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          {description}
        </p>
      </div>
      {/* Services grid */}
      {/* Card liên hệ nổi bật ở đầu grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-8">
        {/* Remove the Not Found Card - only render service cards */}
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            features={service.features}
            category={service.category}
            isNew={service.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory; 