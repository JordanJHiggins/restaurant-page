import { content } from "./index";

export const contactPage = document.createElement("div");

const card = document.createElement("div");

const contactTitle = document.createElement("h2");
const address = document.createElement("p");
const phone = document.createElement("p");

const inputContainer = document.createElement("div");

const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.required = true;

const email = document.createElement("p");
const emailLabel = document.createElement("label");
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.required = true;

const messageLabel = document.createElement("label");
const messageInput = document.createElement("textarea");
messageInput.setAttribute("rows", "7");
messageInput.required = true;

const submit = document.createElement("input");
submit.setAttribute("type", "submit");

export function renderContact() {
  contactTitle.innerText = "Barry's Restaurant";
  address.innerText = "123 Streetname, City, in Country.";
  phone.innerText = "(607) 212-3435";
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

  // inputContainer.appendChild(nameLabel);
  // inputContainer.appendChild(nameInput);
  // inputContainer.appendChild(emailLabel);
  // inputContainer.appendChild(emailInput);
  // inputContainer.appendChild(messageLabel);
  // inputContainer.appendChild(messageInput);
  // inputContainer.appendChild(submit);

  createForm(inputContainer, nameLabel);
  createForm(inputContainer, nameInput);
  createForm(inputContainer, emailLabel);
  createForm(inputContainer, emailInput);
  createForm(inputContainer, messageLabel);
  createForm(inputContainer, messageInput);
  createForm(inputContainer, submit);
}

function createForm(container, formElement) {
  container.appendChild(formElement);
}
