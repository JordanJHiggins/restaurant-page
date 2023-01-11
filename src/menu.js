import { content } from "./index";

const menuGrid = document.createElement("div");

(function createGrid() {
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

    menuGrid.appendChild(dish);
  }
})();
// createGrid();

export function renderMenu() {
  const menuPage = document.createElement("div");
  const menuTitle = document.createElement("h2");
  // const menuGrid = document.createElement("div");

  menuTitle.innerHTML = "Menu";

  menuGrid.classList.add("grid");
  content.appendChild(menuPage);
  menuPage.appendChild(menuTitle);
  menuPage.appendChild(menuGrid);
}
