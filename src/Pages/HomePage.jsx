import React from 'react';
import AboutMe from '../Components/AboutMe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TechList from '../Components/TechList';

function HomePage() {
  return (
    <div>
      <Header title="Sobre mim" />
      <AboutMe />
      <TechList />
      <Footer />
    </div>
  );
}

export default HomePage;