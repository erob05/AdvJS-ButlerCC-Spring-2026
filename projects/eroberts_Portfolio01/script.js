  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("header nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  });