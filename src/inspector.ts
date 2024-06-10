const onmouse = document.querySelectorAll('.notes')

onmouse.forEach(el => {
  el.addEventListener('mouseover', (event: MouseEvent) => {
    const objetivo = event.target as HTMLElement
    let test2:string = objetivo.id
    document.getElementById('press').className = ''    
    switch (test2){
      case "el1":
        document.getElementById('caja').innerHTML = "Soy Marco"
        document.getElementById('el2').style.opacity = "0.1"
        document.getElementById('el3').style.opacity = "0.1"
        document.getElementById('el1').style.opacity = "1"
        document.getElementById('press').classList.remove('pressblur')
        document.getElementById('press').classList.add('pressblur')
        break
      case "el2":
        document.getElementById('caja').innerHTML = "Product Owner, SysAdmin"
        document.getElementById('el1').style.opacity = "0.1"
        document.getElementById('el3').style.opacity = "0.1"
        document.getElementById('el2').style.opacity = "1"
        document.getElementById('press').classList.remove('zoom-out')
        document.getElementById('press').classList.add('zoom-out')
        break
      case "el3":
        document.getElementById('caja').innerHTML = "En la mayoría de los casos permite que el elemento hijo tome su ancho especificado, y el navegador distribuye el espacio restante de forma equitativa entre el par de márgenes izquierdo y derecho o el par de márgenes superior e inferior o entre ambos pares."
        document.getElementById('el3').style.opacity = "1"
        document.getElementById('el2').style.opacity = "0.1"
        document.getElementById('el1').style.opacity = "0.1"
        document.getElementById('press').classList.remove('pressblur')
        document.getElementById('press').classList.add('pressblur')
    }
  })
})