import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 animate-slide-in-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 animate-fade-in">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left hover:scale-105 transition-transform duration-300">
            <img 
              src="/kimtienlogo_small.png" 
              alt="Kim Tiền Logo" 
              className="h-12 w-auto animate-bounce-subtle"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700 animate-fade-in-up">Kim Tiền</span>
              <span className="text-xs text-red-500 font-medium animate-fade-in-up animation-delay-200">Kết nối thành công - Vươn tầm cao mới</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in-up animation-delay-300">
            <a href="#products" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-110 relative group">
              Sản Phẩm
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-110 relative group">
              Dịch Vụ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-110 relative group">
              Liên Hệ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-slide-in-right">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg animate-pulse-button">
              Báo Giá
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-slide-in-right">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-in-bottom">
            <nav className="flex flex-col space-y-4 animate-stagger-children">
              <a href="#products" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 animate-slide-in-left">
                Sản Phẩm
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-100">
                Dịch Vụ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-200">
                Liên Hệ
              </a>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold w-full transition-all duration-300 hover:scale-105 active:scale-95 animate-slide-in-left animation-delay-300">
                Báo Giá
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;