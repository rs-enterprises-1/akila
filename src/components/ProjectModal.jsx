import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Video, Plus, Trash2, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, initialTab = 'details', onClose, onUpdateProjectMedia }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'details' | 'addMedia'
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // New media inputs
  const [mediaType, setMediaType] = useState('image'); // 'image' | 'video'
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaCaption, setMediaCaption] = useState('');
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    if (project) {
      setActiveTab(initialTab || 'details');
      setCurrentMediaIndex(0);
      setUploadError('');
    }
  }, [project?.id, initialTab]);

  if (!project) return null;

  const currentMedia = project.media && project.media.length > 0 ? project.media[currentMediaIndex] : null;

  // Resize image file to crisp lightweight JPEG to prevent storage quota crash
  const compressImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1200;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
          resolve({
            type: 'image',
            url: compressedDataUrl,
            caption: file.name
          });
        };
        img.onerror = () => {
          resolve({ type: 'image', url: event.target.result, caption: file.name });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle multiple local file upload at once safely
  const handleMultipleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    setUploadError('');

    // Read and compress all selected files concurrently
    const filePromises = files.map((file) => compressImageFile(file));

    Promise.all(filePromises)
      .then((newMediaItems) => {
        const updatedMedia = [...(project.media || []), ...newMediaItems];
        onUpdateProjectMedia(project.id, updatedMedia);
        
        // Reset inputs and jump to gallery view
        setMediaUrl('');
        setMediaCaption('');
        setActiveTab('details');
        setCurrentMediaIndex(updatedMedia.length - newMediaItems.length);
      })
      .catch((err) => {
        setUploadError('Failed to process some image files. Please try fewer images at once.');
      });
  };

  // Handle local video file upload
  const handleLocalVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setUploadError('Video file size exceeds 50MB. Please select a smaller video file or paste a video URL.');
      return;
    }

    setUploadError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const newMediaItem = {
        type: 'video',
        url: event.target.result,
        caption: file.name
      };

      const updatedMedia = [...(project.media || []), newMediaItem];
      onUpdateProjectMedia(project.id, updatedMedia);
      
      setActiveTab('details');
      setCurrentMediaIndex(updatedMedia.length - 1);
    };
    reader.readAsDataURL(file);
  };

  const handleAddMediaSubmit = (e) => {
    e.preventDefault();
    if (!mediaUrl.trim()) {
      setUploadError('Please provide an image/video file or URL');
      return;
    }

    const newMediaItem = {
      type: mediaType,
      url: mediaUrl,
      caption: mediaCaption || (mediaType === 'image' ? 'Uploaded Project Photo' : 'Project Demo Video')
    };

    const updatedMedia = [...(project.media || []), newMediaItem];
    onUpdateProjectMedia(project.id, updatedMedia);
    
    // Reset form
    setMediaUrl('');
    setMediaCaption('');
    setUploadError('');
    setActiveTab('details');
    setCurrentMediaIndex(updatedMedia.length - 1);
  };

  const handleRemoveMedia = (indexToRemove) => {
    if (window.confirm('Are you sure you want to remove this media item?')) {
      const updatedMedia = project.media.filter((_, idx) => idx !== indexToRemove);
      onUpdateProjectMedia(project.id, updatedMedia);
      if (currentMediaIndex >= updatedMedia.length) {
        setCurrentMediaIndex(Math.max(0, updatedMedia.length - 1));
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: 0 }}
      >
        {/* Header Bar */}
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

        {/* Modal Navigation Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.75rem 1.75rem',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <button
            onClick={() => setActiveTab('details')}
            className={`btn btn-sm ${activeTab === 'details' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Full Story & Gallery
          </button>

          <button
            onClick={() => setActiveTab('addMedia')}
            className={`btn btn-sm ${activeTab === 'addMedia' ? 'btn-accent' : 'btn-secondary'}`}
            style={{ gap: '0.4rem' }}
          >
            <Plus size={16} />
            <span>Attach Photos / Videos</span>
          </button>
        </div>

        {/* Tab Body */}
        <div style={{ padding: '2rem' }}>
          
          {activeTab === 'details' && (
            <div>
              {/* Media Carousel / Player Showcase */}
              {project.media && project.media.length > 0 ? (
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

                    {/* Navigation Controls */}
                    {project.media.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentMediaIndex((prev) => (prev === 0 ? project.media.length - 1 : prev - 1))}
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
                          onClick={() => setCurrentMediaIndex((prev) => (prev === project.media.length - 1 ? 0 : prev + 1))}
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

                  {/* Caption & Thumbnails */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem'
                  }}>
                    <span>
                      {currentMedia.caption || `PLATE ${currentMediaIndex + 1} OF ${project.media.length}`}
                    </span>

                    <button 
                      onClick={() => handleRemoveMedia(currentMediaIndex)}
                      className="btn btn-sm"
                      style={{ background: '#fff', color: '#000', border: '1px solid #000', padding: '0.2rem 0.6rem' }}
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: '2.5rem',
                  textAlign: 'center',
                  background: '#fff',
                  border: '1px dashed #000',
                  marginBottom: '2rem'
                }}>
                  <ImageIcon size={36} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>No images or videos attached to this project entry.</p>
                  <button 
                    onClick={() => setActiveTab('addMedia')} 
                    className="btn btn-accent btn-sm"
                    style={{ marginTop: '0.75rem' }}
                  >
                    <Plus size={15} />
                    <span>Attach First Photo / Video</span>
                  </button>
                </div>
              )}

              {/* Detailed Description */}
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
          )}

          {/* Add Media Tab */}
          {activeTab === 'addMedia' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Attach Media to "{project.title}"
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Select an image file from your computer or paste a direct video link.
              </p>

              {uploadError && (
                <div style={{
                  padding: '0.75rem 1rem',
                  background: '#fff',
                  border: '1px solid #000',
                  color: '#000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem'
                }}>
                  <AlertCircle size={16} />
                  <span>{uploadError}</span>
                </div>
              )}

              <form onSubmit={handleAddMediaSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Type Selection */}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    MEDIA TYPE
                  </label>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setMediaType('image')}
                      className={`btn btn-sm ${mediaType === 'image' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1 }}
                    >
                      <ImageIcon size={16} />
                      <span>Photo / Image</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaType('video')}
                      className={`btn btn-sm ${mediaType === 'video' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1 }}
                    >
                      <Video size={16} />
                      <span>Video Demo</span>
                    </button>
                  </div>
                </div>

                {/* Local File Upload Dropzone */}
                {mediaType === 'image' && (
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      OPTION A: SELECT MULTIPLE PHOTOS FROM COMPUTER (HOLD CTRL / SHIFT TO SELECT MULTIPLE)
                    </label>
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      onChange={handleMultipleFileUpload}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        background: '#fff',
                        border: '1px solid #000',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem'
                      }}
                    />
                  </div>
                )}

                {/* Local Video File Dropzone */}
                {mediaType === 'video' && (
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      OPTION A: SELECT LOCAL VIDEO FILE FROM COMPUTER (.MP4, .WEBM, .MOV)
                    </label>
                    <input 
                      type="file" 
                      accept="video/*"
                      onChange={handleLocalVideoUpload}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        background: '#fff',
                        border: '1px solid #000',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem'
                      }}
                    />
                  </div>
                )}

                {/* Direct URL Input */}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    {mediaType === 'image' ? 'OPTION B: IMAGE WEB URL' : 'VIDEO URL (YOUTUBE OR MP4)'}
                  </label>
                  <input 
                    type="text" 
                    placeholder={mediaType === 'image' ? 'https://example.com/photo.jpg' : 'https://www.youtube.com/watch?v=...'}
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#fff',
                      border: '1px solid #000',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                {/* Caption Input */}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    CAPTION / TITLE
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., SolidWorks Assembly Render"
                    value={mediaCaption}
                    onChange={(e) => setMediaCaption(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#fff',
                      border: '1px solid #000',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('details')}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent"
                  >
                    <Plus size={16} />
                    <span>Save to Entry</span>
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
