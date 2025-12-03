const btn = document.getElementById("toggle-welcome");
const box = document.getElementById("welcome-box");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
  btn.textContent = box.classList.contains("hidden")
    ? "Mostrar boas-vindas"
    : "Ocultar boas-vindas";
});

/* ========= SECTIONS TOOGLE ============= */

const sections = document.querySelectorAll("main section");

sections.forEach((section) => {
  const title = section.querySelector("h2");
  const content = section.querySelector("div");

      content.classList.add("collapse-content");
      title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    content.classList.toggle("open");
    title.classList.toggle("active");
  });
});

/* =============== MODO DARK =============== */

const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }
});


