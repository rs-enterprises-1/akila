import React from 'react';
import { FolderGit2, ArrowUpRight, Image as ImageIcon } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            ENGINEERING PORTFOLIO
          </span>
          <h2 className="section-title">Featured Mechatronic Projects</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project) => {
            const realPhotos = (project.media || []).filter((item) => item.url && !item.url.startsWith('data:'));
            const coverImage = realPhotos[0]?.url || project.media?.[0]?.url || null;

            return (
              <div 
                key={project.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  background: '#fff'
                }}
              >
                <div>
                  <div 
                    onClick={() => onSelectProject(project)}
                    style={{
                      height: '220px',
                      background: 'var(--bg-surface)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    {coverImage ? (
                      coverImage.match(/\.(mp4|webm|mov)(\?|$)/i) ? (
                        <video
                          src={coverImage}
                          muted
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <img 
                          src={coverImage} 
                          alt={project.title} 
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      )
                    ) : (
                      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        <ImageIcon size={40} />
                      </div>
                    )}

                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className={`badge ${project.status === 'Completed' ? 'badge-accent' : 'badge'}`}>
                        {project.status}
                      </span>
                    </div>

                    <div style={{ position: 'absolute', bottom: '12px', right: '12px' }}>
                      <span className="badge" style={{ background: '#fff', border: '1px solid #000' }}>
                        <ImageIcon size={13} />
                        <span>{realPhotos.length} Photos</span>
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                      {project.category}
                    </div>

                    <h3 
                      onClick={() => onSelectProject(project)}
                      style={{ 
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem', 
                        fontWeight: 800, 
                        color: 'var(--text-primary)', 
                        marginBottom: '0.75rem',
                        cursor: 'pointer',
                        lineHeight: 1.25
                      }}
                    >
                      {project.title}
                    </h3>

                    <p style={{ 
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.925rem', 
                      color: 'var(--text-secondary)', 
                      lineHeight: 1.6, 
                      marginBottom: '0.5rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  background: 'var(--bg-surface)'
                }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '0.35rem', width: '100%' }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
