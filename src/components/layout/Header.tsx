import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Maximize2, Minimize2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Get page-specific colors
  const getPageColors = () => {
    switch (location.pathname) {
      case '/':
        return {
          primary: '#0ea5e9',
          secondary: '#0284c7',
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          background: isScrolled 
            ? 'rgba(14, 165, 233, 0.95)' 
            : 'rgba(14, 165, 233, 0.15)',
          textColor: 'white',
          navTextColor: 'rgba(255, 255, 255, 0.9)'
        };
      case '/about':
        return {
          primary: '#10b981',
          secondary: '#059669',
          gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          background: isScrolled 
            ? 'rgba(16, 185, 129, 0.95)' 
            : 'rgba(16, 185, 129, 0.15)',
          textColor: 'white',
          navTextColor: 'rgba(255, 255, 255, 0.9)'
        };
      case '/services':
        return {
          primary: '#f59e0b',
          secondary: '#d97706',
          gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          background: isScrolled 
            ? 'rgba(245, 158, 11, 0.95)' 
            : 'rgba(245, 158, 11, 0.15)',
          textColor: 'white',
          navTextColor: 'rgba(255, 255, 255, 0.9)'
        };
      case '/contact':
        return {
          primary: '#8b5cf6',
          secondary: '#7c3aed',
          gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
          background: isScrolled 
            ? 'rgba(139, 92, 246, 0.95)' 
            : 'rgba(139, 92, 246, 0.15)',
          textColor: 'white',
          navTextColor: 'rgba(255, 255, 255, 0.9)'
        };
      case '/appointment':
        return {
          primary: '#ef4444',
          secondary: '#dc2626',
          gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          background: isScrolled 
            ? 'rgba(239, 68, 68, 0.95)' 
            : 'rgba(239, 68, 68, 0.15)',
          textColor: 'white',
          navTextColor: 'rgba(255, 255, 255, 0.9)'
        };
      default:
        return {
          primary: '#0ea5e9',
          secondary: '#0284c7',
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(255, 255, 255, 0.05)',
          textColor: isScrolled ? '#1e293b' : 'white',
          navTextColor: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.9)'
        };
    }
  };

  const colors = getPageColors();

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        background: colors.background,
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: isScrolled 
          ? `0 4px 32px ${colors.primary}20` 
          : '0 2px 16px rgba(0, 0, 0, 0.05)',
        borderBottom: isScrolled 
          ? `1px solid ${colors.primary}30` 
          : '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 16px' : '0 24px', 
        width: '100%' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          minHeight: isMobile ? '64px' : '80px',
          gap: isMobile ? '16px' : '24px'
        }}>
          {/* Enhanced Logo */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                width: isMobile ? '40px' : '48px',
                height: isMobile ? '40px' : '48px',
                background: colors.gradient,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isScrolled 
                  ? `0 4px 16px ${colors.primary}50` 
                  : `0 4px 20px ${colors.primary}60`,
                marginRight: isMobile ? '8px' : '12px',
                transition: 'all 0.3s ease',
                transform: isScrolled ? 'scale(1)' : 'scale(1.05)'
              }}>
                <svg style={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: '700',
                  color: colors.textColor,
                  transition: 'color 0.3s ease',
                  textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                AutoFix Pro
              </span>
                {!isMobile && (
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: isScrolled ? '#64748b' : 'rgba(255, 255, 255, 0.8)',
                    transition: 'color 0.3s ease'
                  }}>
                  Professional Auto Services
                </span>
                )}
            </div>
          </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          {!isMobile && (
            <nav style={{ 
              display: 'flex', 
              justifyContent: 'center',
              flex: 1
            }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    margin: '0 16px',
                    color: isActive(link.to) 
                      ? colors.primary 
                      : colors.navTextColor,
                    transition: 'all 0.3s ease',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: isActive(link.to) 
                      ? isScrolled 
                        ? `${colors.primary}20` 
                        : 'rgba(255, 255, 255, 0.15)'
                      : 'transparent',
                    backdropFilter: isActive(link.to) ? 'blur(10px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isScrolled 
                      ? `${colors.primary}10` 
                      : 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isActive(link.to) 
                      ? isScrolled 
                        ? `${colors.primary}20` 
                        : 'rgba(255, 255, 255, 0.15)'
                      : 'transparent';
                  }}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      background: colors.primary,
                      borderRadius: '1px',
                      boxShadow: `0 0 8px ${colors.primary}80`
                    }} />
                  )}
                </Link>
              ))}
            </nav>
          )}

          {/* Enhanced Actions */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '8px' : '12px'
          }}>
            {!isMobile && (
              <Link
                to="/appointment"
                style={{ 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 28px',
                  borderRadius: '16px',
                  background: colors.gradient,
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  boxShadow: isScrolled 
                    ? `0 4px 16px ${colors.primary}50` 
                    : `0 6px 24px ${colors.primary}60`,
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isScrolled ? 'scale(1)' : 'scale(1.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 32px ${colors.primary}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = isScrolled ? 'scale(1)' : 'scale(1.05)';
                  e.currentTarget.style.boxShadow = isScrolled 
                    ? `0 4px 16px ${colors.primary}50` 
                    : `0 6px 24px ${colors.primary}60`;
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Book Now</span>
              </Link>
            )}
            
            {!isMobile && (
              <button
                onClick={toggleFullscreen}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: isScrolled 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(255, 255, 255, 0.15)',
                  color: isScrolled ? '#334155' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: isScrolled 
                    ? '0 2px 8px rgba(0, 0, 0, 0.1)' 
                    : '0 2px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isScrolled 
                    ? 'rgba(255, 255, 255, 1)' 
                    : 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isScrolled 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '40px' : '48px',
                height: isMobile ? '40px' : '48px',
                borderRadius: '12px',
                background: isScrolled 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.15)',
                color: isScrolled ? '#334155' : 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: isScrolled 
                  ? '0 2px 8px rgba(0, 0, 0, 0.1)' 
                  : '0 2px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              {isMobileMenuOpen ? <X size={isMobile ? 20 : 24} /> : <Menu size={isMobile ? 20 : 24} />}
            </button>
        </div>
      </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: `${colors.primary}ee`,
            backdropFilter: 'blur(20px)',
            borderTop: `1px solid ${colors.primary}30`,
            boxShadow: `0 4px 32px ${colors.primary}20`,
            padding: isMobile ? '20px 16px' : '24px',
            animation: 'slideDown 0.3s ease-out',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    textDecoration: 'none',
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    fontWeight: '600',
                    color: isActive(link.to) ? colors.primary : 'white',
                    padding: isMobile ? '14px 16px' : '16px',
                    borderRadius: '12px',
                    background: isActive(link.to) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
            >
              {link.label}
              {isActive(link.to) && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: colors.primary,
                  boxShadow: `0 0 8px ${colors.primary}80`
                }} />
              )}
            </Link>
          ))}
              <Link
                to="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '14px 20px' : '16px 24px',
                  borderRadius: '16px',
                  background: colors.gradient,
                  color: 'white',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  marginTop: '8px',
                  boxShadow: `0 4px 16px ${colors.primary}50`
                }}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
          }
          
          .header-logo {
            font-size: 1.25rem;
          }
          
          .header-tagline {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;