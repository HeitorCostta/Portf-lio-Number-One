const textos = ["Olá, eu sou o Heitor Costa"];

const elemento = document.querySelector(".hero h2");
let textoIndex = 0;
let charIndex = 0;

function digitar() {
  const textoAtual = textos[textoIndex];

  if (charIndex < textoAtual.length) {
    elemento.textContent += textoAtual.charAt(charIndex);
    charIndex++;
    setTimeout(digitar, 100); // velocidade da digitação
  } else {
    setTimeout(() => {
      elemento.classList.add("fade-out");
      setTimeout(() => {
        elemento.textContent = "";
        elemento.classList.remove("fade-out");
        textoIndex = (textoIndex + 1) % textos.length;
        charIndex = 0;
        digitar();
      }, 500); // tempo pra sumir antes de começar de novo
    }, 1500); // tempo que o texto fica visível antes de sumir
  }
}

document.addEventListener("DOMContentLoaded", () => {
  elemento.textContent = "";
  digitar();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
