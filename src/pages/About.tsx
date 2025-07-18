import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceFeatures from '../components/ServiceFeatures';
import ServiceProcess from '../components/ServiceProcess';
import { Link } from 'react-router-dom';

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

// Team members data
const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    position: 'Giám đốc điều hành',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    position: 'Giám đốc sản xuất',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Lê Văn C',
    position: 'Trưởng phòng thiết kế',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    position: 'Trưởng phòng kinh doanh',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  }
];

// Timeline data for company history
const timelineData = [
  {
    year: '2008',
    title: 'Thành lập công ty',
    description: 'Công ty được thành lập với xưởng in nhỏ tại Quận 1, TP.HCM.'
  },
  {
    year: '2012',
    title: 'Mở rộng cơ sở sản xuất',
    description: 'Mở rộng xưởng in với diện tích hơn 500m² tại Quận Bình Tân.'
  },
  {
    year: '2015',
    title: 'Đầu tư máy móc hiện đại',
    description: 'Đầu tư hệ thống máy in offset 4 màu và thiết bị hoàn thiện sau in.'
  },
  {
    year: '2018',
    title: 'Thành lập chi nhánh Hà Nội',
    description: 'Mở chi nhánh tại Hà Nội để phục vụ khách hàng khu vực miền Bắc.'
  },
  {
    year: '2022',
    title: 'Nhà máy mới',
    description: 'Khai trương nhà máy mới với diện tích 2000m² tại KCN Tân Phú.'
  }
];

const AboutPage: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner section */}
      {/* Removed redundant banner image here */}
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Banner background blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/imageHeader/project.png" 
            alt="About Banner"
            className="w-full h-full object-cover blur-md scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M0 0L40 40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Về Chúng Tôi
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto drop-shadow">
            Hơn 15 năm kinh nghiệm trong ngành in ấn, chúng tôi tự hào mang đến những sản phẩm chất lượng cao với giá thành hợp lý.
          </p>
        </div>
      </section>
      
      {/* Company intro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Công ty In Ấn Kim Tiền</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-6 text-lg">
                Công ty In Ấn Kim Tiền được thành lập từ năm 2008, là đơn vị chuyên cung cấp các dịch vụ in ấn chất lượng cao cho các doanh nghiệp trong và ngoài nước.
              </p>
              <p className="text-gray-600 mb-6">
                Với đội ngũ nhân viên giàu kinh nghiệm cùng hệ thống máy móc hiện đại, chúng tôi cam kết mang đến cho khách hàng những sản phẩm in ấn chất lượng cao, đáp ứng mọi yêu cầu khắt khe nhất.
              </p>
              <p className="text-gray-600 mb-8">
                Kim Tiền tự hào là đối tác tin cậy của nhiều doanh nghiệp lớn trong các lĩnh vực thực phẩm, mỹ phẩm, dược phẩm và nhiều ngành hàng khác.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-gray-600">Năm kinh nghiệm</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Khách hàng tin tưởng</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-600">Nhân viên chuyên nghiệp</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <p className="text-gray-600">Dự án đã hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Xưởng in" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg p-6 shadow-lg">
                <p className="text-white text-lg font-medium">
                  "Chất lượng là ưu tiên hàng đầu trong mọi sản phẩm của chúng tôi"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company history timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lịch Sử Phát Triển</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hành trình phát triển của Kim Tiền qua các cột mốc quan trọng
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="text-blue-600 font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{item.year.substring(2)}</span>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Đội Ngũ Lãnh Đạo</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Với đội ngũ lãnh đạo giàu kinh nghiệm, chúng tôi luôn nỗ lực đem đến những sản phẩm và dịch vụ tốt nhất cho khách hàng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Cơ Sở Vật Chất</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Kim Tiền sở hữu hệ thống nhà xưởng rộng lớn với máy móc thiết bị hiện đại, đảm bảo chất lượng sản phẩm tốt nhất.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <img 
                src="https://images.unsplash.com/photo-1574521091464-3c45aba9cda4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Máy in offset" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hệ thống máy in offset</h3>
                <p className="text-gray-400">
                  Hệ thống máy in offset 4 màu Heidelberg, đảm bảo chất lượng in ấn sắc nét và ổn định.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <img 
                src="https://images.unsplash.com/photo-1601691294414-a7e06f8f8bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Máy cắt giấy" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hệ thống cắt và bế</h3>
                <p className="text-gray-400">
                  Máy cắt giấy và máy bế tự động, giúp tạo ra các sản phẩm với độ chính xác cao.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
                alt="Phòng thiết kế" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Phòng thiết kế chuyên nghiệp</h3>
                <p className="text-gray-400">
                  Phòng thiết kế với đội ngũ nhân viên sáng tạo, thiết bị hiện đại đáp ứng mọi yêu cầu của khách hàng.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center" data-aos="fade-up">
            <a href="/lien-he" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Tham quan nhà máy
            </a>
          </div>
        </div>
      </section>

      {/* Tại sao lại chọn chúng tôi */}
      <ServiceFeatures />
      {/* Quy trình làm việc */}
      <ServiceProcess />
      
      {/* CTA section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
            Sẵn sàng hợp tác cùng chúng tôi?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="100">
            Liên hệ ngay để được tư vấn và báo giá cho dự án của bạn
          </p>
          <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link to="/bao-gia" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Yêu cầu báo giá
            </Link>
            <a href="/lien-he" className="px-6 py-3 bg-blue-900 text-white border border-blue-400 font-medium rounded-lg hover:bg-blue-950 transition-colors">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 