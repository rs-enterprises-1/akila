import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [project?.id]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  if (!project) return null;

  const assignedMedia = (project.media || []).filter((item) => item.url && !String(item.url).startsWith('data:'));
  const gallery = assignedMedia.length > 0 ? assignedMedia : (project.media || []);
  const photos = gallery.filter((item) => item.type !== 'video');
  const videos = gallery.filter((item) => item.type === 'video');
  const lightboxPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrevPhoto = () => {
    setLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };
  const showNextPhoto = () => {
    setLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

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
            aria-label="Close project"
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
          {photos.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.85rem',
              marginBottom: '2rem'
            }}>
              {photos.map((photo, index) => (
                <div
                  key={`${photo.url}-${index}`}
                  style={{
                    position: 'relative',
                    border: '2px solid #000',
                    background: '#111',
                    overflow: 'hidden',
                    aspectRatio: '4 / 3'
                  }}
                >
                  <img
                    src={photo.url}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label="Enlarge photo"
                    style={{
                      position: 'absolute',
                      right: '8px',
                      bottom: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: '#000',
                      color: '#fff',
                      border: '1px solid #fff',
                      padding: '0.4rem 0.55rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      cursor: 'pointer'
                    }}
                  >
                    <Maximize2 size={13} />
                    Enlarge
                  </button>
                </div>
              ))}
            </div>
          )}

          {videos.map((video, index) => (
            <div
              key={`${video.url}-${index}`}
              style={{
                marginBottom: '2rem',
                border: '2px solid #000',
                background: '#000'
              }}
            >
              {video.url.includes('youtube.com') || video.url.includes('youtu.be') ? (
                <iframe
                  src={video.url.replace('watch?v=', 'embed/')}
                  title="Project Video"
                  style={{ width: '100%', height: '420px', border: 'none' }}
                  allowFullScreen
                />
              ) : (
                <video controls style={{ width: '100%', maxHeight: '450px' }}>
                  <source src={video.url} />
                  Your browser does not support video playback.
                </video>
              )}
            </div>
          ))}

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

      {lightboxPhoto && (
        <div
          onClick={(event) => {
            event.stopPropagation();
            closeLightbox();
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close enlarged photo"
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              background: '#fff',
              border: 'none',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevPhoto();
                }}
                aria-label="Previous photo"
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#000',
                  border: '1px solid #fff',
                  color: '#fff',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextPhoto();
                }}
                aria-label="Next photo"
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#000',
                  border: '1px solid #fff',
                  color: '#fff',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <img
            src={lightboxPhoto.url}
            alt=""
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              border: '2px solid #fff',
              background: '#000'
            }}
          />
        </div>
      )}
    </div>
  );
}
