const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
let clr = "#";
btn.addEventListener("click", function (e) {
  for (i = 0; i < 6; i++) {
    randomnum = random();
    clr += randomnum;
  }

  document.body.style.backgroundColor = clr;
  color.textContent = clr;
  color.style.color = clr;
  clr = "#";
});

function random() {
  return array[Math.floor(Math.random() * array.length)];
}
