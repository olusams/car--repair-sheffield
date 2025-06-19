import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Maximize2, Minimize2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-200/60' 
        : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent'
    }`}>
      {/* Enhanced Background with Professional Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 backdrop-blur-md"></div>
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl' 
          : 'bg-gradient-to-b from-black/30 via-black/15 to-transparent'
      }`}></div>
      
      {/* Professional Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-yellow-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Professional Dot Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isScrolled ? 'opacity-10' : 'opacity-20'
      }`}>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '25px 25px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between py-5">
          {/* Enhanced Professional Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-150"></div>
            </div>
            <div className="flex flex-col">
              <span className={`logo-text text-2xl transition-all duration-500 group-hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-900 drop-shadow-professional' 
                  : 'text-white text-shadow-header-lg'
              }`}>
                AutoFix Pro
              </span>
              <span className={`logo-subtitle transition-all duration-500 ${
                isScrolled 
                  ? 'text-gray-600' 
                  : 'text-white/90 text-shadow-header'
              }`}>
                Professional Auto Services
              </span>
            </div>
          </Link>

          {/* Enhanced Professional Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Our Services' },
              { to: '/contact', label: 'Contact' },
              { to: '/appointment', label: 'Book Now' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-professional relative transition-all duration-500 hover:scale-105 header-focus ${
                  isActive(link.to)
                    ? isScrolled 
                      ? 'text-blue-600 header-text-bold' 
                      : 'text-yellow-300 header-text-bold text-shadow-header'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 header-text' 
                      : 'text-white hover:text-yellow-300 header-text text-shadow-header'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.to) && (
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  }`}></div>
                )}
                <div className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-300 -z-10 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50' 
                    : 'bg-gradient-to-r from-white/10 to-white/5'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Professional CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={toggleFullscreen}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-5 h-5" />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-5 h-5" />
                  <span>View Fullscreen</span>
                </>
              )}
            </button>
          </div>

          {/* Enhanced Professional Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isScrolled 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-lg' 
                : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white shadow-xl'
            }`}
          >
            <div className="relative w-7 h-7">
              <span className={`absolute left-0 w-7 h-0.5 bg-current transition-all duration-500 rounded-full ${
                isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-2'
              }`}></span>
              <span className={`absolute left-0 w-7 h-0.5 bg-current transition-all duration-500 rounded-full top-3.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute left-0 w-7 h-0.5 bg-current transition-all duration-500 rounded-full ${
                isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Professional Mobile Menu */}
        <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 border-t border-gray-200/50">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Our Services' },
              { to: '/contact', label: 'Contact' },
              { to: '/appointment', label: 'Book Now' }
            ].map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-4 px-6 rounded-2xl mobile-nav-text transition-all duration-500 hover:translate-x-3 ${
                  isActive(link.to)
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500' 
                      : 'text-yellow-300 bg-white/20 border-l-4 border-yellow-400'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    isActive(link.to)
                      ? isScrolled 
                        ? 'bg-blue-500' 
                        : 'bg-yellow-400'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}></div>
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-6">
              <button
                onClick={toggleFullscreen}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-5 h-5" />
                    <span>Exit Fullscreen</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-5 h-5" />
                    <span>View Fullscreen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Professional Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-700 shadow-lg" 
        style={{ 
          width: '100%',
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left'
        }}
      />
    </header>
  );
};

export default Header;