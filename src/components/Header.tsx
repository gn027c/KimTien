import React, { useState, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Upload } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-white shadow-lg fixed w-full top-0 z-50 min-h-[80px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.img 
                src="/kimtienlogo_small.png" 
                alt="Kim Tiền Logo" 
                className="h-12 w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-700">Kim Tiền</span>
                <span className="text-xs text-red-500 font-medium">Kết nối thành công - Vươn tầm cao mới</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {[{to: '/', label: 'Trang chủ'}, {to: '/dich-vu', label: 'Dịch vụ'}, {to: '/du-an', label: 'Dự án'}, {to: '/ve-chung-toi', label: 'Về chúng tôi'}, {to: '/blog', label: 'Blog'}, {to: '/lien-he', label: 'Liên hệ'}].map((item, idx) => (
              <motion.div
                key={item.to}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                whileHover={{ scale: 1.08 }}
                style={{ display: 'inline-block' }}
              >
                <Link 
                  to={item.to}
                  className={`text-gray-700 hover:text-blue-700 font-medium relative group ${location.pathname === item.to || (item.to === '/blog' && location.pathname.startsWith('/blog')) ? 'text-blue-700' : ''}`}
                >
                  {item.label}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-700"
                    animate={{ width: location.pathname === item.to || (item.to === '/blog' && location.pathname.startsWith('/blog')) ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'block' }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.06 }}
          >
            <Link 
              to="/bao-gia"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-md"
            >
              Báo giá
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.92 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden pb-6 pt-2 border-t border-gray-100"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <nav className="flex flex-col space-y-4">
              {[{to: '/', label: 'Trang chủ'}, {to: '/dich-vu', label: 'Dịch vụ'}, {to: '/du-an', label: 'Dự án'}, {to: '/ve-chung-toi', label: 'Về chúng tôi'}, {to: '/blog', label: 'Blog'}, {to: '/lien-he', label: 'Liên hệ'}].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className={`text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded-md ${location.pathname === item.to || (item.to === '/blog' && location.pathname.startsWith('/blog')) ? 'text-blue-700 bg-blue-50' : ''}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile CTA */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/bao-gia"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium w-full shadow-md"
                >
                  Báo giá
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;