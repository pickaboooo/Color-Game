let colorBtn = document.querySelector(".colorBtn");
let color = [
  "#FF0000", '#FFFF00', '#00FF00', '#FFFFFF', '#000000', '#0000FF'
  ];
  
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

function genRanColor() {
  let randomColor = Math.floor(Math.random() * color.length);

  return randomColor
}



colorBtn.addEventListener('click', () =>{
  let box1Color = color[genRanColor()];
  let box2Color = color[genRanColor()];
  let box3Color = color[genRanColor()];
  
  box1.classList.add('colorAnimation1');
  box2.classList.add('colorAnimation2');
  box3.classList.add('colorAnimation3');
  
  setTimeout(() => {
    box1.classList.remove('colorAnimation1');
    box2.classList.remove('colorAnimation2');
    box3.classList.remove('colorAnimation3');
  }, 500);
  box1.style.background = box1Color;
  box2.style.background = box2Color;
  box3.style.background = box3Color;
  
});