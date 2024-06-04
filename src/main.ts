import './style.css'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './bright.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Marco Esparza</h1>
    <div class="card">
      Empecemos a ver exactamente por que estas aqui
    <h2 class="notes">Quien Soy</h2>
    <h2 class="notes">Experiencia</h2>
    <h2 class="notes">Sueños</h2>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
  