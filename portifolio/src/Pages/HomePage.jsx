import React from 'react';
import AboutMe from '../Components/AboutMe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function HomePage() {
  return (
    <div>
      <Header title="Sobre Mim"/>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default HomePage;