let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  //   takes the content already in id="save-el" and adds countStr to it
  saveEl.textContent += countStr;
  //   reset the h2 text and count to 0
  countEl.textContent = 0;
  count = 0;
}
