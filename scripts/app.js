function init() {
  
  const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  const grid = document.getElementById('grid')
  const scoreDisplay = document.getElementById('score')

  const width = 30
  const height = width
  const cellCount = width * height
  const cells = []
  let score = 0
  let nextPosition


  class Player {
    constructor(cssClass, startingPosition, srcx, srcy) {
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
    }
    addSprite(position){
      cells[position].classList.add(this.cssClass)
      cells[position].style.backgroundPosition = `${this.srcx} ${this.srcy}`
    }
    // removePlayer(position){
    //   cells[position].classList.remove(this.cssClass)
    // }
    playerMovement(event){
      let direction
      switch (event.keyCode){
        case 38:
          direction = 'up'
          break
        case 40:
          direction = 'down'
          break
        case 37: 
          direction = 'left'
          break
        case 39:
          direction = 'right'
      }
      //check gate
      if (direction === 'right' && (pacman.currentPosition === 449 || pacman.currentPosition === 479)){
        nextPosition = pacman.currentPosition - width + 1
        handleMovement(pacman)
      } else if (direction === 'left' && (pacman.currentPosition === 420 || pacman.currentPosition === 450)){
        nextPosition = pacman.currentPosition + width - 1
        handleMovement(pacman)
      } else {
        handleMovement(pacman, direction)
      }
      //eat dot
      if (cells[pacman.currentPosition].firstChild){
        cells[pacman.currentPosition].removeChild(cells[pacman.currentPosition].firstChild)
        score += 10
        scoreDisplay.innerText = score
      }
    } 
  }

  function handleMovement(sprite, direction){
    if (direction === 'right'){
      nextPosition = sprite.currentPosition + 1
    } else if (direction === 'left'){
      nextPosition = sprite.currentPosition - 1
    } else if (direction === 'up'){
      nextPosition = sprite.currentPosition - width
    } else if (direction === 'down'){
      nextPosition = sprite.currentPosition + width
    }
    if (!cells[nextPosition].classList.contains('border') && !cells[nextPosition].classList.contains('ghost')){
      cells[sprite.currentPosition].classList.remove(sprite.cssClass)
      // sprite.removePlayer(sprite.currentPosition)
      sprite.addSprite(nextPosition)
      sprite.currentPosition = nextPosition
    } else {
      sprite.currentDirection = false
    }
  }  
  
  class Ghost {
    constructor(cssClass, startingPosition, srcx, srcy, currentDirection){
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
    }
    addSprite(position){
      cells[position].classList.add(this.cssClass)
      cells[position].style.backgroundPosition = `${this.srcx} ${this.srcy}`
    }
    moveRandom(){
      const ghostTimer = setInterval(() => {
        const directions = ['left', 'right', 'up', 'down']
        if (!this.currentDirection){
          this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
        }
        handleMovement(this, this.currentDirection)
      },200)
      setTimeout(()=>{
        clearInterval(ghostTimer)
      },10000)
    }
  }

  

  const pacman = new Player('pacman', 674, 'calc(100% / 19 * 18)', 'calc(100% / 18 * 2)')
  const ghosts = []
  const ghost1 = new Ghost('ghost', 463, 'calc((100% + 2px)/ 18 * 13)', 'calc((100%)/ 17)', 'up')
  const ghost2 = new Ghost('ghost', 464, 'calc((100% + 2px) / 18 * 14)', 'calc(100% / 17')
  const ghost3 = new Ghost('ghost', 465, 'calc((100% + 2px) / 18 * 15)', 'calc(100% / 17')
  const ghost4 = new Ghost('ghost', 466, 'calc((100% + 2px) / 18 * 16)', 'calc(100% / 17', 'up')
  ghosts.push(ghost1, ghost2, ghost3, ghost4)


  function createGrid(){
    let i = 0
    map.forEach(row => {
      row.forEach(number => {
        const cell = document.createElement('div')
        cell.dataset.index = i
        grid.appendChild(cell)
        // cell.innerText = i
        if (number === 0){
          cell.classList.add('border')
          const borderColours = ['magenta', 'blue', 'lightgreen', 'violet']
          const randIndex = Math.floor(Math.random() * borderColours.length)
          cell.style.backgroundColor = borderColours[randIndex]
        } if (number === 1 || number === 3){
          cell.classList.add('track')
          if (i !== pacman.startingPosition){
            const dot = document.createElement('div')
            cell.appendChild(dot)
            dot.classList.add('dot')
          }
        } else if (number === 3){
          cell.classList.add('gate')
        }
        cells.push(cell)
        i++
      })
    })
    pacman.addSprite(pacman.startingPosition)
    for (const ghost of ghosts) {
      ghost.addSprite(ghost.startingPosition)
    }

  }

  createGrid()
  ghosts.forEach(ghost => {
    ghost.moveRandom()
  })
  
  // if (i === cellCount / 2 || i === cellCount / 2 - width || i === cellCount / 2 - 1 || i === cellCount / 2 - 1 + width){
  //   cell.classList.add('gate')    
  // } else if (i < width ||  i > cellCount - width || i % width === width - 1 || i % width === 0) {
  //   cell.classList.add('border')

  document.addEventListener('keydown', pacman.playerMovement)
  
}

window.addEventListener('DOMContentLoaded', init)
