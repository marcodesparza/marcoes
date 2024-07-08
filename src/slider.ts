export function slider() {
  let projects: string[] = [];
  let experienciastring: readonly string[] = [];

  experienciastring = [
    "Jarsa: Product Owner, SysAdmin",
    "Steg: Project Manager, DevOps, SysAdmin, Developer ",
    "Freelance",
    "Bateil: Docente",
  ];

  projects = [
    "Mi carrera como administrador de proyectos de Odoo. Durante mi etapa profesional en Jarsa Sistemas mantuve dos roles principales en la organizacion, siendo como principal el product owner y el secundario siendo SysAdmin.  El giro especifico de la empresa son las implementaciones del software ERP llamado odoo.",
    "Soy un Project Manager donde mi principal funcion es administrar los proyectos de desarrollo de software pero realizo la administración de servidores y yo mismo desarrollo soluciones que se necesiten y esten en mi area de experiencia",
    "Developer, SysAdmin, Consultor de Odoo, son solo unos pocos puestos que e desarrollado durante mi carrera, e participado en diferentes proyectos los cuales por la misma naturaleza te invito a conectar conmigo en Linkedlin o en el formulario de contacto. Quisiera platicarte mas a fondo aqui pero la privacidad de mis clientes siempre a sido un sello propio.",
    "Estuve desarrollandome como docente de preparatoria lo cual me permitio desarrollar mas a fondo mis habilidades blandas las cuales siempre estan enfocadas a tratar a las personas lo mejor que se pueda y siempre estar disponible a enseñar a alguien que lo necesite",
  ];

  let resultados: readonly string[] = [];

  resultados = [
    "Mis conocimientos destacaron en el manejo de un equipo de desarrollo en Python donde nuestra principal meta era cumplir con las necesidades empresariales de varios clientes simultaneamente. La metodologia Scrum fue uno de lo que mas me gusto al estar en esta industria. Me encare a retos donde la perfeccion en los procesos definia nuestro exito",
    "Mis habilidades que mas destacan son el desarrollo y la maquetacion de soluciones de software que sean vistos varios lenguajes. Asi como yo se parte del desarrollo utilizando Javascript (React y Typescript), claro nunca dejando la administracion de software como uno de los pilares de mi carrera profesional",
    "Bombero en la administracion de bases de datos, perdida de accesos, manejo de seguridad de sistemas. Son lo mas comun que realizo en mi dia a dia como freelance. Pero comunmente realizo paginas web asi como servios de Backend, y asesoramiento de parte del ERP ODOO",
    "Realice varios proyectos, pero el mas notable fue crear la carrera de Mecatronica la cual esta en este momento en curso en la preparatoria. Ademas de fundar varios club los cuales tienen participacion en competencias de nivel internacional",
  ];

  let blood = 1;
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
