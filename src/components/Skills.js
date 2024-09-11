import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes'];

  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
