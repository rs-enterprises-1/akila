import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    setCurrentMediaIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const assignedMedia = (project.media || []).filter((item) => item.url && !String(item.url).startsWith('data:'));
  const gallery = assignedMedia.length > 0 ? assignedMedia : (project.media || []);
  const currentMedia = gallery[currentMediaIndex] || null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: 0 }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '3px double var(--border-color)',
          background: 'var(--bg-primary)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
              <span className="badge badge-accent">{project.category}</span>
              <span className="badge badge-emerald">
                {project.status}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{
              background: 'var(--text-primary)',
              border: 'none',
              color: 'var(--bg-primary)',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontWeight: 700
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          {gallery.length > 0 && currentMedia ? (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                position: 'relative',
                border: '2px solid #000',
                background: '#000',
                minHeight: '340px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {currentMedia.type === 'video' ? (
                  currentMedia.url.includes('youtube.com') || currentMedia.url.includes('youtu.be') ? (
                    <iframe 
                      src={currentMedia.url.replace('watch?v=', 'embed/')} 
                      title="Project Video"
                      style={{ width: '100%', height: '420px', border: 'none' }}
                      allowFullScreen
                    />
                  ) : (
                    <video controls style={{ width: '100%', maxHeight: '450px' }}>
                      <source src={currentMedia.url} />
                      Your browser does not support video playback.
                    </video>
                  )
                ) : (
                  <img 
                    src={currentMedia.url} 
                    alt={currentMedia.caption || project.title}
                    style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'contain' }} 
                  />
                )}

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentMediaIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: '#000',
                        border: '1px solid #fff',
                        color: '#fff',
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    <button
                      onClick={() => setCurrentMediaIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: '#000',
                        border: '1px solid #fff',
                        color: '#fff',
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div style={{ 
                marginTop: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                <span>
                  {currentMedia.caption || `PLATE ${currentMediaIndex + 1} OF ${gallery.length}`}
                </span>
              </div>
            </div>
          ) : null}

          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              SYSTEM ARCHITECTURE & ANALYSIS
            </h3>
            <p style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--text-primary)', 
              whiteSpace: 'pre-line',
              lineHeight: 1.7,
              fontSize: '0.95rem'
            }}>
              {project.fullDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
