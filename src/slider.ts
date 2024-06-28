export function slider() {
  let projects: string[] = [];
  let experienciastring: readonly string[] = [];
  projects = [
    "Jarsa. Mi carrera como administrador. Durante mi instancia en Jarsa Sistemas mantuve dos roles principales en la organizacion, siendo como principal el product owner y el secundario siendo SysAdmin. El giro especifico de la empresa son las implementaciones del software ERP llamado odoo. Siendo la implementacion el desarrollo y el mantenimiento del mismo las principales funciones ",
    "ahora vemos que el estar como freelance esta bien",
    "Freelance, Developer, Sys Admin",
    "maestro",
  ];

  experienciastring = [
    "Jarsa: Product Owner, SysAdmin",
    "Steg: Product Owner, DevOps, SysAdmin, Developer ",
    "Freelance",
    "maestro",
  ];

  let resultados: readonly string[] = [];

  resultados = [
    "Durante mi labor en Jarsa Sistemas estuve realizando varios proyectos los cuales tenian diferentes giros empresariales",
    "test",
    "test",
    "test",
  ];

  let blood = 0;
  let projectsstring = document.querySelector<HTMLDivElement>("#proyects")!;
  let experienciatitle = document.querySelector<HTMLDivElement>("#exptitle")!;
  let results = document.querySelector<HTMLDivElement>("#triumph")!;
  const righty = document.querySelector<HTMLButtonElement>("#right")!;
  const lefty = document.querySelector<HTMLButtonElement>("#left")!;

  projectsstring.innerHTML = `<p> ${projects[blood]} </p>`;
  experienciatitle.innerHTML = `<h2> ${experienciastring[blood]} </h2>`;
  results.innerHTML = `<p> ${resultados[blood]} </p>`;

  righty.onclick = () => {
    if (blood > 2) {
      blood = 0;
    } else {
      blood += 1;
    }
    projectsstring.innerHTML = `<p> ${projects[blood]} </p>`;
    experienciatitle.innerHTML = `<h2> ${experienciastring[blood]} </h2>`;
    results.innerHTML = `<p> ${resultados[blood]} </p>`;
  };
  lefty.onclick = () => {
    if (blood < 1) {
      blood = 3;
    } else {
      blood -= 1;
    }

    experienciatitle.innerHTML = `<h2> ${experienciastring[blood]} </h2>`;
    projectsstring.innerHTML = `<p> ${projects[blood]} </p>`;
    results.innerHTML = `<p> ${resultados[blood]} </p>`;
  };
}
