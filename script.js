const voirPlusButtons = document.querySelectorAll(".voir-plus");
const navLinks = document.querySelectorAll("header nav a");
const h1 = document.querySelector("h1");
const sections = document.querySelectorAll("main section");
const hamburger = document.getElementById("hamburger");
const navUl = document.querySelector("#nav ul");
const nav = document.getElementById("nav");
const header = document.querySelector("header");

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
  const isNavOpen = nav.classList.contains("open");
  nav.style.maxHeight = isNavOpen ? navUl.scrollHeight + "px" : "0";
  hamburger.setAttribute("aria-expanded", isNavOpen);
  hamburger.setAttribute("aria-label", isNavOpen ? "Fermer le menu" : "Ouvrir le menu");
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

function debounce(func, wait = 150) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function navHeight() {
  if (hamburger.offsetParent !== null) {
    nav.classList.remove("open");
    nav.style.maxHeight = "0";
  } else {
    nav.style.maxHeight = null;
  }
}

function headerHeight() {
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight}px`
  );
}

function updateOpenPanelsHeight() {
  const openPanels = document.querySelectorAll(".more-content.open");
  openPanels.forEach((panel) => {
    panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

function handleResize() {
  headerHeight();
  navHeight();
  updateOpenPanelsHeight();
}

const debouncedResizeHandler = debounce(handleResize, 100);

window.addEventListener("DOMContentLoaded", headerHeight);
window.addEventListener("resize", debouncedResizeHandler);