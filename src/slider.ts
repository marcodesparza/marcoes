export function slider() {
  let projects: string[] = [];

  projects = [
    "Jarsa. Mi carrera como administrador",
    "ahora vemos que el estar como freelance esta bien",
    "ser un docente cambio mi forma de persibir a las personas",
    "mi experiencia en el amito escolar fue ",
  ];
  let blood = 0;
  let projectsstring = document.querySelector<HTMLDivElement>("#proyects")!;
  const righty = document.querySelector<HTMLButtonElement>("#right")!;
  const lefty = document.querySelector<HTMLButtonElement>("#left")!;

  righty.onclick = () => {
    if (blood > 2) {
      blood = 0;
    } else {
      blood += 1;
    }
    projectsstring.innerHTML = `<p> ${projects[blood]} </p>`;
  };
  lefty.onclick = () => {
    if (blood < 1) {
      blood = 3;
    } else {
      blood -= 1;
    }

    projectsstring.innerHTML = `<p> ${projects[blood]} </p>`;
  };
}
