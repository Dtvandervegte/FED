const hamMenuButton = document.querySelector("header > button");
const offScreenMenu = document.querySelector("header > nav");

hamMenuButton.addEventListener("click", () => {
  hamMenuButton.classList.toggle("is-open");
  offScreenMenu.classList.toggle("is-open");
});


/* bron: chatGPT */
if (window.innerWidth >= 1000) {
  document.querySelectorAll("footer details").forEach(d => d.setAttribute("open", ""));
}