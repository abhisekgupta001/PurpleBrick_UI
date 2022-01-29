const sideBar = document.getElementById("nav__list");
const mainContent = document.getElementById("main-content");
const hamburger = document.querySelector(".pb-hamburger");

hamburger.addEventListener("click", ()=>{
    sideBar.classList.toggle("show-sidebar");
})

mainContent.addEventListener("click", ()=>{
    sideBar.classList.remove("show-sidebar");
})