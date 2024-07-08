import "./style.css";
import selfie from "./selfp.jpg";
import { slider } from "./slider.ts";
import dockerlog from "./logos/docker-logo-blue.svg";
import jslogo from "./logos/JavaScript-logo.png";
import linuxlog from "./logos/Symbol-Linux-500x276.jpg";
import odoolog from "./logos/odoo_logo.png";
import reactlog from "./logos/react.png";
import pythonlogo from "./logos/Python.png";
import bashlogo from "./logos/bash.png";


document.querySelector<HTMLDivElement>("#name")!.innerHTML = `
  <div class="princontainer">
    <h1 class="son">😺 Marco Esparza</h1>
    <p class="daug">
    Bienvenido a una descripción mas a fondo de quien soy 
      <div class="headerbar">
              <ul class="states">
                  <li id="who"><a href="#">Quien soy</a></li>
                  <li id="experience"><a href="#">Mi experiencia</a></li>
              </ul>
          </div>
    </p>
  </div>
  `;

document.querySelector<HTMLDivElement>("#press")!.innerHTML = `
    <div id=caja></div>
    `;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <h2 class="notes" id="el1">Quien Soy</h2>
      <h2 class="notes" id="el2">Experiencia</h2>
      <h2 class="notes" id="el3">Sueños</h2>
      </div>
    </div>
    `;
document.querySelector<HTMLDivElement>("#selfpicture")!.innerHTML = `
      <a target="_blank" class="portada">
      <img src="${selfie}" class="selfie" alt="Vite logo" />
      </a>
    `;

document.querySelector<HTMLDivElement>("#foot")!.innerHTML = `
          <div class="socialIcons">
              <a href="https://www.linkedin.com/in/marco-antonio-esparza-salas/"><i class="fa-brands fa-linkedin"></i></a>
          </div>      
      </div>
      <div class="footerBottom">
          <p>Copyright &copy;2024; Desarrollado por mi osea<span class="designer">Marco 😊</span></p>
      </div>
  `;



document.querySelector<HTMLDivElement>("#technology")!.innerHTML = `
    <h2 class="stack"> Mi Stack ⌨️🖱️</h2>
    <img src="${reactlog}" class="logos" />
    <img src="${jslogo}" class="logos" />
    <img src="${pythonlogo}" class="logos" />
    <img src="${linuxlog}" class="logos" />
    <img src="${bashlogo}" class="logos" />
    <img src="${dockerlog}" class="logos" />
    <img src="${odoolog}" class="logos" />
  `;

slider();
