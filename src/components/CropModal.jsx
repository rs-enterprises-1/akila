import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Check, Crop } from 'lucide-react';

export default function CropModal({ imageSrc, onCropComplete, onClose, aspectRatio = 1 }) {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageObj, setImageObj] = useState(null);

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setImageObj(img);
    };
  }, [imageSrc]);

  useEffect(() => {
    if (!imageObj || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = 400;
    const height = Math.round(width / aspectRatio);
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // Center image
    ctx.translate(width / 2 + pan.x, height / 2 + pan.y);
    ctx.scale(zoom, zoom);

    const drawWidth = width;
    const drawHeight = (imgWidth, imgHeight) => (width * imgHeight) / imgWidth;

    const h = drawHeight(imageObj.width, imageObj.height);
    ctx.drawImage(imageObj, -width / 2, -h / 2, width, h);

    ctx.restore();
  }, [imageObj, zoom, pan, aspectRatio]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSaveCrop = () => {
    if (!canvasRef.current) return;
    const croppedDataUrl = canvasRef.current.toDataURL('image/jpeg', 0.88);
    onCropComplete(croppedDataUrl);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '500px', padding: '1.5rem', background: '#fff' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Crop size={18} />
            <span>Crop & Adjust Photo</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Canvas Crop Workspace */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            background: '#111', 
            padding: '1rem', 
            border: '1px solid #000',
            cursor: isDragging ? 'grabbing' : 'grab',
            overflow: 'hidden',
            userSelect: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <canvas ref={canvasRef} style={{ border: '1px solid #fff', maxWidth: '100%' }} />
        </div>

        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          Drag photo to reposition • Use slider to zoom
        </div>

        {/* Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem' }}>
          <ZoomOut size={16} />
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.05" 
            value={zoom} 
            onChange={(e) => setZoom(parseFloat(e.target.value))} 
            style={{ flex: 1 }}
          />
          <ZoomIn size={16} />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button onClick={onClose} className="btn btn-secondary" style={{ flex: 1 }}>
            Cancel
          </button>
          <button onClick={handleSaveCrop} className="btn btn-accent" style={{ flex: 1 }}>
            <Check size={16} />
            <span>Apply Crop</span>
          </button>
        </div>

      </div>
    </div>
  );
}
