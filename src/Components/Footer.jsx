import React from 'react';

function Footer() {
  return (
    <footer className='py-3 my-4"'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <a className='nav-link px-2 text-muted' href="mailto:rodrigues.sergiofilho@gmail.com">
            <img alt="gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white?logoWidth=50" />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link px-2 text-muted' href="https://www.linkedin.com/in/sergiordfl/">
            <img alt="linkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white?logoWidth=50" /> 
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link px-2 text-muted' href="https://github.com/SergioRDLF">
            <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&?logoWidth=50" />
          </a>
        </li>
      </ul>
      <p className='text-center text-muted'>Portifólio desenvolvido por Sérgio Rodrigues</p>
      <p className='text-center text-muted'>© 2022 Sérgio Rodrigues</p>
    </footer>
  );
}

export default Footer;

{/* <footer>
      <nav>
        <a href="mailto:rodrigues.sergiofilho@gmail.com">
          <img alt="gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white?logoWidth=50" />
        </a>
        <a href="https://www.linkedin.com/in/sergiordfl/">
          <img alt="linkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white?logoWidth=50" /> 
        </a>
        <a href="https://github.com/SergioRDLF">
          <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&?logoWidth=50" />
        </a>
      </nav>
      <p>Portifólio desenvolvido por Sérgio Rodrigues.</p>
      <p>Todos os direitos reservados.</p>
    </footer> */}