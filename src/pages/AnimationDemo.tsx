import React from 'react';
import AnimationExample from '../components/AnimationExample';
import AnimatedSection from '../components/AnimatedSection';

const AnimationDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-down" duration={1000} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hiệu Ứng Cuộn Trang
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Các ví dụ về hiệu ứng mờ dần và xuất hiện từ từ khi người dùng cuộn trang
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300} className="mt-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-sm">
                Cuộn xuống để xem các ví dụ
              </p>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full"
            style={{ height: '60px' }}
          >
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45,0.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              className="fill-gray-50"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Intro section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-up" className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu về các hiệu ứng</h2>
            <p className="text-gray-600">
              Các component animation này sử dụng hooks tùy chỉnh để tạo hiệu ứng mượt mà khi người dùng cuộn trang.
              Hiệu ứng chỉ xuất hiện một lần khi phần tử xuất hiện trong viewport và hoàn toàn tương thích với Tailwind CSS.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-left">
              <h3 className="font-bold text-blue-800 mb-2">Các tính năng chính:</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Hiệu ứng mượt mà, không bị giật</li>
                <li>Chỉ xuất hiện một lần khi cuộn tới</li>
                <li>Tương thích hoàn toàn với Tailwind CSS</li>
                <li>Nhiều loại hiệu ứng khác nhau</li>
                <li>Có thể tùy chỉnh thời gian và độ trễ</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Main example */}
      <AnimationExample />
      
      {/* How to use section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cách sử dụng</h2>
            <p className="text-gray-600 mb-8">
              Các component animation có thể dễ dàng tích hợp vào dự án của bạn. Dưới đây là một số ví dụ:
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">AnimatedSection</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm mb-4 overflow-auto">
                  <pre>{`<AnimatedSection 
  animation="fade-up"
  delay={200}
  duration={800}
  className="your-classes"
>
  <h2>Tiêu đề của bạn</h2>
  <p>Nội dung của bạn</p>
</AnimatedSection>`}</pre>
                </div>
                <p className="text-gray-600 text-sm">
                  Bọc bất kỳ phần tử nào trong AnimatedSection để thêm hiệu ứng khi cuộn.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">AnimatedGrid</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm mb-4 overflow-auto">
                  <pre>{`<AnimatedGrid
  className="grid grid-cols-3 gap-4"
  itemClassName="your-item-classes"
  baseDelay={100}
>
  {items.map(item => (
    <YourItemComponent key={item.id} />
  ))}
</AnimatedGrid>`}</pre>
                </div>
                <p className="text-gray-600 text-sm">
                  Hiển thị các phần tử trong lưới với hiệu ứng xuất hiện tuần tự.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <section className="bg-gray-800 text-white py-8 px-4 text-center">
        <AnimatedSection animation="fade-up">
          <p>Tạo bởi Claude cho website Kim Tiền Printing Services</p>
          <p className="text-gray-400 text-sm mt-2">Sử dụng React, TypeScript và Tailwind CSS</p>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default AnimationDemo; 