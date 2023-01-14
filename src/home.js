import { content } from "./index";
import diningRoomPhoto from "./imgs/diningRoom2.jpg";
export const homePage = document.createElement("div");

const homeText = document.createElement("p");
const diningRoom = document.createElement("img");

diningRoom.src = diningRoomPhoto;

export function renderHome() {
  homePage.classList.add("home-page");
  diningRoom.classList.add("diningroom-photo");
  homeText.classList.add("home-text");

  homeText.textContent = `We're a family owned, casual dining restaurant, focused on bring the best experience in food and drink to our guests. 
  
  Our food is centered around local ingredients, as a result our menu is ever changing. Please checkout our most current menu on this site.`;

  content.appendChild(homePage);
  homePage.appendChild(homeText);
  homePage.appendChild(diningRoom);

  console.log("binggg");
}
