import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import ScrollToTop from './components/common/ScrollToTop';
import SEOHead from './components/common/SEOHead';
import { SkipToContent } from './components/common/AccessibilityWrapper';
import PerformanceMonitor from './components/common/PerformanceMonitor';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
import MobileOptimizer from './components/common/MobileOptimizer';

// 404 Page Component
const NotFoundPage = () => (
  <div className="min-h-screen bg-light flex items-center justify-center">
    <div className="text-center p-8">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <MobileOptimizer enableOptimizations={true} showDeviceInfo={process.env.NODE_ENV === 'development'}>
          <div className="min-h-screen bg-pattern">
            {/* SEO Head */}
            <SEOHead />
            
            {/* Accessibility: Skip to content link */}
            <SkipToContent />
            
            {/* Header */}
            <Header />
            
            {/* Main Content */}
            <main id="main-content" tabIndex={-1} className="pt-32">
              <Suspense fallback={<LoadingSpinner size="xl" text="Loading page..." />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="appointment" element={<AppointmentPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Scroll to top button */}
            <ScrollToTop />
            
            {/* Performance Monitor (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <PerformanceMonitor showMetrics={true} logToConsole={true} />
            )}
          </div>
        </MobileOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App; 