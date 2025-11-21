console.log("Hello, World!");

const btnToTop = document.getElementById("btn-to-top");

btnToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
