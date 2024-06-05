import './style.css'
import viteLogo from '/vite.svg'


document.querySelector<HTMLDivElement>('#name')!.innerHTML = `
<div class="princontainer">
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <h1 class="son">Marco Esparza</h1>
  <p>
    Empecemos a ver exactamente por que estas aqui
  </p>
</div>
`


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="cratebox">
    <h2 class="notes" id=whoim>Quien Soy</h2>
    <h2 class="notes">Experiencia</h2>
    <h2 class="notes">Sueños</h2>
    </div>
  </div>
`

document.querySelector<HTMLDivElement>('#press')!.innerHTML = `
  <div class="toolbox" id=caja>
    Este es un cuadro con marco
  </div>
  `




  // test completamente funcional, cambia el estado con esta funcion 

//let test = document.getElementById('whoim')
//let test1 = document.getElementById('caja')

//test.addEventListener("mouseover", function() {
 // test1.style.display = "none"
//})

  