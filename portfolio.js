const btn = document.getElementById("toggle-welcome");
const box = document.getElementById("welcome-box");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
  btn.textContent = box.classList.contains("hidden")
    ? "Mostrar boas-vindas"
    : "Ocultar boas-vindas";
});
