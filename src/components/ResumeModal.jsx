import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, SKILL_CATEGORIES, INITIAL_PROJECTS, ACTIVITIES, REFERENCES } from '../data/projectsData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', padding: 0 }}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-card)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Curriculum Vitae Document
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
            >
              <Printer size={15} />
              <span>Print CV</span>
            </button>
            <button 
              onClick={onClose}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div style={{ padding: '2rem', background: '#fff', color: '#0f172a', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }} className="printable-cv">
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', color: '#0f172a', margin: 0 }}>
              {PERSONAL_INFO.name}
            </h1>
            <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.2rem' }}>
              {PERSONAL_INFO.location}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#0f172a', marginTop: '0.4rem', fontWeight: 600, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span>✉ {PERSONAL_INFO.email}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>🔗 {PERSONAL_INFO.linkedin}</span>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Summary
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#334155' }}>
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9rem' }}>
                  <span>{edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#475569' }}>{edu.degree}</div>
                <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0, fontSize: '0.825rem', color: '#334155' }}>
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Technical Skills
            </h2>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} style={{ fontSize: '0.825rem', marginBottom: '0.3rem' }}>
                <strong style={{ color: '#0f172a' }}>{cat.name}:</strong> {cat.skills.join(', ')}
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              Engineering Projects
            </h2>
            {INITIAL_PROJECTS.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '0.85rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                  {proj.title} <span style={{ fontWeight: 400, color: '#64748b' }}>({proj.status})</span>
                </div>
                <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0, fontSize: '0.825rem', color: '#334155' }}>
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reference */}
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem' }}>
              References
            </h2>
            {REFERENCES.map((ref, idx) => (
              <div key={idx} style={{ fontSize: '0.85rem', color: '#334155' }}>
                <strong>{ref.name}</strong> — {ref.title}, {ref.department}, {ref.institution}
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          .printable-cv, .printable-cv * { visibility: visible; }
          .printable-cv { position: absolute; left: 0; top: 0; width: 100%; }
          .modal-overlay { background: none; }
        }
      `}</style>
    </div>
  );
}
