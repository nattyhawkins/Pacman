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
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 8, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 8, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
  const grid = document.getElementById('grid')
  const h2 = document.querySelector('h2')
  const scoreBoard = document.querySelector('#scoreBoard')
  const gridWrapper = document.querySelector('.grid-wrapper')
  const mainAudio = document.querySelector('#mainAudio')
  const superAudio = document.querySelector('#superAudio')
  const speakers = document.querySelectorAll('.speaker')
  const startButton = document.querySelector('button')
  const scoreDisplay = document.getElementById('score')
  const livesDisplay = document.getElementById('lives')
  const discoBalls = document.querySelectorAll('.discoball')
  let tracks = ['DiscoInferno', 'Funkytown', 'LeFreak', 'StayinAlive', 'MidasTouch', 'IFeelLove']
  let track

  let borderCells
  let collision

  const width = 30
  let cells = []
  let score = 0
  let state = 'normal'
  let lives = 3
  let ghostTimers = []
  let active = false
  let highscore
  let pacmanTimer
  let tileTimer
  let superTimer
  let speakerTimer
  let noDots

  class Player {
    constructor(cssClass, startingPosition, srcx, srcy, currentDirection) {
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
    }

    resetPacman() {
      cells[this.currentPosition].classList.remove(this.cssClass)
      this.currentDirection = 'right'
      this.newDirection = 'right'
      this.currentPosition = this.startingPosition
    }
    eatDot() {
      if (cells[pacman.currentPosition].firstChild) {
        cells[pacman.currentPosition].removeChild(cells[pacman.currentPosition].firstChild)
        score += 10
      } else if (cells[pacman.currentPosition].classList.contains('star')) {
        cells[pacman.currentPosition].classList.remove('star')
        score += 100
        superState()
      }
      updateDisplay()
      noDots = !cells.some(cell => cell.hasChildNodes())
      if (noDots) {
        endGame('won')
      }
    }
    animate(baseFrame) {
      clearInterval(this.animationTimer)
      this.animationTimer = setInterval(() => {
        const frameSize = 5.5
        if (this.srcy < (baseFrame + (2 * frameSize))) {
          this.srcy += frameSize
        } else {
          this.srcy = baseFrame
        }
        cells[this.currentPosition].style.backgroundPosition = `${this.srcx}% ${this.srcy}%`

      }, 90)
    }
    addSprite(position) {
      let firstFrame
      if (this.currentDirection === 'right') {
        this.srcy = pacmanY.right
        firstFrame = pacmanY.right
      } else if (this.currentDirection === 'left') {
        this.srcy = pacmanY.left
        firstFrame = pacmanY.left
      } else if (this.currentDirection === 'up') {
        this.srcy = pacmanY.up
        firstFrame = pacmanY.up
      } else if (this.currentDirection === 'down') {
        this.srcy = pacmanY.down
        firstFrame = pacmanY.down
      }

      cells[position].style.backgroundPosition = `${this.srcx}% ${this.srcy}%`
      cells[position].classList.add(this.cssClass)
      this.animate(firstFrame - 5.5)
    }

    testNewDirection(event) {
      switch (event.keyCode) {
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
          break
      }
      if (this.nextPositionValid(pacman)) {
        this.currentDirection = this.newDirection
      } else {
        clearInterval(this.nextTurn)
        this.nextTurn = setInterval(() => {
          if (this.nextPositionValid(pacman)) {
            this.currentDirection = this.newDirection
            clearInterval(this.nextTurn)
          }
        }, 50)
        setTimeout(() => {
          clearInterval(this.nextTurn)
        }, 350)
      }
    }

    nextPositionValid(player) {
      this.nextPosition = getNextPosition(player, player.newDirection)
      if (!cells[this.nextPosition].classList.contains('border') && !cells[this.nextPosition].classList.contains('ghost')) {
        return true
      }
    }

    moveCurrentDirection(player) {
      clearInterval(pacmanTimer)
      pacmanTimer = setInterval(() => {
        //check gate
        this.eatDot()
        if (this.currentDirection === 'right' && (this.currentPosition === 449 || this.currentPosition === 479)) {
          this.nextPosition = this.currentPosition - width + 1
          handleMovement(player)
        } else if (this.currentDirection === 'left' && (this.currentPosition === 420 || this.currentPosition === 450)) {
          this.nextPosition = this.currentPosition + width - 1
          handleMovement(player)
          //for any regular move, restricting ghost pen
        } else if (!(this.currentDirection === 'down' && (this.currentPosition === 344 || this.currentPosition === 345))) {
          handleMovement(player, this.currentDirection)
        }
      }, 170)
    }
  }

  function getNextPosition(sprite, direction) {
    if (direction === 'right') {
      sprite.nextPosition = sprite.currentPosition + 1
    } else if (direction === 'left') {
      sprite.nextPosition = sprite.currentPosition - 1
    } else if (direction === 'up') {
      sprite.nextPosition = sprite.currentPosition - width
    } else if (direction === 'down') {
      sprite.nextPosition = sprite.currentPosition + width
    }
    return sprite.nextPosition
  }
  function handleMovement(sprite, direction) {
    if (active) {
      if (direction) {
        sprite.nextPosition = getNextPosition(sprite, direction)
      }
      if (cells[sprite.nextPosition].classList.contains('border') 
      || cells[sprite.nextPosition].classList.contains('ghost') 
      || cells[sprite.nextPosition].classList.contains('pacman')) {
        sprite.currentDirection = false
      } else if (sprite.currentDirection === 'down' 
        && (sprite.currentPosition === 344 
        || sprite.currentPosition === 345)) {
        sprite.currentDirection = false
      } else {
        cells[sprite.currentPosition].classList.remove(sprite.cssClass)
        sprite.addSprite(sprite.nextPosition)
        sprite.currentPosition = sprite.nextPosition
      }
    }
  }

  class Ghost {
    constructor(cssClass, startingPosition, nextPosition, srcx, srcy, currentDirection, delay, behaviour, speed) {
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.nextPosition = nextPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
      this.delay = delay
      this.behaviour = behaviour
      this.speed = speed

    }
    addSprite(position) {
      let firstFrame
      let ghostState
      if (state === 'normal') {
        ghostState = ghostY
        if (this.currentDirection === 'right') {
          this.srcy = ghostState.right
          firstFrame = ghostState.right
        } else if (this.currentDirection === 'left') {
          this.srcy = ghostState.left
          firstFrame = ghostState.left
        } else if (this.currentDirection === 'up') {
          this.srcy = ghostState.up
          firstFrame = ghostState.up
        } else if (this.currentDirection === 'down') {
          this.srcy = ghostState.down
          firstFrame = ghostState.down
        }
      } else if (state === 'super') {
        if (this.srcy < 89) {
          this.srcy += 5.5
        } else {
          this.srcy = ghostSuperY.green
        }
        firstFrame = this.srcy
      }

      cells[position].style.backgroundPosition = `${this.srcx}% ${this.srcy}%`
      cells[position].classList.add(this.cssClass)
      this.animate(firstFrame)
    }
    animate(baseFrame) {
      let speed
      let frameSize
      if (state === 'normal') {
        speed = 170
        frameSize = 5.2
      } else if (state === 'super') {
        speed = 800
        frameSize = 5.5
      }
      clearInterval(this.animationTimer)
      this.animationTimer = setInterval(() => {
        if (this.srcy < (baseFrame + frameSize)) {
          this.srcy += frameSize
        } else {
          this.srcy = baseFrame
        }
        cells[this.currentPosition].style.backgroundPosition = `${this.srcx}% ${this.srcy}%`
      }, speed)
    }
    exitPen(ghost) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        //check if current position is in pen (not on main track) > go to 344
        if (!cells[this.currentPosition].classList.contains('track')) {
          this.chase(ghost, 344)
        } else {
          //if out of pen, select behaviour
          if (state === 'normal') {
            if (this.behaviour === 'moveRandom') {
              this.moveRandom(ghost)
            } else if (this.behaviour === 'chase') {
              this.chase(ghost, pacman.currentPosition)
            }
          } else if (state === 'super') {
            this.flee(ghost)
          }
        }
      }, this.speed)
      ghostTimers.push(this.timer)
    }
    resetGhost() {
      cells[this.currentPosition].classList.remove(this.cssClass)
      this.addSprite(this.startingPosition)
      this.currentPosition = this.startingPosition
      this.currentDirection = 'up'
    }
    // exitPen(ghost){
    //   clearInterval(this.timer)
    //   let i = 0
    //   this.timer = setInterval(() => {
    //     if (i < ghost.exitSequence.length) {
    //       handleMovement(ghost, ghost.exitSequence[i])
    //       i++
    //     } else {
    //       if (state === 'normal'){
    //         if (this.behaviour === 'moveRandom'){
    //           this.moveRandom(ghost)
    //         } else if (this.behaviour === 'chase'){
    //           this.chase(ghost, pacman.currentPosition)
    //         }
    //       } else if (state === 'super'){
    //         this.flee(ghost)
    //       }
    //     }
    //   }, this.speed)
    //   ghostTimers.push(this.timer)
    // }
    moveRandom(ghost) {
      this.checkCollision(state)
      const directions = ['left', 'right', 'up', 'down']
      if (!this.currentDirection) {
        this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
      }
      handleMovement(ghost, ghost.currentDirection)
    }

    chase(ghost, targetPosition) {
      this.checkCollision(state)
      ///get a random direction if not got one
      const directions = ['left', 'right', 'up', 'down']
      if (!this.currentDirection) {
        this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
      }
      //get next position
      this.nextPosition = getNextPosition(ghost, ghost.currentDirection)
      //get coords pacman and ghost
      this.currentCoords = spriteCoordinates(ghost.currentPosition)
      this.nextCoords = spriteCoordinates(ghost.nextPosition)
      const targetCoords = spriteCoordinates(targetPosition)
      //if new position closer, move
      if (Math.abs(targetCoords[0] - this.nextCoords[0]) < Math.abs(targetCoords[0] - this.currentCoords[0]) || Math.abs(targetCoords[1] - this.nextCoords[1]) < Math.abs(targetCoords[1] - this.currentCoords[1])) {
        handleMovement(ghost, ghost.currentDirection)
      } else {
        this.currentDirection = false
        // this.chase(ghost)
      }
    }
    flee(ghost) {
      this.checkCollision(state)
      const directions = ['left', 'right', 'up', 'down']
      if (!this.currentDirection) {
        this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
      }
      //get next position
      this.nextPosition = getNextPosition(ghost, ghost.currentDirection)
      //get coords pacman and ghost
      this.currentCoords = spriteCoordinates(ghost.currentPosition)
      this.nextCoords = spriteCoordinates(ghost.nextPosition)
      pacman.currentCoords = spriteCoordinates(pacman.currentPosition)
      //if new position closer, move
      if (Math.abs(pacman.currentCoords[0] - this.nextCoords[0]) > Math.abs(pacman.currentCoords[0] - this.currentCoords[0]) || Math.abs(pacman.currentCoords[1] - this.nextCoords[1]) > Math.abs(pacman.currentCoords[1] - this.currentCoords[1])) {
        handleMovement(ghost, ghost.currentDirection)
      } else {
        this.currentDirection = false
      }
    }
    checkCollision(state) {
      collision = Math.abs(this.currentPosition - pacman.currentPosition) === 1 || Math.abs(this.currentPosition - pacman.currentPosition) === width
      if (collision) {
        if (state === 'normal') {
          freezeGame()
          if (lives > 1) {
            setTimeout(() => {
              lives--
              updateDisplay()
              ghosts.forEach(ghost => {
                ghost.resetGhost()
              })
              pacman.resetPacman()
              collision = false
            }, 1000)
          } else {
            endGame('lost')
          }
        } else if (state === 'super') {
          score += 500
          updateDisplay()
          this.resetGhost()
          const ghost = this
          this.exitPen(ghost)
        }
      }

    }
  }

  //INITIATE CHARACTERS
  const pacmanY = { 'right': 5.5, 'down': 22, 'left': 38.5, 'up': 55 }
  const ghostY = { 'right': 0.5, 'down': 11.5, 'left': 22.5, 'up': 33.5 }
  // const ghostSuperY = { 'right': 61.5, 'down': 72.5, 'left': 83.5, 'up': 94.5 }
  const ghostSuperY = { 'purple': 61.5, 'green': 66.5 }

  const pacman = new Player('pacman', 450, 94.4, 0, 'right')
  const ghosts = []
  const ghost1 = new Ghost('ghost', 463, 464, 71.9, ghostY.right, 'right', 3000, 'chase', 200)
  const ghost2 = new Ghost('ghost', 464, 434, 77.5, ghostY.up, 'up', 1500, 'moveRandom', 200)
  const ghost3 = new Ghost('ghost', 465, 435, 83, ghostY.up, 'left', 0, 'chase', 190)
  const ghost4 = new Ghost('ghost', 466, 465, 88.3, ghostY.left, 'up', 4000, 'moveRandom', 210)
  ghosts.push(ghost1, ghost2, ghost3, ghost4)


  function spriteCoordinates(position) {
    const x = position % width
    const y = Math.floor(position / width)
    return [x, y]
  }
  function updateDisplay() {
    livesDisplay.innerText = '💿 '.repeat(lives)
    scoreDisplay.innerText = score
  }

  function superState() {
    state = 'super'
    playSuperAudio()
    ghosts.forEach(ghost => {
      ghost.srcx = 0.5
      ghost.srcy = 61
      ghost.addSprite(ghost.currentPosition)
    })
    addTileColours('blue', 'purple', '#7F00FF', 'navy')
    clearInterval(tileTimer)
    tileTimer = setInterval(() => {
      addTileColours('blue', 'purple', '#7F00FF', 'navy')
      discoBalls.forEach(ball => {
        ball.classList.toggle('flash')
      })
    }, 900)
    clearInterval(superTimer)
    superTimer = setTimeout(() => {
      if (!superAudio.paused) {
        mainAudio.play()
      }
      superAudio.pause()
      clearInterval(tileTimer)
      addTileColours('magenta', 'blue', 'lightgreen', 'violet')
      state = 'normal'
      ghost1.srcx = 71.9
      ghost2.srcx = 77.5
      ghost3.srcx = 83
      ghost4.srcx = 88.3
      ghosts.forEach(ghost => {
        ghost.srcy = 0.5
        ghost.addSprite(ghost.currentPosition)
      })
    }, 10000)
  }
  function addTileColours(one, two, three, four) {
    borderCells.forEach(cell => {
      const borderColours = [one, two, three, four]
      const randIndex = Math.floor(Math.random() * borderColours.length)
      cell.style.backgroundColor = borderColours[randIndex]
    })
  }
  function createGrid() {
    let i = 0
    map.forEach(row => {
      row.forEach(number => {
        const cell = document.createElement('div')
        cell.dataset.index = i
        grid.appendChild(cell)
        if (number === 0) {
          cell.classList.add('border')
          borderCells = document.querySelectorAll('.border')
          addTileColours('magenta', 'blue', 'lightgreen', 'violet')
        } if (number === 1 || number === 3) {
          cell.classList.add('track')
          const dot = document.createElement('div')
          cell.appendChild(dot)
          dot.classList.add('dot')
        } else if (number === 3) {
          cell.classList.add('gate')
        } else if (number === 8) {
          cell.classList.add('track')
          cell.classList.add('star')
        }
        if (i === 374 || i === 375) {
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
  function freezeGame() {
    clearInterval(pacmanTimer)
    ghostTimers.forEach(timer => {
      clearInterval(timer)
      ghostTimers = []
      active = false
    })
  }

  function resetGame() {
    clearInterval(tileTimer)
    document.body.style.backgroundImage = 'radial-gradient(black, #0f0f0f)'
    gridWrapper.classList.remove('grid-wrapper-end')
    while (gridWrapper.lastChild.nodeName === 'P') {
      gridWrapper.removeChild(gridWrapper.lastChild)
    }
    grid.style.display = 'flex'
    h2.style.display = 'block'
    pacman.resetPacman()
    cells = []
    createGrid()
    scoreBoard.style.display = 'flex'
    startButton.innerText = 'SPACE TO START'
    lives = 3
    score = 0
    updateDisplay()
  }
  let initiatedOnce = false
  function startGame(e) {
    if (!initiatedOnce) {
      initiatedOnce = true
      if (!active && !collision) {

        if (gridWrapper.classList.contains('grid-wrapper-end')) {
          resetGame()
        }
        if (e.code === 'Space' || e.type === 'click') {
          ghostTimers.forEach(timer => {
            clearInterval(timer)
          })
          ghostTimers = []
          active = true
          pacman.currentDirection = 'right'
          pacman.addSprite(pacman.startingPosition)
          pacman.moveCurrentDirection(pacman)
          ghosts.forEach((ghost) => {
            setTimeout(() => {
              ghost.exitPen(ghost)
            }, ghost.delay)
          })
        }
      }
      setTimeout(() => initiatedOnce = false, 5000)
    }
  }

  function endGame(result) {
    freezeGame()
    setTimeout(() => {
      ghosts.forEach(ghost => {
        ghost.resetGhost()
      })
      pacman.resetPacman()
      collision = false
      grid.style.display = 'none'
      h2.style.display = 'none'
      document.body.style.backgroundImage = 'url(./assets/SmokeyBackground.jpeg)'
      while (grid.lastChild) {
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
      if (result === 'won') {
        endMessage.innerHTML = 'Thats what we call Stayin\' Alive!'
        finalScore.innerHTML = `You completed Disco Pacman and scored</br><span> ${score} </span></br><br/>points`
        if (gotHighscore()) {
          localStorage.setItem('highscore', score)
          message2.innerHTML = `New Highscore! There ain't no stopping you now!<br/><span>${highscore}</span><br/><br/>Previous Highscore`
          playNewTrack('AintNoStoppingUsNow', '00:01:43')
        } else {
          message2.innerHTML = `So, you rocked the boat... but you're gonna have to keep working on those moves to compete with the elite<br/><span>${highscore}</span><br/><br/>Highscore`
          playNewTrack('RockTheBoat', '00:00:18')
        }
      } else if (result === 'lost') {
        endMessage.innerHTML = 'Lights on!'
        finalScore.innerHTML = `Looks like you left <span id="funk"> The Funk </span> at home! You got</br><span> ${score} </span></br><br/>points`
        if (gotHighscore()) {
          localStorage.setItem('highscore', score)
          message2.innerHTML = `Highscore!! Looks like the dancing queens all stayed home tonight as well cus you still came out on top...<br/><span>${highscore}</span><br/><br/>Previous Highscore`
          playNewTrack('DancingQueen', '00:00:22')
        } else {
          message2.innerHTML = `You gotta keep working on those moves to compete with the elite...<br/><span>${highscore}</span><br/><br/>Highscore`
          playNewTrack('CarWash', '00:01:03')
        }
      }
      startButton.innerText = 'PLAY AGAIN'
      clearInterval(tileTimer)
      tileTimer = setInterval(() => {
        discoBalls.forEach(ball => {
          ball.classList.toggle('flash')
        })
      }, 500)
    }, 500)
  }

  function gotHighscore() {
    highscore = localStorage.getItem('highscore')
    if (highscore === null || score > highscore) {
      return true
    } else {
      return false
    }
  }

  //AUDIO FUNCTIONS
  function playSuperAudio() {
    if (!mainAudio.paused) {
      mainAudio.pause()
      superAudio.play()
    }
  }

  function pickNewTrack() {
    const randIndex = Math.floor(Math.random() * tracks.length)
    track = tracks[randIndex]
    tracks = tracks.filter(item => item !== track)
    mainAudio.src = `./audio/${track}.mp3`
  }

  function musicSwitch(audio) {
    if (audio.paused) {
      audio.play()
      speakerTimer = setInterval(() => {
        speakers.forEach(speaker => {
          speaker.classList.toggle('speakerPulse')
        })
      }, 500)
    } else {
      audio.pause()
      clearInterval(speakerTimer)
    }
  }

  function playNewTrack(track, timeStamp) {
    if (!mainAudio.paused || !superAudio.paused) {
      superAudio.pause()
      mainAudio.src = `./audio/${track}.mp3#t=${timeStamp}`
      mainAudio.play()
    } else {
      mainAudio.src = `./audio/${track}.mp3#t=${timeStamp}`
    }
  }

  //FUNCTIONS CALLED IMMIDEDIATELY
  createGrid()
  pickNewTrack()

  //EVENT LISTENERS

  document.addEventListener('keydown', (event) => {
    pacman.testNewDirection(event)
  })
  document.addEventListener('keydown', startGame)
  startButton.addEventListener('click', startGame)
  speakers.forEach(speaker => {
    speaker.addEventListener('click', () => {
      if (state === 'normal') {
        musicSwitch(mainAudio)
      } else if (state === 'super') {
        musicSwitch(superAudio)
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', init)
