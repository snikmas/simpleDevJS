let line = document.querySelector('.text');
let lastClass = '';
const space = ' ';

function input(numb, numbClass) {
  if (numbClass && !line.innerText || lastClass == numbClass){ // check for an empty line or // ++ 2+ actions
    return;
  }
  lastClass = numbClass ? numbClass : false; // is this var an acttion?
  line.innerText += numb + space;
}

function clearInput() {
  line.innerText = '';
}

function result() {
  line.innerText = eval(line.innerText);

}