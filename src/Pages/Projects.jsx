import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  return (
    <div>
      <Header title="Projetos"/>
      <ProjectCard index="0" />
      <Footer />
    </div>
  );
}

export default Projects;