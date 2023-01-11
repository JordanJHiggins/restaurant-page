import { content } from "./index";

export function renderContact() {
  const contactPage = document.createElement("div");
  const card = document.createElement("div");
  const contactTitle = document.createElement("h2");
  const address = document.createElement("p");
  const phone = document.createElement("p");
  const email = document.createElement("p");

  contactTitle.innerText = "Restaurant";
  address.innerText = "123 streetname, town, in city";
  phone.innerText = "(506) 222-3333";
  email.innerText = " restaurant@restaurant.com";

  content.appendChild(contactPage);
  contactPage.appendChild(card);
  card.appendChild(contactTitle);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
}
