import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <header>
      <h2>{title}</h2>
      <nav>
        <Link to="/">
          <p>Sobre Mim</p>
        </Link>
        <Link to="/projects">
          <p>Projetos</p>
        </Link>
        <Link to="/contact">
          <p>Contatos</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;