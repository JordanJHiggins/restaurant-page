import { content } from "./index";

export const contactPage = document.createElement("div");
const card = document.createElement("div");
const contactTitle = document.createElement("h2");
const address = document.createElement("p");
const phone = document.createElement("p");
const email = document.createElement("p");

const nameLabel = document.createElement("label");
const emailLabel = document.createElement("label");
const messageLabel = document.createElement("label");

const inputContainer = document.createElement("div");
const nameInput = document.createElement("input");
const emailInput = document.createElement("input");
const messageInput = document.createElement("textarea");
const submit = document.createElement("input");

nameInput.setAttribute("type", "text");
emailInput.setAttribute("type", "email");

messageInput.setAttribute("rows", "7");
messageInput.setAttribute;
submit.setAttribute("type", "submit");

export function renderContact() {
  contactTitle.innerText = "Barry's Restaurant";
  address.innerText = "123 Streetname, City, in Country.";
  phone.innerText = "(607) 222-3333";
  email.innerText = " Barrys@restaurant.com";

  nameLabel.innerText = "Name";
  emailLabel.innerText = "Email";
  messageLabel.innerText = "Send us a message";

  contactPage.classList.add("contact-page");
  inputContainer.classList.add("input-container");
  nameInput.classList.add("name-input");
  emailInput.classList.add("email-input");
  messageInput.classList.add("message-input");

  content.appendChild(contactPage);

  contactPage.appendChild(card);
  contactPage.appendChild(inputContainer);

  card.appendChild(contactTitle);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);

  inputContainer.appendChild(nameLabel);
  inputContainer.appendChild(nameInput);
  inputContainer.appendChild(emailLabel);
  inputContainer.appendChild(emailInput);
  inputContainer.appendChild(messageLabel);
  inputContainer.appendChild(messageInput);
  inputContainer.appendChild(submit);
}
