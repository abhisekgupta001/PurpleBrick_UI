const docSideBar = document.querySelector(".doc__sidebar");
const hamburger = document.querySelector(".pb-hamburger");

hamburger.addEventListener("click", ()=>{
    docSideBar.classList.toggle("show-doc__sidebar");
})