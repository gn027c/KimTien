import React, { useState, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Upload } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [priority, setPriority] = useState<{ cost: boolean; time: boolean }>({ cost: false, time: false });
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when clicking navigation links
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 min-h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src="/kimtienlogo_small.png" 
              alt="Kim Tiền Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700">Kim Tiền</span>
              <span className="text-xs text-red-500 font-medium">Kết nối thành công - Vươn tầm cao mới</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname === '/' ? 'text-blue-700' : ''}`}
            >
              Trang chủ
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link 
              to="/dich-vu"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname === '/dich-vu' ? 'text-blue-700' : ''}`}
            >
              Dịch vụ
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname === '/dich-vu' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link 
              to="/du-an"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname === '/du-an' ? 'text-blue-700' : ''}`}
            >
              Dự án
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname === '/du-an' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link 
              to="/ve-chung-toi"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname === '/ve-chung-toi' ? 'text-blue-700' : ''}`}
            >
              Về chúng tôi
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname === '/ve-chung-toi' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link 
              to="/blog"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname.startsWith('/blog') ? 'text-blue-700' : ''}`}
            >
              Blog
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link 
              to="/lien-he"
              className={`text-gray-700 hover:text-blue-700 font-medium transition-colors duration-300 relative group ${location.pathname === '/lien-he' ? 'text-blue-700' : ''}`}
            >
              Liên hệ
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${location.pathname === '/lien-he' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </nav>

          {/* CTA Buttons */}
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/bao-gia"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Báo giá
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname === '/' ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Trang chủ
              </Link>
              
              <Link 
                to="/dich-vu"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname === '/dich-vu' ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Dịch vụ
              </Link>
              
              <Link 
                to="/du-an"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname === '/du-an' ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Dự án
              </Link>
              
              <Link 
                to="/ve-chung-toi"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname === '/ve-chung-toi' ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Về chúng tôi
              </Link>
              
              <Link 
                to="/blog"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname.startsWith('/blog') ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Blog
              </Link>
              
              <Link 
                to="/lien-he"
                className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md transition-colors duration-300 ${location.pathname === '/lien-he' ? 'text-blue-700 bg-blue-50' : ''}`}
                onClick={handleNavClick}
              >
                Liên hệ
              </Link>

              {/* Mobile CTA */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/bao-gia"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full"
                >
                  Báo giá
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;