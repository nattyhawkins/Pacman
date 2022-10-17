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
  const header = document.querySelector('header')
  const scoreDisplay = document.getElementById('score')
  const livesDisplay = document.getElementById('lives')

  const width = 30
  const height = width
  const cellCount = width * height
  const cells = []
  let score = 0
  let nextPosition
  let state = 'normal'
  let lives = 3
  let ghostTimers = []
  let active = false


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
    playerMovement(event, player){
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
      if (direction === 'right' && (player.currentPosition === 449 || player.currentPosition === 479)){
        nextPosition = player.currentPosition - width + 1
        handleMovement(player)
      } else if (direction === 'left' && (player.currentPosition === 420 || player.currentPosition === 450)){
        nextPosition = player.currentPosition + width - 1
        handleMovement(player)
      } else {
        handleMovement(player, direction)
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
    if (active){
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
  }  
  
  function resetSprite(sprite){
    cells[sprite.currentPosition].classList.remove(sprite.cssClass)
    sprite.addSprite(sprite.startingPosition)
    sprite.currentPosition = sprite.startingPosition
    setTimeout(1000)
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
    moveRandom(ghost){
      stopGhosts()
      const ghostTimer = setInterval(() => { 
        const directions = ['left', 'right', 'up', 'down']
        if (!this.currentDirection){
          this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
        }
        handleMovement(ghost, ghost.currentDirection)
        this.checkCollision(state)
      },200)
      ghostTimers.push(ghostTimer)
    }
    checkCollision(state){
      const collision = Math.abs(this.currentPosition - pacman.currentPosition) === 1 || Math.abs(this.currentPosition - pacman.currentPosition) === width
      if (collision){
        if (state === 'normal'){
          ghostTimers.forEach(timer => {
            clearInterval(timer)
          })
          active = false
          if (lives > 1){
            setTimeout(() => {
              lives--
              livesDisplay.innerText = '💿'.repeat(lives)
              ghosts.forEach(ghost => {
                resetSprite(ghost)
              })
              resetSprite(pacman)
            }, 2000)

            
          } else {
            endGame('lost')
          }
        } 
      }
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
    ghosts.forEach(ghost => {
      ghost.addSprite(ghost.startingPosition)
    })

  }

  createGrid()

  function stopGhosts(){
    if (ghostTimers.length >= 4){
      ghostTimers.forEach(timer => {
        clearInterval(timer)
        ghostTimers = []
      })
    }
  }

  function startGame(e){
    if (e.code === 'Space'){
      stopGhosts()
      active = true
      ghosts.forEach((ghost) => {
        ghost.moveRandom(ghost)
      })
    }
  }
 
  function endGame(result) {
    grid.style.display = 'none'
    header.style.display = 'none'
    main.classList.replace
    if (result === 'won'){
      
      
    } else if (result === 'lost'){

    }
  }

  
  document.addEventListener('keydown', (event) => {
    pacman.playerMovement(event, pacman)
  })
  
  document.addEventListener('keydown', startGame)

}

window.addEventListener('DOMContentLoaded', init)
