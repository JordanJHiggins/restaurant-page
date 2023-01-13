import { renderHome, homePage } from "./home";
import { renderMenu, menuPage } from "./menu";
import { renderContact, contactPage } from "./contact";

import "./style.css";

export const content = document.getElementById("content");
const nav = document.createElement("div");
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

nav.classList.add("nav-bar");

function renderNav() {
  homeButton.innerText = "Home";
  menuButton.innerText = "Menu";
  contactButton.innerText = "Contact";

  homeButton.classList.add("home-button");
  menuButton.classList.add("menu-button");
  contactButton.classList.add("contact-button");

  document.body.appendChild(nav);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  console.log("bingggggogog");
}

function switchTab() {
  let navButtons = nav.querySelectorAll("button");

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
switchTab();
