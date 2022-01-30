const docSideBar = document.querySelector(".doc__sidebar");
const hamburger = document.querySelector(".pb-hamburger");
const docMain = document.querySelector(".doc__main");

hamburger.addEventListener("click", ()=>{
    docSideBar.classList.remove("hide-doc__sidebar");
    docSideBar.classList.toggle("show-doc__sidebar");
})

docMain.addEventListener("click", ()=>{
    docSideBar.classList.add("hide-doc__sidebar");
    docSideBar.classList.remove("show-doc__sidebar");

});