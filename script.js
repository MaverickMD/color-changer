function randomNumber(){
  return Math.floor(Math.random()*255)+1
}

function rgbValue(){
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return `rgb(${r},${g},${b})`
}

