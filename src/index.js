import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import "./style.css";
import logo from "./imgs/logo.svg";

export const content = document.getElementById("content");

function renderNav() {
  const nav = document.getElementById("nav-bar");

  const homeButton = document.createElement("a");
  homeButton.innerText = "Home";
  homeButton.classList.add("home-button");

  const menuButton = document.createElement("a");
  menuButton.innerText = "Menu";
  menuButton.classList.add("menu-button");

  const contactButton = document.createElement("a");
  contactButton.innerText = "Contact";
  contactButton.classList.add("contact-button");

  const title = document.createElement("h1");
  title.innerText = "Barry's";
  title.classList.add("title");

  const logoContainer = document.createElement("img");
  logoContainer.src = logo;
  logoContainer.classList.add("logo");

  nav.appendChild(logoContainer);
  nav.appendChild(title);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  switchTab(nav, homeButton, menuButton, contactButton);
}

function switchTab(nav, homeButton, menuButton, contactButton) {
  let navButtons = nav.querySelectorAll("a");

  navButtons.forEach((button) => {
    button.addEventListener("click", clearContent);
  });

  homeButton.addEventListener("click", renderHome);

  menuButton.addEventListener("click", renderMenu);

  contactButton.addEventListener("click", renderContact);
}

function clearContent() {
  while (content.firstElementChild) {
    content.firstElementChild.remove();
  }
}

renderNav();
renderHome();
