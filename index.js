document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-consultas");
  const confirmacion = document.getElementById("confirmacion");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

// titulo
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".logo-texto");

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "var(--color-accent)";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.style.color = "var(--color-primary-dark)";
  });
});
