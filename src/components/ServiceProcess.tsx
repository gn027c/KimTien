import React, { useState } from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Các bước trong quy trình làm việc
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Tư vấn & Báo giá',
      description: 'Tư vấn chi tiết về sản phẩm, chất liệu, kích thước và cung cấp báo giá minh bạch.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Thiết kế mẫu',
      description: 'Đội ngũ thiết kế chuyên nghiệp sẽ tạo ra mẫu thiết kế theo yêu cầu của bạn.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Duyệt mẫu',
      description: 'Bạn xem xét và phê duyệt mẫu thiết kế hoặc yêu cầu chỉnh sửa nếu cần.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Sản xuất',
      description: 'Tiến hành in ấn sản phẩm với công nghệ hiện đại và quy trình kiểm soát chất lượng.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
    },
    {
      number: 5,
      title: 'Kiểm tra chất lượng',
      description: 'Kiểm tra kỹ lưỡng từng sản phẩm để đảm bảo đạt tiêu chuẩn chất lượng cao nhất.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      ),
    },
    {
      number: 6,
      title: 'Giao hàng',
      description: 'Đóng gói cẩn thận và giao hàng đúng hẹn đến địa chỉ của bạn.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quy Trình Làm Việc</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Quy trình làm việc chuyên nghiệp, minh bạch từ khâu tư vấn đến giao hàng
          </p>
        </div>
        
        {/* Desktop version - Horizontal steps with icon instead of number */}
        <div className="hidden lg:block mb-16">
          {/* Steps container */}
          <div className="relative">
            {/* Top row - Steps */}
            <div className="flex justify-between items-start relative mb-8">
              {/* Connecting line */}
              <div className="absolute top-7 left-0 right-0 h-1 bg-gray-200 z-0"></div>
              
              {/* Steps */}
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    index === activeStep ? 'transform scale-110' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step circle with icon */}
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                      index === activeStep 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : index < activeStep 
                          ? 'bg-blue-100 text-blue-600 border-2 border-blue-200' 
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                    }`}
                  >
                    {/* Hiển thị icon thay vì số */}
                    <span className="w-8 h-8 flex items-center justify-center">
                      {step.icon}
                    </span>
                  </div>
                  
                  {/* Step title */}
                  <h3 className={`mt-3 font-medium text-center max-w-[100px] text-sm ${
                    index === activeStep ? 'text-blue-600 font-bold' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Step description - Using old design */}
            <div className="mt-10">
              <div className="max-w-2xl mx-auto flex items-center gap-5 bg-white rounded-xl shadow-md p-6 border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 text-white text-xl font-bold shadow">
                    {activeStep + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">{steps[activeStep].title}</h3>
                  <p className="text-gray-600 text-base">{steps[activeStep].description}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className={`px-5 py-2 border rounded-md transition-all duration-300 ${
                  activeStep === 0 
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow'
                }`}
                disabled={activeStep === 0}
              >
                Bước trước
              </button>
              <button 
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className={`px-5 py-2 rounded-md transition-all duration-300 ${
                  activeStep === steps.length - 1 
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow'
                }`}
                disabled={activeStep === steps.length - 1}
              >
                Bước tiếp
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile version - Vertical steps */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
            
            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start cursor-pointer ${
                    index === activeStep ? 'opacity-100' : 'opacity-80'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step circle */}
                  <div 
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 mr-4 ${
                      index === activeStep 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : index < activeStep 
                          ? 'bg-blue-100 text-blue-600 border-2 border-blue-200' 
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                    }`}
                  >
                    <span className="font-bold">{step.number}</span>
                  </div>
                  
                  {/* Step content */}
                  <div className={`pt-1.5 ${index === activeStep ? 'flex-1' : ''}`}>
                    <h3 className={`font-medium mb-1 ${
                      index === activeStep ? 'text-blue-600 font-bold' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    {index === activeStep && (
                      <div className="mt-2 p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className={`px-4 py-2 border rounded-md text-sm ${
                activeStep === 0 
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              disabled={activeStep === 0}
            >
              Trước
            </button>
            <button 
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className={`px-4 py-2 rounded-md text-sm ${
                activeStep === steps.length - 1 
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={activeStep === steps.length - 1}
            >
              Tiếp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess; 