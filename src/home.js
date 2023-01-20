import { content } from "./index";
import diningRoomPhoto from "./imgs/diningRoom2.jpg";
export const homePage = document.createElement("div");

const homeText = document.createElement("p");
const diningRoom = document.createElement("img");

diningRoom.src = diningRoomPhoto;

export function renderHome() {
  diningRoom.src = diningRoomPhoto;

  homePage.classList.add("home-page");
  diningRoom.classList.add("diningroom-photo");
  homeText.classList.add("home-text");

  homeText.textContent = `We're a family owned, casual dining restaurant, focused on bring the best experience in food and drink to our guests. 
  `;

  content.appendChild(homePage);
  homePage.appendChild(homeText);
  homePage.appendChild(diningRoom);
}
