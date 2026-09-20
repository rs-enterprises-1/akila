import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/projectsData';
import { ArrowRight, Award, Camera, User, Crop } from 'lucide-react';
import CropModal from './CropModal';

export default function Hero() {
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('akila_profile_image') || null;
  });

  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [cropImageSrc, setCropImageSrc] = useState(null);

  useEffect(() => {
    if (profileImage) {
      localStorage.setItem('akila_profile_image', profileImage);
    }
  }, [profileImage]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setCropImageSrc(event.target.result);
      setIsEditingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (imageUrlInput.trim()) {
      setCropImageSrc(imageUrlInput.trim());
      setImageUrlInput('');
      setIsEditingImage(false);
    }
  };

  const handleCropComplete = (croppedImage) => {
    setProfileImage(croppedImage);
    setCropImageSrc(null);
  };

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
                boxShadow: '6px 6px 0px #000',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => setIsEditingImage(!isEditingImage)}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                overflow: 'hidden',
                background: 'var(--bg-surface)',
                border: '1px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt={PERSONAL_INFO.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-primary)', padding: '1rem' }}>
                    <User size={88} style={{ marginBottom: '0.75rem', color: '#000' }} />
                    <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Click to Attach Photo
                    </div>
                  </div>
                )}

                {/* Camera Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  background: '#000',
                  color: '#fff',
                  width: '42px',
                  height: '42px',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff'
                }}>
                  <Camera size={20} />
                </div>
              </div>
            </div>

            {/* Image Upload Input Box */}
            {isEditingImage && (
              <div className="card" style={{
                marginTop: '1.25rem',
                padding: '1.25rem',
                maxWidth: '350px',
                width: '100%',
                background: '#fff'
              }}>
                <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-serif)', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  Upload Photo
                </h4>

                <label style={{ display: 'block', fontSize: '0.775rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  Option A: Select Image File
                </label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{
                    width: '100%',
                    fontSize: '0.8rem',
                    marginBottom: '0.85rem'
                  }}
                />

                <form onSubmit={handleUrlSubmit}>
                  <label style={{ display: 'block', fontSize: '0.775rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                    Option B: Image Web URL
                  </label>
                  <input 
                    type="text" 
                    placeholder="https://example.com/photo.jpg"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      background: '#fff',
                      border: '1px solid #000',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '0.75rem'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button type="submit" className="btn btn-accent btn-sm" style={{ flex: 1 }}>
                      Save Photo
                    </button>
                    {profileImage && (
                      <button 
                        type="button" 
                        onClick={() => { setProfileImage(null); localStorage.removeItem('akila_profile_image'); setIsEditingImage(false); }}
                        className="btn btn-secondary btn-sm"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

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

      {cropImageSrc && (
        <CropModal 
          imageSrc={cropImageSrc}
          aspectRatio={1}
          onCropComplete={handleCropComplete}
          onClose={() => setCropImageSrc(null)}
        />
      )}
    </section>
  );
}
