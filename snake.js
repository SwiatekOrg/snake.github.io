const AllTiles = [...document.querySelectorAll('.snake-row')]

AllTiles.forEach((row,i)=>{
  AllTiles[i] = [...row.querySelectorAll('.snake-item')]
})

const snakePositions = []
let snakeActualyPosition = [5,5]
let direction = 38;

const drawSnake = () => {
  AllTiles.forEach(row=>{
    row.forEach(item=>{
      item.classList.remove('snake-head')
      item.classList.remove('snake-body')
    })
  })

  snakePositions.forEach(cords=>{
    if(cords === snakePositions[0]) AllTiles[cords[0]][cords[1]].classList.add('snake-head')
    else AllTiles[cords[0]][cords[1]].classList.add('snake-body')
  })
}


const snakeMove = () => {
 switch (direction) {
    case 38:
    snakeActualyPosition[1] -=1;
    break;
    case 40:
    snakeActualyPosition[1] +=1;
    break;
    case 37:
    snakeActualyPosition[0] -=1;
    break;
    case 39:
    snakeActualyPosition[0] +=1;
    break;
 }
 console.log(direction)
 for(let i = 0;i<snakeActualyPosition.length;i++){
   snakeActualyPosition[i] = snakeActualyPosition[i] < 0 ? 9 : snakeActualyPosition[i];
   snakeActualyPosition[i] = snakeActualyPosition[i] > 9 ? snakeActualyPosition[i] % 9: snakeActualyPosition[i];
 }
 snakePositions.shift('')
 snakePositions.unshift(snakeActualyPosition)
}

window.addEventListener('keydown',e=>{
  switch (e.keyCode) {
      case 40:
      direction = 40;
      break;
      case 37:
      direction = 37;
      break;
      case 39:
      direction = 39;
      break;
      case 38:
      direction = 38;
      break;
  }
  console.log(direction)
})


 setInterval(snakeMove,1000)
 setInterval(drawSnake,1000)
