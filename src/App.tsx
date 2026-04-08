/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import SellerCenter from './pages/SellerCenter';
import Checkout from './pages/Checkout';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'search':
        return <SearchResults onProductClick={handleProductClick} />;
      case 'detail':
        return <ProductDetail productId={selectedProductId || '7'} />;
      case 'seller':
        return <SellerCenter />;
      case 'checkout':
        return <Checkout />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'seller' && <Navbar onNavigate={navigateTo} currentPage={currentPage} />}
      <div className="flex-1">
        {renderPage()}
      </div>
      {currentPage !== 'seller' && <Footer />}
    </div>
  );
}
