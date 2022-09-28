import { TEXTS } from "./texts.js";

const body = document.querySelector("body");

function createTag(tag, classes) {
  const el = document.createElement(tag);
  if (classes != null) el.classList.add(classes);
  return el;
}

function createTextPage(englishText) {
  body.innerHTML = "";
  const title = createTag("h3", "titleText");
  title.innerHTML = englishText.title;
  body.appendChild("title");
}

function createMenu() {
  const menu = createTag("div", "mainMenu");
  const titleMenu = createTag("h1", "titleMenu");
  titleMenu.innerHTML = "English for children";
  menu.appendChild(titleMenu);
  const subTitle = createTag("div", "subTitle");
  subTitle.innerHTML =
    "Hello, my friend. Welcome to the game. Today we will study English words. Please, choose the text for study";
  menu.appendChild(subTitle);

  const buttonsContainer = createTag("div", "buttonsContainer");
  menu.appendChild(buttonsContainer);

  function createButtonMenu(text) {
    const buttonMenu = createTag("button", "buttonMenu");
    buttonMenu.innerHTML = text.title;
    buttonMenu.addEventListener("click", createTextPage);
    return buttonsContainer.appendChild(buttonMenu);
  }

  TEXTS.forEach((element) => createButtonMenu(element));

  body.appendChild(menu);
}

createMenu();
