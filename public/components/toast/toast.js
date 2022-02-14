const btnToast = document.querySelector(".btn-toast ");
const snackbar = document.querySelector(".snack");

btnToast.addEventListener("click", () => showToast());

const showToast = () => {
    snackbar.classList.add("show-snackbar");
    setTimeout(() => {
        snackbar.classList.remove("show-snackbar");
    }, 3000);
}