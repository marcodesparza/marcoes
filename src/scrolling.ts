const app = document.querySelector<HTMLAllCollection>("#app");
const projectsscroll = document.querySelector<HTMLAllCollection>("#proyects");
const objetivs = document.querySelector<HTMLAllCollection>("#contact");

const whoim = document.querySelector<HTMLAllCollection>("#who");
const experience = document.querySelector<HTMLAllCollection>("#experience");
const contactme = document.querySelector<HTMLAllCollection>("#contacme");

whoim!.addEventListener("click", () => {
  app?.scrollIntoView({ block: "center", behavior: "smooth" });
});

experience!.addEventListener("click", () => {
  projectsscroll?.scrollIntoView({ block: "center", behavior: "smooth" });
});

contactme!.addEventListener("click", () => {
  objetivs?.scrollIntoView({ block: "center", behavior: "smooth" });
});
