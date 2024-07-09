const app = document.querySelector<HTMLDivElement>("#app");
const projectsscroll = document.querySelector<HTMLDivElement>("#proyects");

const whoim: any = document.querySelector<HTMLLIElement>("#who");
const experience: any = document.querySelector<HTMLLIElement>("#experience");

whoim.addEventListener("click", () => {
  app?.scrollIntoView({ block: "center", behavior: "smooth" });
});

experience.addEventListener("click", () => {
  projectsscroll?.scrollIntoView({ block: "center", behavior: "smooth" });
});
