import React, { useEffect, useMemo } from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

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
  // Preload all service images on mount
  useEffect(() => {
    services.forEach(service => {
      if (service.image) {
        const img = new window.Image();
        img.src = service.image;
      }
    });
  }, [services]);

  // Memoize all services
  const allServices = useMemo(() => services, [services]);

  // Hiện/ẩn bằng class, không filter
  const isVisible = (service) => service.category === category;

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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >
        {allServices.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={isVisible(service) ? 'block' : 'hidden'}
          >
            <ServiceCard
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              category={service.category}
              isNew={service.isNew}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceCategory; 