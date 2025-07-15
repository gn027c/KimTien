import React, { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Portfolio, { PortfolioItem } from './components/Portfolio';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import { registerServiceWorker } from './hooks/useOfflineSupport';

// Register service worker for offline support
// registerServiceWorker();

function App() {
  const [selectedProduct, setSelectedProduct] = useState<PortfolioItem | null>(null);

  const handleProductSelect = (product: PortfolioItem) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Portfolio onProductSelect={handleProductSelect} />
        <Services />
        <Partners />
        <CTA />
        <Footer />
        {selectedProduct && (
          <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;