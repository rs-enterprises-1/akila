import React from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { ArrowRight, Award } from 'lucide-react';

const PROFILE_IMAGE = '/images/profile.jpeg';

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Professional Header Tag */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.35rem 0.85rem',
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.775rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}
        >
          <span>MECHATRONIC SYSTEMS ENGINEERING • UNIVERSITY OF MORATUWA</span>
        </div>

        {/* Front Page Layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Main Story Headline & Summary */}
          <div style={{ flex: '1 1 520px', minWidth: '300px' }}>
            
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase'
            }}>
              Mechatronic Systems <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Engineer
              </span>
            </h1>

            <div className="newspaper-rule-thin" />

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              lineHeight: 1.75,
              marginBottom: '2.25rem',
              width: '100%'
            }}>
              {PERSONAL_INFO.summary}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                <span>Explore Engineering Projects</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Square Photo Frame */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div 
              style={{
                position: 'relative',
                width: '350px',
                height: '350px',
                maxWidth: '88vw',
                maxHeight: '88vw',
                borderRadius: '0px',
                padding: '8px',
                border: '2px solid #000',
                background: '#fff',
                boxShadow: '6px 6px 0px #000'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                overflow: 'hidden',
                background: 'var(--bg-surface)',
                border: '1px solid #000',
                position: 'relative'
              }}>
                <img 
                  src={PROFILE_IMAGE} 
                  alt={PERSONAL_INFO.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 18%',
                    transform: 'scale(1.22)',
                    transformOrigin: 'center 22%'
                  }}
                />
              </div>
            </div>

          </div>

        </div>

        <div className="newspaper-rule" />

        {/* Key Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{
                padding: '1.5rem',
                background: '#fff',
                borderLeft: '4px solid #000'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                {stat.value}
              </div>
              <div style={{ 
                marginTop: '0.6rem', 
                fontSize: '0.8rem', 
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Award size={14} />
                <span>{stat.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
