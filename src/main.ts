import './style.css'
import viteLogo from '/vite.svg'
import selfie from './gatito.jpg'

document.querySelector<HTMLDivElement>('#name')!.innerHTML = `
<div class="princontainer">
  <h1 class="son">😺 Marco Esparza</h1>
  <p>
    Empecemos a ver exactamente por que estas aqui
  </p>
</div>
`


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="cratebox" id=cratebox>
    <h2 class="notes" id=el1>Quien Soy</h2>
    <h2 class="notes" id=el2>Experiencia</h2>
    <h2 class="notes" id=el3>Sueños</h2>
    </div>
  </div>
`

document.querySelector<HTMLDivElement>('#press')!.innerHTML = `
  <div id=caja>
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </div>
  `


  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2 class="notes" id="el1">Quien Soy</h2>
    <h2 class="notes" id="el2">Experiencia</h2>
    <h2 class="notes" id="el3">Sueños</h2>
    </div>
  </div>
  `
  document.querySelector<HTMLDivElement>('#selfpicture')!.innerHTML = `
    <a href="https://vitejs.dev" target="_blank" class="portada">
    <img src="${selfie}" class="selfie" alt="Vite logo" />
    </a>
  `

  document.querySelector<HTMLDivElement>('#proyects')!.innerHTML = `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
  `

  document.querySelector<HTMLDivElement>('#triumph')!.innerHTML = `
        <p>
          lorem ipsum esta es una prueba de descipcion solamenmte
        </p>
  `




  // hover para cambio de contenido en la descripcion
const onmouse = document.querySelectorAll('.notes')

onmouse.forEach(el => {
  el.addEventListener('mouseover', (event: MouseEvent) => {
    const objetivo = event.target as HTMLElement
    let test2:string = objetivo.id
    switch (test2){
      case "el1":
        document.getElementById('caja').innerHTML = "Soy Marco"
        document.getElementById('el2').style.opacity = "0.1"
        document.getElementById('el3').style.opacity = "0.1"
        document.getElementById('el1').style.opacity = "1"
        break
      case "el2":
        document.getElementById('caja').innerHTML = "Product Owner, SysAdmin"
        document.getElementById('el1').style.opacity = "0.1"
        document.getElementById('el3').style.opacity = "0.1"
        document.getElementById('el2').style.opacity = "1"
        break
      case "el3":
        document.getElementById('caja').innerHTML = "En la mayoría de los casos permite que el elemento hijo tome su ancho especificado, y el navegador distribuye el espacio restante de forma equitativa entre el par de márgenes izquierdo y derecho o el par de márgenes superior e inferior o entre ambos pares."
        document.getElementById('el3').style.opacity = "1"
        document.getElementById('el2').style.opacity = "0.1"
        document.getElementById('el1').style.opacity = "0.1"
        break
    }
  })
})






