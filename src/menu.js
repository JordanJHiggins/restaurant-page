import { content } from "./index";

export function renderMenu() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("grid");

  const menuTitle = document.createElement("h2");
  menuTitle.innerText = "Menu";

  createMenuItem(
    menuGrid,
    "Scallop Ceviche",
    "$15",
    "fresh cirtrus, chilli peppers, herbs"
  );
  createMenuItem(
    menuGrid,
    "Halibut",
    "$20",
    "Roast potatoes and braised leeks"
  );
  createMenuItem(
    menuGrid,
    "Monkfish",
    "$19",
    "Mushroom polenta and meyer lemon"
  );
  createMenuItem(
    menuGrid,
    "Snow Crab",
    "$16",
    "Warm brown butter, served with fresh bread"
  );
  createMenuItem(
    menuGrid,
    "Whole Lobster",
    "*MP",
    "Fresh New Brunswick lobster"
  );
  createMenuItem(
    menuGrid,
    "Razor Clams",
    "$15",
    "Spicy ponzu and fresh cilantro"
  );

  content.appendChild(menuPage);
  menuPage.appendChild(menuTitle);
  menuPage.appendChild(menuGrid);
}

function createMenuItem(container, dishName, price, desc) {
  const dish = document.createElement("p");

  dish.innerText = `${dishName} ${price}
  
  ${desc}`;

  container.append(dish);
}
