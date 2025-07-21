const voirPlusButtons = document.querySelectorAll(".voir-plus");
const navLinks = document.querySelectorAll("header nav a");
const h1 = document.querySelector("h1");
const sections = document.querySelectorAll("main section");
const hamburger = document.getElementById("hamburger");
const navUl = nav.querySelector("ul"); 

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

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  nav.style.maxHeight =
      nav.classList.contains("open")
        ? navUl.scrollHeight + "px"
        : "0";
});

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

[...navLinks, h1].forEach((link) => {
  link.addEventListener("click", () => {
    navHeight();
  });
});

function navHeight() {
  if (hamburger.offsetParent !== null) {
    nav.classList.remove("open");
    nav.style.maxHeight = "0";
  }
  else {
    nav.style.maxHeight = null;
  }
}

function headerHeight() {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}
window.addEventListener('DOMContentLoaded', headerHeight);
window.addEventListener('resize', headerHeight);
window.addEventListener('resize', navHeight);