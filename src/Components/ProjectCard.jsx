// Estruturar como será o card e pegar as informações do arquivo data/projects.js

import React from 'react';

import projects from '../data/projects';

function ProjectCard({ index }) {
  const x = parseInt(index)
  const project = projects[x];

  return (
    <main>
      <h2>{ project.name }</h2>
      <div>
        <img alt="React Test" src={ project.img } />
      </div>
    </main>
  );
}

export default ProjectCard;