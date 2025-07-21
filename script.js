const voirPlusButtons = document.querySelectorAll(".voir-plus");
voirPlusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle("open");
    targetContent.style.maxHeight =
      button.textContent === "Voir plus"
        ? targetContent.scrollHeight + "px"
        : "0";
    button.textContent =
      button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
  });
});

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
  nav.style.maxHeight =
      nav.classList.contains("open")
        ? 333 + "px"
        : "0";
});

const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("main section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    current = sections[sections.length - 1].id;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active-link", link.hash === `#${current}`);
  });
});