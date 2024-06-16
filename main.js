import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { BrekingbadApp } from './src/breakingbad/breakingbad-app';
import { UsersApp } from './src/users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">WELCOME MY SPACE</h1>
    <div class="card">
     
    </div>
  
  </div>
`;

const element = document.querySelector('.card');
// BrekingbadApp(element);
UsersApp(element); // Llamada a UsersApp para cargar y mostrar los usuarios
