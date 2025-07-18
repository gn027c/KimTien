import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { registerServiceWorker } from './hooks/useOfflineSupport';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButtonAnimated from './components/BackToTopButtonAnimated';

// Page imports
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import AnimationDemo from './pages/AnimationDemo';
import TermsOfUsePage from './pages/TermsOfUse';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import QuotePage from './pages/Quote';
import ServiceDetailPage from './pages/ServiceDetail';
import ChinhSachPage from './pages/Policy';

// Register service worker for offline support
// registerServiceWorker();

function App() {
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();

  // Listen for events to open the quote modal
  useEffect(() => {
    const handleOpenQuoteModal = (e: CustomEvent) => {
      setSelectedProduct(e.detail?.product);
    };

    window.addEventListener('openQuoteModal' as any, handleOpenQuoteModal as any);
    return () => window.removeEventListener('openQuoteModal' as any, handleOpenQuoteModal as any);
  }, []);

  return (
    <Router>
    <ErrorBoundary>
        <ScrollToTop /> {/* Thêm ScrollToTop component */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[80px]"> {/* Added padding-top to account for fixed header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dich-vu" element={<ServicesPage />} />
              <Route path="/du-an" element={<ProjectsPage />} />
              <Route path="/ve-chung-toi" element={<AboutPage />} />
              <Route path="/lien-he" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/animation-demo" element={<AnimationDemo />} />
              <Route path="/thoa-thuan-su-dung" element={<TermsOfUsePage />} />
              <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicyPage />} />
              <Route path="/bao-gia" element={<QuotePage />} />
              <Route path="/dich-vu/:id" element={<ServiceDetailPage />} />
              <Route path="/chinh-sach" element={<ChinhSachPage />} />
              
              {/* Policy/Info pages */}
              <Route 
                path="/huong-dan-dat-hang" 
                element={
                  <div className="max-w-4xl mx-auto py-20 px-4">
                    <h1 className="text-3xl font-bold mb-6 text-blue-700">Hướng dẫn đặt hàng online</h1>
                    <div className="prose prose-lg max-w-none">(Nội dung sẽ được cập nhật sau)</div>
                  </div>
                } 
              />
              <Route 
                path="/giao-hang-van-chuyen" 
                element={
                  <div className="max-w-4xl mx-auto py-20 px-4">
                    <h1 className="text-3xl font-bold mb-6 text-blue-700">Giao hàng và Vận Chuyển</h1>
                    <div className="prose prose-lg max-w-none">(Nội dung sẽ được cập nhật sau)</div>
                  </div>
                } 
              />
              <Route 
                path="/chinh-sach-bao-hanh" 
                element={
                  <div className="max-w-4xl mx-auto py-20 px-4">
                    <h1 className="text-3xl font-bold mb-6 text-blue-700">Chính sách bảo hành</h1>
                    <div className="prose prose-lg max-w-none">(Nội dung sẽ được cập nhật sau)</div>
                  </div>
                } 
              />
              <Route 
                path="*" 
                element={
                  <div className="flex items-center justify-center h-[70vh] flex-col">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Trang bạn tìm kiếm không tồn tại</p>
                    <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      Về trang chủ
                    </a>
                  </div>
                } 
              />
          </Routes>
          </main>
        <Footer />
          
          {/* Back to Top Button */}
          <BackToTopButtonAnimated 
            threshold={400} 
            variant="circle" 
            color="blue"
            showText={false}
          />
      </div>
    </ErrorBoundary>
    </Router>
  );
}

export default App;