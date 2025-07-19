const voirPlusButtons = document.querySelectorAll(".voir-plus");
voirPlusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle("open");
    targetContent.style.maxHeight = button.textContent === "Voir plus" ? targetContent.scrollHeight + "px" : "0";
    button.textContent = button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
  });
});