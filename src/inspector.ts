const onmouse = document.querySelectorAll(".notes");
let description: readonly string[] = [
  "Soy Marco un ingeniero mecatronico que me encanta la tecnologia, uno de mis pasatiempos es programar paginas web y servicios backend en mis servidores. A pesar que me encanta jugar con servidores me encanta salir y conocer personas. Mi hobbie que mas me desestresa y me ayuda a crear proyectos es patinar por toda la ciudad",
  "Soy un desarrollador fullstack con un gusto por el frontend, me gusta desarrollar soluciones a nivel de servidor asi como administrarlos. Me e desarrollado como product owner y a partir de ellos tener un desarrollo como Scrum master y Devops dependiendo de las necesidades de mi carrera. Una forma de conocer a una persona es saber que hace por gusto y asi es como presento mi experiencia ya que por el destino e trabajado de lo que mas me encanta",
  "Desarrollador Fullstack, SysAdmin, Product Owner, DevOps Y Scrum Master son algunos de los puestos que e desempeñado en mi carrera, a pesar de ello me encanta el software y tratar con demas desarrolladores que es el por que e sido tambien un administrador de las metodologias. Que en si creo es lo importante que es que te guste a lo que te dediques",
  "Lo que siempre e querido es dedicarme a disfrutar lo que e aprendido haciendo una pequeña empresa donde lo importante sean las personas, creo que cada paso que doy me acerco mas y claro vivir cerca del mar 😊🌊",
];

document.getElementById("caja")!.innerHTML = description[0];


onmouse.forEach((el: any) => {

  el.addEventListener("mouseover", (event: MouseEvent) => {
    const objetivo = event.target as HTMLElement;
    let test2: string = objetivo.id;
    document.getElementById("press")!.className = "";
    switch (test2) {
      case "el1":
        document.getElementById("caja")!.innerHTML = description[0];
        document.getElementById("el2")!.style.opacity = "0.1";
        document.getElementById("el3")!.style.opacity = "0.1";
        document.getElementById("el1")!.style.opacity = "1";
        document.getElementById("press")!.classList.remove("pressblur");
        document.getElementById("press")!.classList.add("pressblur");
        break;
      case "el2":
        document.getElementById("caja")!.innerHTML = description[2];
        document.getElementById("el1")!.style.opacity = "0.1";
        document.getElementById("el3")!.style.opacity = "0.1";
        document.getElementById("el2")!.style.opacity = "1";
        document.getElementById("press")!.classList.remove("zoom-out");
        document.getElementById("press")!.classList.add("zoom-out");
        break;
      case "el3":
        document.getElementById("caja")!.innerHTML = description[3];
        document.getElementById("el3")!.style.opacity = "1";
        document.getElementById("el2")!.style.opacity = "0.1";
        document.getElementById("el1")!.style.opacity = "0.1";
        document.getElementById("press")!.classList.remove("pressblur");
        document.getElementById("press")!.classList.add("pressblur");
    }
  });
});
