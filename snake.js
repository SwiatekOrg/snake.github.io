const AllTiles = [...document.querySelectorAll('.snake-row')]

AllTiles.forEach((row,i)=>{
  AllTiles[i] = [...row.querySelectorAll('.snake-item')]
})

const snakePositions = [[5,5]]
let direction = 'gora';
let isEaten = false;
let pointPosition = [];

const eat = () =>{
  if(isEaten){


    isEaten = false;
  }


  if(snakeActualyPosition == pointPosition){
    isEaten = true;
    drawPoint()
  }
}

const drawSnake = () => {
  snakePositions.forEach(pos=>{
    AllTiles[pos[0]][pos[1]].classList.remove('snake-body')
  })
  console.log(snakePositions)
  snakePositions.forEach(cords=>{
    AllTiles[cords[0]][cords[1]].classList.add('snake-body')
  })
}

const snakeMove = () => {
 switch (direction) {
    case 'gora':
    snakeActualyPosition[1] -=1;
    break;
    case 'dol':
    snakeActualyPosition[1] +=1;
    break;
    case 'lewo':
    snakeActualyPosition[0] -=1;
    break;
    case 'prawo':
    snakeActualyPosition[0] +=1;
    break;
 }
 for(let i = 0;i<snakeActualyPosition.length;i++){
   snakeActualyPosition[i] = snakeActualyPosition[i] < 0 ? 9 : snakeActualyPosition[i];
   snakeActualyPosition[i] = snakeActualyPosition[i] > 9 ? snakeActualyPosition[i] % 10: snakeActualyPosition[i];
 }

}

const drawPoint = () =>{
  try {
  document.querySelector('.point').classList.remove('point')
  }catch(TypeError){}
  pointPosition = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]

  for(let pos of snakePositions){
    if(pointPosition === pos){
      drawPoint()
      break
    }
  }
  AllTiles[pointPosition[0]][pointPosition[1]].classList.add('point')
}

window.addEventListener('keydown',e=>{
  switch (e.keyCode) {
      case 38:
      direction = 'gora';
      break;
      case 40:
      direction = 'dol';
      break;
      case 37:
      direction = 'lewo';
      break;
      case 39:
      direction = 'prawo';
      break;
  }
})


  setTimeout(drawPoint,500)

  setInterval(snakeMove,500)
  setInterval(eat,500)
  setInterval(drawSnake,500)
