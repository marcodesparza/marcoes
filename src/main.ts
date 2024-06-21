import "./style.css";
import viteLogo from "/vite.svg";
import selfie from "./gatito.jpg";
import { slider } from "./slider.ts";

document.querySelector<HTMLDivElement>("#name")!.innerHTML = `
<div class="princontainer">
  <h1 class="son">😺 Marco Esparza</h1>
  <p class="daug">
  Bienvenido a una descripcion mas a fondo de quien soy 
     <div class="headerbar">
            <ul class="states">
                <li id="who"><a href="#">Quien soy</a></li>
                <li id="experience"><a href="#">Mi experiencia</a></li>
                <li id="contacme"><a href="#">Contactame</a></li>
            </ul>
        </div>
  </p>
</div>
`;

document.querySelector<HTMLDivElement>("#press")!.innerHTML = `
  <div id=caja>
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </div>
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
    <a href="https://vitejs.dev" target="_blank" class="portada">
    <img src="${selfie}" class="selfie" alt="Vite logo" />
    </a>
  `;



document.querySelector<HTMLDivElement>("#triumph")!.innerHTML = `
        <p>
          lorem ipsum esta es una prueba de descipcion solamenmte
        </p>
  `;

document.querySelector<HTMLDivElement>("#foot")!.innerHTML = `
        <div class="socialIcons">
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-google-plus"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>      
    </div>
    <div class="footerBottom">
        <p>Copyright &copy;2024; Desarrollado por <span class="designer">Marco</span></p>
    </div>
`;

document.querySelector<HTMLAllCollection>("#contact")!.innerHTML = `
        <form autocomplete="off" action="https://formsubmit.co/a14f6c3795f740ba3029e5404db113cd" method="POST">
                  <h2 class="contactme">Contactame</h2>
                  <div class="input-group">
                    <input type="text" name="name" placeholder="Nombre">
                    <input type="email" name="email" placeholder="Email">
                    <textarea name="message" cols="30" rows="5" placeholder="Mensaje"></textarea>
                    <input class="send" type="submit" value="Enviar">
                    <input type="hidden" name="_next" value="http://localhost:5173/">
                    <input type="hidden" name="_captcha" value="false">
                  </div>
        </form>
`;

slider();
