import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import { INITIAL_PROJECTS } from './data/projectsData';

export default function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('akila_portfolio_projects');
    if (!saved) return INITIAL_PROJECTS;

    try {
      const savedProjects = JSON.parse(saved);
      if (!Array.isArray(savedProjects)) return INITIAL_PROJECTS;

      // Extract map of user-uploaded media for each project ID
      const savedMediaMap = {};
      savedProjects.forEach(p => {
        if (p.id && Array.isArray(p.media)) {
          savedMediaMap[p.id] = p.media;
        }
      });

      // Merge saved user media into latest project definitions
      const mergedProjects = INITIAL_PROJECTS.map(initProj => {
        const userMedia = savedMediaMap[initProj.id];
        if (userMedia && userMedia.length > 0) {
          return { ...initProj, media: userMedia };
        }
        return initProj;
      });

      // Deduplicate projects by ID
      const uniqueProjects = [];
      const seenIds = new Set();
      mergedProjects.forEach(p => {
        if (p && p.id && !seenIds.has(p.id)) {
          seenIds.add(p.id);
          uniqueProjects.push(p);
        }
      });

      return uniqueProjects;
    } catch (e) {
      return INITIAL_PROJECTS;
    }
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('details');

  // Sync projects to localStorage safely when updated
  useEffect(() => {
    try {
      localStorage.setItem('akila_portfolio_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('LocalStorage quota limit reached for offline storage, active state preserved in memory.', e);
    }
  }, [projects]);

  const handleUpdateProjectMedia = (projectId, newMediaArray) => {
    setProjects(prevProjects => 
      prevProjects.map(p => 
        p.id === projectId ? { ...p, media: newMediaArray } : p
      )
    );

    // Update active project modal state if currently selected
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(prev => ({ ...prev, media: newMediaArray }));
    }
  };

  const handleSelectProject = (project) => {
    setModalTab('details');
    setSelectedProject(project);
  };

  const handleOpenAddMedia = (project) => {
    setModalTab('addMedia');
    setSelectedProject(project);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ProjectsSection 
          projects={projects} 
          onSelectProject={handleSelectProject} 
          onOpenAddMedia={handleOpenAddMedia}
        />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Project Detail & Media Upload Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          initialTab={modalTab}
          onClose={() => setSelectedProject(null)} 
          onUpdateProjectMedia={handleUpdateProjectMedia}
        />
      )}

    </div>
  );
}
