function init() {
  
  const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 8, 0],
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
    [0, 8, 1, 1, 0, 0, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 8, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  const grid = document.getElementById('grid')
  const scoreBoard = document.querySelector('#scoreBoard')
  const gridWrapper = document.querySelector('.grid-wrapper')
  const startButton = document.querySelector('button')
  const scoreDisplay = document.getElementById('score')
  const livesDisplay = document.getElementById('lives')
  let borderCells
  let collision
  


  const width = 30
  // const height = width
  // const cellCount = width * height
  let cells = []
  let score = 0
  let nextPosition
  let state = 'normal'
  let lives = 1
  let ghostTimers = []
  let active = false
  let highscore
  let pacmanTimer



  class Player {
    constructor(cssClass, startingPosition, srcx, srcy, currentDirection) {
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
    }
    eatDot(){
      if (cells[pacman.currentPosition].firstChild){
        cells[pacman.currentPosition].removeChild(cells[pacman.currentPosition].firstChild)
        score += 10
      } else if (cells[pacman.currentPosition].classList.contains('potion')){
        cells[pacman.currentPosition].classList.remove('potion')
        score += 100
        superState()
      }
      updateDisplay()
      const noDots = !cells.some(cell => cell.hasChildNodes())
      if (noDots){
        endGame('won')
      }
    }
    addSprite(position){
      cells[position].classList.add(this.cssClass)
      cells[position].style.backgroundPosition = `${this.srcx} ${this.srcy}`
    }
    // removePlayer(position){
    //   cells[position].classList.remove(this.cssClass) 
    // }
    playerMovement(event, player){
      // let previousDirection = direction
      // let direction
      switch (event.keyCode){
        case 38:
          this.newDirection = 'up'
          break
        case 40:
          this.newDirection = 'down'
          break
        case 37: 
          this.newDirection = 'left'
          break
        case 39:
          this.newDirection = 'right'
      }
      clearInterval(pacmanTimer)
      pacmanTimer = setInterval(()=>{
        //check gate
        if (this.currentDirection === 'right' && (player.currentPosition === 449 || player.currentPosition === 479)){
          nextPosition = player.currentPosition - width + 1
          handleMovement(player)
        } else if (this.currentDirection === 'left' && (player.currentPosition === 420 || player.currentPosition === 450)){
          nextPosition = player.currentPosition + width - 1
          handleMovement(player)
        //for any regular move, restricting ghost pen
        } else if (!(this.currentDirection === 'down' && (player.currentPosition === 344 || player.currentPosition === 345))) {
          handleMovement(player, this.currentDirection)
          if (this.currentDirection){
            this.previousDirection = this.currentDirection
          } else {
            this.currentDirection = this.previousDirection
          }
        }
        this.eatDot()
      }, 170) 
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
        // return false
      }
    }
  }  
  
  function resetSprite(sprite){
    cells[sprite.currentPosition].classList.remove(sprite.cssClass)
    sprite.addSprite(sprite.startingPosition)
    sprite.currentPosition = sprite.startingPosition
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
    resetGhost(){
      cells[this.currentPosition].classList.remove(this.cssClass)
      this.addSprite(this.startingPosition)
      this.currentPosition = this.startingPosition
    }
    moveRandom(ghost){
      stopGhosts()
      const ghostTimer = setInterval(() => { 
        this.checkCollision(state)
        const directions = ['left', 'right', 'up', 'down']
        if (!this.currentDirection){
          this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
        }
        handleMovement(ghost, ghost.currentDirection)
      },200)
      ghostTimers.push(ghostTimer)
    }
    checkCollision(state){
      collision = Math.abs(this.currentPosition - pacman.currentPosition) === 1 || Math.abs(this.currentPosition - pacman.currentPosition) === width
      if (collision){
        if (state === 'normal'){
          ghostTimers.forEach(timer => {
            clearInterval(timer)
          })
          active = false
          if (lives > 1){
            setTimeout(() => {
              lives--
              updateDisplay()
              ghosts.forEach(ghost => {
                ghost.resetGhost()
              })
              resetSprite(pacman)
              collision = false
            }, 2000)            
          } else {
            endGame('lost')
            collision = false
          }
        } else if (state === 'super'){
          score += 500
          updateDisplay()
          this.resetGhost()
        }
      }
    } 
  }
  function updateDisplay(){
    livesDisplay.innerText = '💿 '.repeat(lives)
    scoreDisplay.innerText = score
  }

  function superState(){
    state = 'super'
    ghosts.forEach(ghost => {
      ghost.srcx = '0px'
      ghost.srcy = '61%'
    })
    const tileTimer = setInterval(() => {
      addTileColours('violet', 'cyan', 'lightgreen', 'white')
    }, 500)
    setTimeout(() => {
      clearInterval(tileTimer)
      addTileColours('magenta', 'blue', 'lightgreen', 'violet')
      state = 'normal'
      ghosts.forEach(ghost => {
        ghost.srcy = '0.5%'
      })
      ghost1.srcx = '71.9%'
      ghost2.srcx = '77.5%'
      ghost3.srcx = '83.1%'
      ghost4.srcx = '88.7%'

    }, 10000)
  }


  const pacman = new Player('pacman', 450, '94.4%', '11.1%', 'right')
  const ghosts = []
  const ghost1 = new Ghost('ghost', 463, '71.9%', '0.5%', 'up')
  const ghost2 = new Ghost('ghost', 464, '77.5%', '0.5%', 'up')
  const ghost3 = new Ghost('ghost', 465, '83.1%', '0.5%', 'up')
  const ghost4 = new Ghost('ghost', 466, '88.7%', '0.5%', 'up')
  ghosts.push(ghost1, ghost2, ghost3, ghost4)


  function addTileColours(one, two, three, four){
    borderCells.forEach(cell => {
      const borderColours = [one, two, three, four]
      const randIndex = Math.floor(Math.random() * borderColours.length)
      cell.style.backgroundColor = borderColours[randIndex]
    })
  }
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
          borderCells = document.querySelectorAll('.border')
          addTileColours('magenta', 'blue', 'lightgreen', 'violet')
        } if (number === 1 || number === 3){
          cell.classList.add('track')
          // if (i !== pacman.startingPosition){
          const dot = document.createElement('div')
          cell.appendChild(dot) 
          dot.classList.add('dot')
          // }
        } else if (number === 3){
          cell.classList.add('gate')
        } else if (number === 8){
          cell.classList.add('track')
          cell.classList.add('potion')
        }
        if (i === 374 || i === 375){
          cell.style.borderTop = '1px solid gold'
        }
        cells.push(cell)
        i++
      })
    })
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

  function resetGame(){
    gridWrapper.classList.remove('grid-wrapper-end')
    while (gridWrapper.lastChild.nodeName === 'P'){
      gridWrapper.removeChild(gridWrapper.lastChild)
    }
    grid.style.display = 'flex'
    cells = []
    console.log(pacman.startingPosition)
    console.log(pacman.currentPosition)
    createGrid()
    scoreBoard.style.display = 'flex'
    startButton.innerText = 'LET\'S BOOGIE'
    lives = 3
    score = 0
    updateDisplay()
  }

  function startGame(e){
    if (!active && !collision){
      if (gridWrapper.classList.contains('grid-wrapper-end')){
        resetGame()
      }
      if (e.code === 'Space' || e.type === 'click'){
        stopGhosts()
        active = true
        
        pacman.addSprite(pacman.startingPosition)
        ghosts.forEach((ghost) => {
          ghost.moveRandom(ghost)
        })
      }
    }
  }
 
  function endGame(result) {
    setTimeout(() => {
      grid.style.display = 'none'
      while (grid.lastChild){
        grid.removeChild(grid.lastChild)
      }
      scoreBoard.style.display = 'none'
      gridWrapper.classList.add('grid-wrapper-end')
      const endMessage = document.createElement('p')
      const finalScore = endMessage.cloneNode()
      const message2 = endMessage.cloneNode()
      gridWrapper.appendChild(endMessage)
      gridWrapper.appendChild(finalScore)
      gridWrapper.appendChild(message2)
      if (result === 'won'){
        endMessage.innerHTML = 'Thats what we call Stayin\' Alive!'
        finalScore.innerHTML = `You completed Disco Pacman and scored</br><span> ${score} </span></br>points`
        if (gotHighscore()){
          localStorage.setItem('highscore', score)
          message2.innerHTML = `New Highscore! There ain't no stopping you now - you've been been corwned le freak of the week! Conratulations!<br/><span>${highscore}</span><br/>Highscore`
        } else {
          message2.innerHTML = `So, you rocked the boat... but you're gonna have to keep working on those moves to compete with the elite<br/><span>${highscore}</span><br/>Highscore`
        }
      } else if (result === 'lost'){
        endMessage.innerHTML = 'Lights on and everyone out!'
        finalScore.innerHTML = `Looks like you left <span id="funk"> The Funk </span> at home tonight! You got</br><span> ${score} </span></br>points`
        if (gotHighscore()){
          localStorage.setItem('highscore', score)
          message2.innerHTML = `Highscore!! Looks like the dancing queens all stayed home tonight but you've set the bar<br/><span>${highscore}</span><br/>Highscore`
        } else {
          message2.innerHTML = `You gotta keep working on those moves to compete with the elite...<br/><span>${highscore}</span><br/>Highscore`
        }
      }
      startButton.innerText = 'PLAY AGAIN'
    },1000)    
  }

  function gotHighscore(){
    highscore = localStorage.getItem('highscore')
    if (highscore === null || score > highscore) {
      return true
    } else {
      return false
    }
  }

  document.addEventListener('keydown', (event) => {
    pacman.playerMovement(event, pacman)
  })
  
  document.addEventListener('keydown', startGame)
  startButton.addEventListener('click', startGame)

}

window.addEventListener('DOMContentLoaded', init)
