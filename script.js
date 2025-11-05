const eRGB_DISPLAY = document.querySelector('#rgbDisplay');
const eCOLOR_CHANGE_BTN = document.querySelector('#colorChangeBtn');

/*
function randomNumber(){
  return Math.floor(Math.random()*255)+1
}

function rgbValue(){
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return `rgb(${r},${g},${b})`
}

function changeBg(){
  let currentColor = rgbValue();
  document.querySelector('.main-wrapper').style.backgroundColor = currentColor
  return currentColor
}

function updateDisplay(value){
  eRGB_DISPLAY.innerHTML = value;
}
eCOLOR_CHANGE_BTN.addEventListener('click', ()=>{
  updateDisplay(changeBg())
})

*/

/* Color = Class */
class Color {
  constructor(){
    this.r = Color.randomize();
    this.g = Color.randomize();
    this.b = Color.randomize();
  }
  static randomize(){ /* upgraded from func. specific to Color class */
    return Math.floor(Math.random()*256);
  }

  get rgbValue(){
    return `rgb(${this.r},${this.g},${this.b})`
  }
}

