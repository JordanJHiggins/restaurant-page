import { content } from "./index";

export const menuPage = document.createElement("div");

const menuGrid = document.createElement("div");
const menuTitle = document.createElement("h2");

const dish1 = document.createElement("p");
const dish2 = document.createElement("p");
const dish3 = document.createElement("p");
const dish4 = document.createElement("p");
const dish5 = document.createElement("p");
const dish6 = document.createElement("p");

export function renderMenu() {
  menuGrid.classList.add("grid");
  menuPage.classList.add("menu-page");

  menuTitle.innerText = "Menu";

  dish1.innerText = `Scallops ceviche $15
   fresh citrus, chilli pepers and herbs.`;

  dish2.innerText = `Snow crab and brown butter $16
    tossed in warm brown butter, served with fresh bread.`;

  dish3.innerText = `Halibut $23
    Roast potatos and braised leeks.`;

  dish4.innerText = `Monkfish $21
    Mushroom polenta and meyer lemon.`;

  dish5.innerText = `Whole lobster *MP
    Fresh New Brunswick lobster.`;

  dish6.innerText = `Razor clams $20
  Spicy ponzu and fresh cilantro.`;

  menuGrid.append(dish1, dish2, dish3, dish4, dish5, dish6);
  content.appendChild(menuPage);
  menuPage.appendChild(menuTitle);
  menuPage.appendChild(menuGrid);
}
