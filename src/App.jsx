import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import { INITIAL_PROJECTS } from './data/projectsData';
import PROJECT_MEDIA from './data/projectMedia.json';

function uniqueProjects(list) {
  const seen = new Set();
  return list.filter((project) => {
    if (!project?.id || seen.has(project.id)) return false;
    seen.add(project.id);
    return true;
  });
}

function mergeProjectsWithMedia(mediaMap) {
  return uniqueProjects(INITIAL_PROJECTS).map((project) => {
    const assigned = mediaMap[project.id];
    if (Array.isArray(assigned) && assigned.length > 0) {
      return { ...project, media: assigned };
    }
    return project;
  });
}

export default function App() {
  const [projects] = useState(() => mergeProjectsWithMedia(PROJECT_MEDIA));
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Header />

      <main>
        <Hero />
        <ProjectsSection
          projects={projects}
          onSelectProject={setSelectedProject}
        />
        <EducationSection />
        <ContactSection />
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
