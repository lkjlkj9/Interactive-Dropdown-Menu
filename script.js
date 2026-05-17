const menuItems = [
  { id: 1, title: "Label 1", link: "." },
  { id: 2, title: "Label 2", link: "." },
  { id: 3, title: "Label 3", link: "." },
  { id: 4, title: "Label 4", link: "." },
];

console.log("Кчау!");

const container = document.querySelector(".container");
const dropDown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-Btn");
const label = document.querySelector(".drop-label");
const dropMenu = document.querySelector(".dropDown-menu");
const bormota = document.querySelector(".bormota");

function createItems(dropDown, menuItems) {
  menuItems.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = item.title;
    li.classList.add("menu-item");

    li.addEventListener("click", () => {
      label.textContent = item.title;
      dropMenu.classList.toggle("active");
      dropBtn.classList.toggle("active");
      document.querySelector(".arrow").classList.toggle("active");
      
    });

    dropMenu.append(li);
  });
}
createItems(dropMenu, menuItems);

dropBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("active");
  dropBtn.classList.toggle("active");
  document.querySelector(".arrow").classList.toggle("active");
});

