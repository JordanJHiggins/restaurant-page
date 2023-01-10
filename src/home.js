import { content } from "./index";

export function renderHome() {
  const homePage = document.createElement("div");
  const navBar = document.createElement("div");
  const title = document.createElement("h1");
  const photos = document.createElement("img");

  homePage.classList.add("home-page");
  navBar.classList.add("nav-bar");
  title.classList.add("title");
  photos.classList.add("photos");

  content.appendChild(homePage);
  homePage.appendChild(navBar);
  homePage.appendChild(title);
  homePage.appendChild(photos);
}
