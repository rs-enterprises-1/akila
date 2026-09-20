import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projectsData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.2s ease',
        background: scrolled ? 'var(--bg-glass)' : 'var(--bg-primary)',
        borderBottom: '2px solid var(--border-color)',
        padding: '0.9rem 0'
      }}
    >
      <div className="container">
        
        {/* Main Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo / Brand Name */}
          <a 
            href="#top" 
            style={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem' 
            }}
          >
            <div style={{
              width: '38px',
              height: '38px',
              border: '2px solid var(--border-color)',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.1rem',
              fontFamily: 'var(--font-serif)'
            }}>
              AS
            </div>
            <div>
              <span style={{ 
                fontWeight: 800, 
                fontSize: '1.15rem', 
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                display: 'block',
                lineHeight: 1.1,
                fontFamily: 'var(--font-serif)'
              }}>
                {PERSONAL_INFO.name}
              </span>
              <span style={{ 
                fontSize: '0.75rem', 
                color: 'var(--text-muted)',
                display: 'block',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)'
              }}>
                Mechatronics Systems Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
            <a href="#projects" className="nav-link">PROJECTS</a>
            <a href="#education" className="nav-link">EDUCATION</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="btn btn-primary btn-sm"
            >
              <Mail size={14} />
              <span>Get In Touch</span>
            </a>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                padding: '0.4rem',
                cursor: 'pointer',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 0.08em;
          transition: border-bottom 0.2s ease;
          border-bottom: 2px solid transparent;
        }
        .nav-link:hover {
          border-bottom: 2px solid #000;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
