const $hideButton = document.getElementById("hide-modal");
const $hideNo = document.getElementById("hide-no");
const $modal = document.getElementById("modal");
const $overlay = document.getElementById("overlay");

$hideButton.addEventListener("click", modalOut);
$hideNo.addEventListener("click", modalOut);
$overlay.addEventListener("click", modalOut);

function modalOut() {
  $modal.style.animation = "modalOut .8s forwards";
  $overlay.classList.remove("active");
}