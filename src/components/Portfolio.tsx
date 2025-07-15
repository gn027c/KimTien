import React, { useState, useEffect, useRef } from 'react';
import { Package, Palette, Utensils, Heart, Eye, ArrowRight, Star, Clock, DollarSign, Zap, Award, ChevronRight, X, ChevronLeft, ExternalLink } from 'lucide-react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  icon: any;
  image: string;
  description: string;
  details: {
    materials: string[];
    features: string[];
    dimensions: string;
    estimatedCost: string;
    minOrder: string;
    leadTime: string;
  };
  gallery: string[];
  brands?: string[];
  rating?: number;
  isPopular?: boolean;
  isNew?: boolean;
}

// Quick View Modal Component
const QuickViewModal: React.FC<{
  product: PortfolioItem;
  onClose: () => void;
  onViewDetails: () => void;
}> = ({ product, onClose, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentImageIndex]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.gallery.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-modal-backdrop-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl animate-modal-content-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <product.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Image Gallery */}
          <div className="lg:w-1/2 p-6">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group">
              <img
                src={product.gallery[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              
              {product.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
                  
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    {currentImageIndex + 1} / {product.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.gallery.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition-all ${
                      currentImageIndex === idx 
                        ? 'border-blue-500' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-6 space-y-4">
            {/* Badges and Rating */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {product.isNew && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    MỚI
                  </span>
                )}
                {product.isPopular && (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                    PHỔ BIẾN
                  </span>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center gap-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
              <div className="text-center">
                <Clock className="w-5 h-5 text-green-500 mx-auto mb-1" />
                <div className="text-xs text-gray-500">{product.details.leadTime}</div>
              </div>
              <div className="text-center">
                <DollarSign className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                <div className="text-xs text-gray-500">
                  Từ {product.details.estimatedCost.split(' - ')[0]}
                </div>
              </div>
              <div className="text-center">
                <Package className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                <div className="text-xs text-gray-500">{product.details.minOrder}</div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Tính năng nổi bật:</h4>
              <ul className="space-y-1">
                {product.details.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            {product.brands && (
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  Đối tác: <span className="font-medium">{product.brands.join(', ')}</span>
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={onViewDetails}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Xem Chi Tiết
              </button>
              <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl font-semibold transition-colors">
                Báo Giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC<{ onProductSelect?: (product: PortfolioItem) => void }> = ({ onProductSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<PortfolioItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Bao Bì Điện Tử Cao Cấp',
      category: 'Điện Tử',
      icon: Package,
      image: 'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Trải nghiệm mở hộp sang trọng cho điện tử cao cấp với vật liệu bền vững và thiết kế hiện đại.',
      details: {
        materials: ['Carton cứng cao cấp', 'Foam EVA định hình', 'Giấy tissue màu'],
        features: ['Chống sốc tối ưu', 'Thiết kế unboxing premium', 'In offset 4 màu'],
        dimensions: '35x25x8 cm',
        estimatedCost: '45.000 - 65.000 VNĐ/chiếc',
        minOrder: '500 chiếc',
        leadTime: '10-14 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      brands: ['Acecook', 'Kim Tiền'],
      rating: 4.9,
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      title: 'Bao Bì Mỹ Phẩm Sang Trọng',
      category: 'Mỹ Phẩm',
      icon: Palette,
      image: 'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Thiết kế bao bì mỹ phẩm cao cấp với hoàn thiện bề mặt đặc biệt và cấu trúc bảo vệ tối ưu.',
      details: {
        materials: ['Carton duplex phủ film', 'Nhựa PET trong suốt', 'Foam định hình'],
        features: ['UV spot gloss', 'Emboss logo', 'Cửa sổ trong suốt'],
        dimensions: '20x15x6 cm',
        estimatedCost: '35.000 - 50.000 VNĐ/chiếc',
        minOrder: '1000 chiếc',
        leadTime: '12-16 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887664/pexels-photo-7887664.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.8,
      isPopular: false,
      isNew: true
    },
    {
      id: 3,
      title: 'Bao Bì Thực Phẩm An Toàn',
      category: 'Thực Phẩm',
      icon: Utensils,
      image: 'https://images.pexels.com/photos/7887678/pexels-photo-7887678.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Giải pháp bao bì thực phẩm đạt chuẩn FDA với khả năng bảo quản tối ưu và thiết kế thu hút.',
      details: {
        materials: ['Carton food grade', 'Màng PE phủ bên trong', 'Giấy greaseproof'],
        features: ['Chống ẩm', 'Chống dầu mỡ', 'Có thể tái chế'],
        dimensions: '25x20x10 cm',
        estimatedCost: '25.000 - 40.000 VNĐ/chiếc',
        minOrder: '2000 chiếc',
        leadTime: '8-12 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.7,
      isPopular: true,
      isNew: false
    },
    {
      id: 4,
      title: 'Bao Bì Dược Phẩm',
      category: 'Y Tế',
      icon: Heart,
      image: 'https://images.pexels.com/photos/7887664/pexels-photo-7887664.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bao bì dược phẩm tuân thủ GMP với tính năng chống giả mạo và bảo vệ sản phẩm tối đa.',
      details: {
        materials: ['Carton pharmaceutical grade', 'Blister PVC/Alu', 'Hologram security'],
        features: ['Chống giả mạo', 'Chống ẩm tuyệt đối', 'Tem bảo hành'],
        dimensions: '15x10x5 cm',
        estimatedCost: '55.000 - 75.000 VNĐ/chiếc',
        minOrder: '5000 chiếc',
        leadTime: '14-18 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887664/pexels-photo-7887664.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 5.0,
      isPopular: false,
      isNew: false
    },
    {
      id: 5,
      title: 'Bao Bì Quà Tặng Premium',
      category: 'Quà Tặng',
      icon: Package,
      image: 'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Hộp quà cao cấp với thiết kế sang trọng và hoàn thiện thủ công tinh xảo.',
      details: {
        materials: ['Carton cứng 2mm', 'Giấy fancy cao cấp', 'Ruy băng satin'],
        features: ['Ép kim tuyến', 'Đóng nam châm', 'Lót nhung mềm'],
        dimensions: '30x20x12 cm',
        estimatedCost: '85.000 - 120.000 VNĐ/chiếc',
        minOrder: '300 chiếc',
        leadTime: '15-20 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.9,
      isPopular: true,
      isNew: true
    },
    {
      id: 6,
      title: 'Bao Bì Thời Trang',
      category: 'Thời Trang',
      icon: Palette,
      image: 'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Túi giấy và hộp đựng thời trang với thiết kế trendy và chất liệu bền đẹp.',
      details: {
        materials: ['Giấy kraft cao cấp', 'Dây cotton bện', 'Carton micro sóng'],
        features: ['In flexo chất lượng cao', 'Quai xách bền chắc', 'Có thể tái sử dụng'],
        dimensions: '40x30x15 cm',
        estimatedCost: '30.000 - 45.000 VNĐ/chiếc',
        minOrder: '1000 chiếc',
        leadTime: '7-10 ngày'
      },
      gallery: [
        'https://images.pexels.com/photos/7887674/pexels-photo-7887674.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887679/pexels-photo-7887679.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887664/pexels-photo-7887664.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.6,
      isPopular: false,
      isNew: false
    }
  ];

  // Get unique categories
  const categories = ['Tất cả', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'Tất cả' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleProductClick = (product: PortfolioItem) => {
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  const handleQuickView = (product: PortfolioItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleQuickViewDetails = () => {
    if (quickViewProduct && onProductSelect) {
      onProductSelect(quickViewProduct);
      setQuickViewProduct(null);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Package className="w-4 h-4" />
              Sản phẩm nổi bật
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dự Án <span className="text-blue-600">Tiêu Biểu</span>
            </h2>
          </div>
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá các giải pháp bao bì sáng tạo và chất lượng cao mà chúng tôi đã thực hiện cho khách hàng
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className={`mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-500 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`} style={{ transitionDelay: '400ms' }} />
        </div>

        {/* Enhanced Category Filter */}
        <div className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg border border-gray-200'
                }`}
                style={{ 
                  animationDelay: `${800 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Product Count with animation */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">
                {filteredProducts.length} sản phẩm
                {selectedCategory !== 'Tất cả' && ` trong "${selectedCategory}"`}
              </span>
            </div>
          </div>
        </div>

        {/* Refined Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${1000 + index * 150}ms` }}
              onClick={() => handleProductClick(item)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Refined Card Design with Fixed Height */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 relative h-full flex flex-col">
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      MỚI
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      PHỔ BIẾN
                    </span>
                  )}
                </div>

                {/* Quick View Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={(e) => handleQuickView(item, e)}
                    className={`bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                      hoveredCard === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Fixed Height Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Category Icon */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Fixed Height Content Container */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Header with Rating - Fixed Height */}
                  <div className="mb-3 min-h-[60px] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold border border-blue-200">
                        {item.category}
                      </span>
                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <div className="flex items-center">
                            {renderStars(item.rating)}
                          </div>
                          <span className="text-xs font-semibold text-gray-700 ml-1">
                            {item.rating}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description - Fixed Height */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 min-h-[60px]">
                    {item.description}
                  </p>

                  {/* Quick Info Grid - Fixed Height */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-gray-100 mb-4">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-green-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-500 font-medium">
                        {item.details.leadTime}
                      </div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-500 font-medium">
                        Từ {item.details.estimatedCost.split(' - ')[0]}
                      </div>
                    </div>
                    <div className="text-center">
                      <Package className="w-4 h-4 text-purple-500 mx-auto mb-1" />
                      <div className="text-xs text-gray-500 font-medium">
                        {item.details.minOrder}
                      </div>
                    </div>
                  </div>

                  {/* Brands - Fixed Height */}
                  <div className="mb-4 min-h-[24px] flex items-center">
                    {item.brands && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-gray-500">
                          Đối tác: <span className="font-semibold text-gray-700">{item.brands.join(', ')}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Always Visible CTA Buttons */}
                  <div className="mt-auto flex gap-2">
                    <button 
                      onClick={(e) => handleQuickView(item, e)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] text-sm flex items-center justify-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      Xem Nhanh
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] text-sm flex items-center justify-center gap-1">
                      <ChevronRight className="w-4 h-4" />
                      Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: `${1000 + filteredProducts.length * 150 + 500}ms` }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Không Tìm Thấy Sản Phẩm Phù Hợp?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Chúng tôi chuyên thiết kế và sản xuất bao bì tùy chỉnh theo yêu cầu riêng của bạn
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                <Zap className="w-5 h-5" />
                Tư Vấn Thiết Kế Miễn Phí
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onViewDetails={handleQuickViewDetails}
        />
      )}
    </section>
  );
};

export default Portfolio;