const array = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "orange",
  "grey",
];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function (e) {
  randomnum = random();

  document.body.style.backgroundColor = randomnum;
  color.textContent = randomnum;
  color.style.color = randomnum;
});

function random() {
  return array[Math.floor(Math.random() * array.length)];
}
