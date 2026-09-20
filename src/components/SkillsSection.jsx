import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/projectsData';
import { Cpu, Code, Eye, Layers, Globe, CheckCircle2 } from 'lucide-react';

const CATEGORY_ICONS = {
  "Programming & Control": <Code size={18} />,
  "Robotics & Embedded Systems": <Cpu size={18} />,
  "Computer Vision & AI": <Eye size={18} />,
  "Mechanical & CAD Engineering": <Layers size={18} />,
  "Software & Web Systems": <Globe size={18} />
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...SKILL_CATEGORIES.map(c => c.name)];

  const filteredCategories = selectedCategory === "All" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} />
            Engineering Competencies
          </span>
          <h2 className="section-title">Technical Expertise & Tooling</h2>
          <p className="section-subtitle">
            A comprehensive overview of mechanical design, embedded systems, software algorithms, and control theory mastered across academic projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '0.45rem 1.1rem',
                fontSize: '0.85rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredCategories.map((cat, cIdx) => (
            <div 
              key={cIdx} 
              className="card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-subtle)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {CATEGORY_ICONS[cat.name] || <Cpu size={18} />}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {cat.name}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      <CheckCircle2 size={13} style={{ color: 'var(--accent-primary)' }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
