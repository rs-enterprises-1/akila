import React from 'react';
import { EDUCATION } from '../data/projectsData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              <GraduationCap size={14} />
              ACADEMIC BACKGROUND
            </span>
            <h2 className="section-title">Education & Honors</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EDUCATION.map((edu, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{
                  padding: '2.25rem',
                  background: '#fff',
                  borderLeft: '6px solid #000'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {edu.institution}
                </h3>
                
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {edu.degree}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {edu.details.map((detail, dIdx) => (
                    <li 
                      key={dIdx} 
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem'
                      }}
                    >
                      <Award size={16} style={{ color: '#000', flexShrink: 0 }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
