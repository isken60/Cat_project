let blue = document.querySelector("#blue");
let purple = document.querySelector("#purple");
let grey = document.querySelector("#grey");
let active = false;
let active2 = false;
let active3 = false;

blue.addEventListener("click", () => {
  active = !active;
  blue.style.backgroundColor = active ? "yellow" : "white";
});

purple.addEventListener("click", () => {
  active2 = !active2;
  purple.style.backgroundColor = active2 ? "yellow" : "white";
});

grey.addEventListener("click", () => {
  active3 = !active3;
  grey.style.backgroundColor = active3 ? "yellow" : "white";
});
