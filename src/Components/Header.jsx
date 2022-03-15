import React from 'react';
import '../Styles/header.css'

function Header({ title }) {
  

  return (
    <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
      <h2 className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4'>{title}</h2>
      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <a href='/' className={title === 'Sobre mim' ? 'nav-link active' : 'nav-link'} >Sobre mim</a>
        </li>
        <li className='nav-item'>
          <a href='/projects' className={title === 'Projetos' ? 'nav-link active' : 'nav-link'} >Projetos</a>
        </li>
        <li className='nav-item'>
          <a href='/contact' className={title === 'Contatos' ? 'nav-link active' : 'nav-link'} >Contatos</a>
        </li>
      </ul>
      {/* <nav className='nav nav-pills'>
        <Link className='nav-item' to="/">
          <p className='nav-link header-links' >Sobre Mim</p>
        </Link>
        <Link className='nav-item' to="/projects">
          <p className='nav-link' aria-current="page" >Projetos</p>
        </Link>
        <Link className='nav-item' to="/contact">
          <p className='nav-link'>Contatos</p>
        </Link>
      </nav> */}
    </header>
  );
}


export default Header;