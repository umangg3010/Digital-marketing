//contact form
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".btn-close").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});
// change image
function changeImage(change) {
  let img = document.querySelector("#colimage");
  img.setAttribute("src", change);
}
