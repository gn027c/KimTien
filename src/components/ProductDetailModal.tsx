import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Package, Clock, DollarSign, Users } from 'lucide-react';

const ProductModal = ({ product, onClose }: { product: any; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) handleClose();
  };

  // Prevent background scroll without layout shift
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    // Trigger loaded state after mount
    setTimeout(() => setIsLoaded(true), 50);

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
      if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-400 ${
        isClosing ? 'opacity-0 backdrop-blur-none' : 'opacity-100 backdrop-blur-sm'
      }`}
    >
      {/* Enhanced Backdrop */}
      <div
        ref={modalRef}
        className={`absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 transition-all duration-400 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleBackdropClick}
      />

      {/* Modal content with enhanced animations */}
      <div
        className={`relative z-10 bg-white w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-0 overflow-hidden transition-all duration-500 ease-out ${
          isClosing 
            ? 'scale-90 opacity-0 translate-y-8' 
            : isLoaded 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-95 opacity-0 translate-y-4'
        }`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Close button with enhanced styling */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
          aria-label="Đóng"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </button>

        {/* Gallery Section - Enhanced */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8">
          {/* Main Image Container */}
          <div className="relative group w-full aspect-square lg:aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={product.gallery[currentImageIndex]}
              alt={product.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {product.gallery.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 justify-center overflow-x-auto pb-2">
            {product.gallery.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title} ${idx + 1}`}
                className={`w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-xl border-3 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  currentImageIndex === idx 
                    ? 'border-blue-500 shadow-lg scale-105' 
                    : 'border-transparent hover:border-gray-300'
                } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${300 + idx * 50}ms` }}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* Details Section - Enhanced */}
        <div className="flex-1 flex flex-col gap-6 p-6 lg:p-8 overflow-y-auto max-h-[95vh] lg:max-h-none">
          {/* Header */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              {product.brands && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Đối tác: {product.brands.join(', ')}
                </span>
              )}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-medium">Kích thước</div>
                  <div className="text-lg font-bold text-blue-900">{product.details.dimensions}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-600 font-medium">Chi phí</div>
                  <div className="text-lg font-bold text-green-900">{product.details.estimatedCost}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-orange-600 font-medium">Thời gian</div>
                  <div className="text-lg font-bold text-orange-900">{product.details.leadTime}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Đơn tối thiểu</div>
                  <div className="text-lg font-bold text-purple-900">{product.details.minOrder}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Materials & Features */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Vật Liệu
              </h4>
              <ul className="space-y-3">
                {product.details.materials.map((material: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Tính Năng
              </h4>
              <ul className="space-y-3">
                {product.details.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 group">
              <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Yêu Cầu Báo Giá Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;