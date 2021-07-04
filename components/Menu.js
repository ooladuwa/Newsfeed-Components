// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

function menuMaker(arr) {
  // create elements
  const menu = document.createElement("div");
  const list = document.createElement("ul");

  //append ul to menu
  menu.appendChild(list);

  //add classes
  menu.classList.add("menu");

  // iterate over the array to create li items inside the ul
  // append li items to the ul
  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  // add event listener
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });
  return menu;
}

const header = document.querySelector(".header");
header.appendChild(menuMaker(menuItems));
