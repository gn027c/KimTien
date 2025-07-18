import React from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedGrid from './AnimatedGrid';
import AnimatedImage from './AnimatedImage';
import AnimatedButton from './AnimatedButton';

const AnimationExample: React.FC = () => {
  // Mảng sản phẩm mẫu
  const products = [
    {
      id: 1,
      title: 'Sản phẩm 1',
      image: '/public/imageProduct/Hộp mềm/11.png',
      category: 'Hộp mềm',
    },
    {
      id: 2,
      title: 'Sản phẩm 2',
      image: '/public/imageProduct/Carton/2.png',
      category: 'Carton',
    },
    {
      id: 3,
      title: 'Sản phẩm 3',
      image: '/public/imageProduct/Túi giấy/1.png',
      category: 'Túi giấy',
    },
    {
      id: 4,
      title: 'Sản phẩm 4',
      image: '/public/imageProduct/Hộp cứng/52.png',
      category: 'Hộp cứng',
    },
    {
      id: 5,
      title: 'Sản phẩm 5',
      image: '/public/imageProduct/Dangler/23.png',
      category: 'Dangler',
    },
    {
      id: 6,
      title: 'Sản phẩm 6',
      image: '/public/imageProduct/Hanger/12.png',
      category: 'Hanger',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Tiêu đề với animation fade-up */}
      <AnimatedSection animation="fade-up" className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sản Phẩm Nổi Bật</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá bộ sưu tập sản phẩm in ấn chất lượng cao của chúng tôi với thiết kế độc đáo và chất lượng vượt trội.
        </p>
      </AnimatedSection>

      {/* Banner với animation fade-in */}
      <AnimatedSection animation="zoom-in" className="mb-16 rounded-xl overflow-hidden">
        <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
          <AnimatedImage
            src="/public/kimtienlogo_large.png"
            alt="Banner"
            animation="fade"
            className="absolute inset-0 w-full h-full"
            imageClassName="w-full h-full object-contain p-8"
            delay={300}
          />
          <div className="relative z-10 text-white text-center p-8">
            <AnimatedSection animation="fade-up" delay={600} className="mb-4">
              <h2 className="text-3xl font-bold mb-4">Chất Lượng Hàng Đầu</h2>
              <p className="mb-6">Đối tác tin cậy cho các giải pháp in ấn của doanh nghiệp bạn</p>
            </AnimatedSection>
            <AnimatedButton
              animation="bounce"
              delay={900}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-lg"
              onClick={() => alert('Đã nhấn nút!')}
            >
              Tìm hiểu thêm
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Lưới sản phẩm với animation staggered */}
      <AnimatedSection animation="fade-up" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản phẩm mới nhất</h2>
        
        <AnimatedGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          itemClassName="h-full"
          baseDelay={150}
        >
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4 flex-grow">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs rounded-full px-2 py-0.5 mb-2">
                  {product.category}
                </span>
                <h3 className="font-medium text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">
                  Sản phẩm in ấn chất lượng cao với thiết kế hiện đại và độc đáo.
                </p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </AnimatedGrid>
      </AnimatedSection>

      {/* Các nút với animation khác nhau */}
      <AnimatedSection animation="fade-up" className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Các loại hiệu ứng nút</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton
            animation="bounce"
            delay={0}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Hiệu ứng Bounce
          </AnimatedButton>
          
          <AnimatedButton
            animation="pulse"
            delay={200}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Hiệu ứng Pulse
          </AnimatedButton>
          
          <AnimatedButton
            animation="scale"
            delay={400}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg"
          >
            Hiệu ứng Scale
          </AnimatedButton>
          
          <AnimatedButton
            animation="slide"
            delay={600}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Hiệu ứng Slide
          </AnimatedButton>
          
          <AnimatedButton
            animation="fade"
            delay={800}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Hiệu ứng Fade
          </AnimatedButton>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AnimationExample; 