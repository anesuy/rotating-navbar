const open = document.getElementById("open");
const close = document.getElementById("close");
const page = document.querySelector(".page");

open.addEventListener("click", () => page.classList.add("show-nav"));

close.addEventListener("click", () => page.classList.remove("show-nav"));
