import React from 'react';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
    <h4 className="text-xl font-bold text-slate-900">{project.name}</h4>
    <p className="mt-2 text-slate-600 flex-grow">{project.description}</p>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Projects</h2>
          <p className="mt-4 text-lg text-slate-600">A look at what I've been working on.</p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;