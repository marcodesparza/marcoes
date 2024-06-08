import './style.css'
import viteLogo from '/vite.svg'
let textosinforma:string 

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
  <div class="toolbox" id=caja>
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </div>
  `


  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2 class="notes" id=el1>Quien Soy</h2>
    <h2 class="notes" id=el2>Experiencia</h2>
    <h2 class="notes" id=el3>Sueños</h2>
    </div>
  </div>
  `
  document.querySelector<HTMLDivElement>('#selfpicture')!.innerHTML = `
    <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
  `

const onmouse = document.querySelectorAll('.notes')

onmouse.forEach(el => {
  el.addEventListener('mouseover', (event: MouseEvent) => {
    const objetivo = event.target as HTMLElement
    let test2:string = objetivo.id
    switch (test2){
      case "el1":
        document.getElementById('caja').innerHTML = "Soy Marco"
        break
      case "el2":
        document.getElementById('caja').innerHTML = "Product Owner, SysAdmin"
        break
      case "el3":
        document.getElementById('caja').innerHTML = "vivir en maza"
        break
    }
  })
})






