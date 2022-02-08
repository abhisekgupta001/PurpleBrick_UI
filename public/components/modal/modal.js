const modal = document.querySelector(".modal-demo");
const openBtn = document.querySelector("#btn-open-modal");
const closeBtn = document.getElementById("close-btn");
const backBtn = document.getElementById("btn-back")

openBtn.addEventListener("click", ()=>{
modal.classList.add("show-modal");
})

closeBtn.addEventListener("click", ()=>{
modal.classList.remove("show-modal");
})

backBtn.addEventListener("click", ()=>{
modal.classList.remove("show-modal");
})