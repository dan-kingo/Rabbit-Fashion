let sidebar = document.querySelector(".sidebar");
document.getElementById("btn").onclick = function () {
  sidebar.classList.toggle("active");
};

let loader = document.querySelector(".loader-container");
let page = document.querySelector(".main-content");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
  page.classList.add("visible");
});
