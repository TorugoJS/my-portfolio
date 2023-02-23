const textEl = document.getElementById("letras");
const text = "Front End";

let idx = 1;
let speed = 250;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}
