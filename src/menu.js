import { content } from "./index";

export function renderMenu() {
  const menuPage = document.createElement("div");
  const menuGrid = document.createElement("div");
}

export function createGrid() {
  const menuItems = [
    "dish1",
    "dish2",
    "dish3",
    "dish4",
    "dish5",
    "dish6",
    "dish8",
    "dish9",
  ];

  //   Use .map() here?
  for (let i = 0; i < menuItems.length; i++) {
    const dish = document.createElement("div");
    dish.classList.add(`${menuItems[i]}`);
    dish.innerHTML = `${menuItems[i]}`;

    content.appendChild(dish);
  }
}
