import React from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              <Mail size={14} />
              GET IN TOUCH
            </span>
            <h2 className="section-title">Contact & Inquiries</h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
              Open for engineering research, robotics systems development, industrial automation, and graduate opportunities.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                background: '#fff'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                border: '2px solid #000',
                background: '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  EMAIL ADDRESS
                </div>
                <div style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                background: '#fff'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                border: '2px solid #000',
                background: '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  PHONE NUMBER
                </div>
                <div style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </a>

            <div 
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.85rem',
                background: '#fff'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                border: '2px solid #000',
                background: '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  LOCATION
                </div>
                <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '6rem',
          paddingTop: '1.5rem',
          borderTop: '2px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </div>

          <a 
            href="#top" 
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 700
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </a>
        </footer>

      </div>
    </section>
  );
}
