import { content } from "./index";

export const contactPage = document.createElement("div");
contactPage.classList.add("contact-page");

export function renderContact() {
  const card = document.createElement("div");

  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Barry's Restaurant";

  const address = document.createElement("p");
  address.innerText = "123 Streetname, City, in Country.";

  const phone = document.createElement("p");
  phone.innerText = "(607) 212-3435";

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  nameLabel.innerText = "Name";
  nameInput.classList.add("name-input");
  nameInput.setAttribute("type", "text");
  nameInput.required = true;

  const email = document.createElement("p");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  emailLabel.innerText = "Email";
  emailInput.classList.add("email-input");
  emailInput.setAttribute("type", "email");
  emailInput.required = true;
  email.innerText = " Barrys@restaurant.com";

  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  messageLabel.innerText = "Send us a message";
  messageInput.classList.add("message-input");
  messageInput.setAttribute("rows", "7");
  messageInput.required = true;

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");

  content.appendChild(contactPage);

  contactPage.appendChild(card);
  contactPage.appendChild(inputContainer);

  card.appendChild(contactTitle);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);

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
