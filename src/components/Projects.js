import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Project 1', link: 'https://github.com/project1' },
    { name: 'Project 2', link: 'https://github.com/project2' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
