import { renderHome, homePage } from "./home";
import { renderMenu, menuPage } from "./menu";
import { renderContact, contactPage } from "./contact";
import "./style.css";
import logo from "./imgs/logo.svg";

export const content = document.getElementById("content");
const nav = document.getElementById("nav-bar");

const homeButton = document.createElement("a");
const menuButton = document.createElement("a");
const contactButton = document.createElement("a");
const title = document.createElement("h1");
const logoContainer = document.createElement("img");

logoContainer.src = logo;
logoContainer.classList.add("logo");

function renderNav() {
  homeButton.innerText = "Home";
  menuButton.innerText = "Menu";
  contactButton.innerText = "Contact";
  title.innerText = "Barry's";

  homeButton.classList.add("home-button");
  menuButton.classList.add("menu-button");
  contactButton.classList.add("contact-button");
  title.classList.add("title");

  nav.appendChild(logoContainer);
  nav.appendChild(title);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
}

function switchTab() {
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
switchTab();
