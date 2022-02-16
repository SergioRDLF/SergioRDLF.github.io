import React, { useState } from 'react';

function Forms() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Você clicou em enviar.')
  } 

  return (
    <main>
      <h3>Me mande uma mensagem</h3>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name" 
              placeholder="Seu nome" 
              value={ inputs.name }
              onChange={ handleChange }
              required 
            />
          </label>
          <label>
            E-mail:
            <input 
              type="text" 
              name="email" 
              placeholder="Seu e-mail" 
              value={ inputs.email }
              onChange={ handleChange }
              required 
            />
          </label>
          <label>
            Mensagem:
            <textarea 
              type="text" 
              name="message" 
              placeholder="Escreva sua mensagem" 
              value={ inputs.message }
              onChange={ handleChange }
              required 
            />
          </label>
          <button type="submit">Enviar!</button>
        </form>
      </section>
      <section>
        <h5>Se gostou do que viu ou deseja entrar em contato, fique à vontade que eu respondo o mais breve possível.</h5>
        <h5>Caso ache melhor, pode me encontrar também por e-mail ou nas redes sociais:</h5>
        <a href="mailto:rodrigues.sergiofilho@gmail.com">
          <img alt="gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white?logoWidth=70" />
        </a>
        <a href="https://www.linkedin.com/in/sergiordfl/">
          <img alt="linkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white?logoWidth=70" /> 
        </a>
        <a href="https://github.com/SergioRDLF">
          <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&?logoWidth=70" />
        </a>
      </section>
    </main>
  );
};

export default Forms;