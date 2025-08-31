// Efeito de digitação texto principal
const content_main_text = [
  "Olá! Me chamo Matheus e sou um programador.|",
  "Olá! Me chamo Matheus e sou um programador.",
];
let text = document.getElementById("main-text");
let index = 0;

setInterval(() => {
  index = (index + 1) % content_main_text.length;
  text.innerText = content_main_text[index];
}, 500);

// Modo escuro
const button = document.getElementById("light-dark");
const body = document.querySelector(".toggle");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

//Efeito de scroll na seção "projetos"
const projectsSection = document.querySelector(".projects");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectsSection.classList.add("visible");
      }
    });
  },
  { threshold: 0.4 }
); // 0.2 = aparece quando 20% estiver visível

observer.observe(projectsSection);

//Efeito de escurecer tela ao scrollar mouse
const cards = document.querySelectorAll(".project-unit");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.body.classList.add("dark-overlay");
  });
  card.addEventListener("mouseleave", () => {
    document.body.classList.remove("dark-overlay");
  });
});
