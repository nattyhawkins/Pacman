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
    [3, 1, 1, 1, 1, 8, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
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
  const scoreBoard = document.querySelector('#scoreBoard')
  const gridWrapper = document.querySelector('.grid-wrapper')
  const mainAudio = document.querySelector('#mainAudio')
  const superAudio = document.querySelector('#superAudio')
  const speakers = document.querySelectorAll('.speaker')
  const startButton = document.querySelector('button')
  const scoreDisplay = document.getElementById('score')
  const livesDisplay = document.getElementById('lives')

  let tracks = ['DiscoInferno', 'Funkytown', 'LeFreak', 'StayinAlive', 'MidasTouch', 'NightFever']
  let track

  let borderCells
  let collision

  const width = 30
  // const height = width
  // const cellCount = width * height
  let cells = []
  let score = 0
  let state = 'normal'
  let lives = 1
  let ghostTimers = []
  let active = false
  let highscore
  let pacmanTimer
  let tileTimer
  let superTimer
  let noDots

  class Player {
    constructor(cssClass, startingPosition, nextPosition, srcx, srcy, currentDirection) {
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
      this.newDirection = currentDirection
      this.nextPosition = nextPosition
    }
    resetPacman(){
      cells[this.currentPosition].classList.remove(this.cssClass)
      this.currentPosition = this.startingPosition
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
      noDots = !cells.some(cell => cell.hasChildNodes())
      if (noDots){
        endGame('won')
      }
      console.log('clearing interval')
      clearInterval(pacmanTimer)
    }
    addSprite(position){
      cells[position].classList.add(this.cssClass)
      cells[position].style.backgroundPosition = `${this.srcx} ${this.srcy}`
    }
  
    testNewDirection(event, player){
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
          break
      }
      this.nextPosition = getNextPosition(player, player.newDirection)
      if (!cells[this.nextPosition].classList.contains('border') && !cells[this.nextPosition].classList.contains('ghost')){
        this.currentDirection = this.newDirection
      } else {
        clearInterval(this.nextTurn)
        this.nextTurn = setInterval(() => {
          this.nextPosition = getNextPosition(player, player.newDirection)
          if (!cells[this.nextPosition].classList.contains('border') && !cells[this.nextPosition].classList.contains('ghost')){
            this.currentDirection = this.newDirection
            clearInterval(this.nextTurn)
          }
        }, 50)
        setTimeout(() => {
          clearInterval(this.nextTurn)
        }, 350)
      }
    }

    moveCurrentDirection(player){
      clearInterval(pacmanTimer)
      pacmanTimer = setInterval(()=>{
        //check gate
        this.eatDot()
        if (this.currentDirection === 'right' && (this.currentPosition === 449 || this.currentPosition === 479)){
          this.nextPosition = this.currentPosition - width + 1
          handleMovement(player)
        } else if (this.currentDirection === 'left' && (this.currentPosition === 420 || this.currentPosition === 450)){
          this.nextPosition = this.currentPosition + width - 1
          handleMovement(player)
        //for any regular move, restricting ghost pen
        } else if (!(this.currentDirection === 'down' && (this.currentPosition === 344 || this.currentPosition === 345))) {
          handleMovement(player, this.currentDirection)
        }
      }, 170) 
    }
  }

  function getNextPosition(sprite, direction){
    if (direction === 'right'){
      sprite.nextPosition = sprite.currentPosition + 1
    } else if (direction === 'left'){
      sprite.nextPosition = sprite.currentPosition - 1
    } else if (direction === 'up'){
      sprite.nextPosition = sprite.currentPosition - width
    } else if (direction === 'down'){
      sprite.nextPosition = sprite.currentPosition + width
    }
    return sprite.nextPosition
  }

  function handleMovement(sprite, direction){
    if (active){ 
      if (direction){
        sprite.nextPosition = getNextPosition(sprite, direction)
      }
      if (cells[sprite.nextPosition].classList.contains('border') || cells[sprite.nextPosition].classList.contains('ghost') || cells[sprite.nextPosition].classList.contains('pacman')){
        sprite.currentDirection = false
      } else if (sprite.currentDirection === 'down' && (sprite.currentPosition === 344 || sprite.currentPosition === 345)){
        sprite.currentDirection = false
      } else {
        cells[sprite.currentPosition].classList.remove(sprite.cssClass)
        sprite.addSprite(sprite.nextPosition)
        sprite.currentPosition = sprite.nextPosition
      }
    }
  }  

  class Ghost {
    constructor(cssClass, startingPosition, nextPosition, srcx, srcy, currentDirection, delay, exitSequence){
      this.cssClass = cssClass
      this.startingPosition = startingPosition
      this.nextPosition = nextPosition
      this.currentPosition = startingPosition
      this.srcx = srcx
      this.srcy = srcy
      this.currentDirection = currentDirection
      this.delay = delay
      this.exitSequence = exitSequence
    
    }
    addSprite(position){
      cells[position].classList.add(this.cssClass)
      cells[position].style.backgroundPosition = `${this.srcx} ${this.srcy}`
    }
    resetGhost(){
      cells[this.currentPosition].classList.remove(this.cssClass)
      this.addSprite(this.startingPosition)
      this.currentPosition = this.startingPosition
      this.currentDirection = 'up'
    }
    exitPen(ghost){
      clearInterval(this.timer)
      let i = 0
      this.timer = setInterval(() => {
        if (i < ghost.exitSequence.length) {
          handleMovement(ghost, ghost.exitSequence[i])
          i++
        } else {
          this.moveRandom(ghost)
        }
      }, 200)
      ghostTimers.push(this.timer)
      console.log(ghostTimers)
    }
    moveRandom(ghost){
      this.checkCollision(state)
      const directions = ['left', 'right', 'up', 'down']
      if (!this.currentDirection){
        this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
      }
      handleMovement(ghost, ghost.currentDirection)
    }
    chase(ghost){
      this.checkCollision(state)
      ///get a random direction if not got one
      if (!this.currentDirection){
        this.currentDirection = directions[Math.floor(Math.random() * directions.length)]
      }
      //get next position
      this.nextPosition = getNextPosition(ghost, ghost.currentDirection)
      //check if closer to pacman on x axis
      this.currentCoords = spriteCoordinates(ghost.currentPosition)
      this.nextCoords = spriteCoordinates(ghost.nextPosition)
      pacman.currentCoords = spriteCoordinates(pacman.currentPosition)

      if (Math.abs(pacman.currentCoords[0] - this.nextCoords[0]) < Math.abs(pacman.currentCoords[0] - this.currentCoords[0]) || Math.abs(pacman.currentCoords[1] - this.nextCoords[1]) < Math.abs(pacman.currentCoords[1] - this.currentCoords[1]))

    }
    checkCollision(state){
      collision = Math.abs(this.currentPosition - pacman.currentPosition) === 1 || Math.abs(this.currentPosition - pacman.currentPosition) === width
      if (collision){
        if (state === 'normal'){
          ghostTimers.forEach(timer => {
            clearInterval(timer)
          })
          ghostTimers = []
          active = false
          if (lives > 1){
            setTimeout(() => {
              lives--
              updateDisplay()
              // pickNewTrack() add rewind sound ??
              ghosts.forEach(ghost => {
                ghost.resetGhost()
              })
              pacman.resetPacman()
              collision = false
            }, 1000) 
          } else {
            endGame('lost')
          }          
        } else if (state === 'super'){
          score += 500
          updateDisplay()
          this.resetGhost()
          const ghost = this
          this.exitPen(ghost)
        }
      }
      
    }
  }

  function spriteCoordinates(position){
    const x = position % width
    const y = Math.floor(position / width)
    resturn [x,y]
  }

  function updateDisplay(){
    livesDisplay.innerText = '💿 '.repeat(lives)
    scoreDisplay.innerText = score
  }


  function playSuperAudio(){
    if (!mainAudio.paused){
      mainAudio.pause()
      superAudio.play()
    } 
  }

  function superState(){
    state = 'super'
    playSuperAudio()
    ghosts.forEach(ghost => {
      ghost.srcx = '0px'
      ghost.srcy = '61%'
    })
    clearInterval(tileTimer)
    tileTimer = setInterval(() => {
      addTileColours('lime', 'cyan', 'violet', 'aquamarine')
    }, 500)
    clearInterval(superTimer)
    superTimer = setTimeout(() => {
      if (!superAudio.paused){
        mainAudio.play()
      }
      superAudio.pause()
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

  const pacman = new Player('pacman', 450, 451,'94.4%', '11.1%', 'right')
  const ghosts = []
  const ghost1 = new Ghost('ghost', 463, 464, '71.9%', '0.5%', 'up', 4000, ['right','up'])
  const ghost2 = new Ghost('ghost', 464, 434, '77.5%', '0.5%', 'up', 2000, ['up'])
  const ghost3 = new Ghost('ghost', 465, 435, '83.1%', '0.5%', 'up', 0, ['up'])
  const ghost4 = new Ghost('ghost', 466, 465, '88.7%', '0.5%', 'up', 6000, ['left', 'up'])
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
          // addTileColours('lightgreen', 'cyan', 'lime', 'white')
        } if (number === 1 || number === 3){
          cell.classList.add('track')
          const dot = document.createElement('div')
          cell.appendChild(dot) 
          dot.classList.add('dot')
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
  pickNewTrack()

  function resetGame(){
    gridWrapper.classList.remove('grid-wrapper-end')
    while (gridWrapper.lastChild.nodeName === 'P'){
      gridWrapper.removeChild(gridWrapper.lastChild)
    }
    grid.style.display = 'flex'
    cells = []
    createGrid()
    scoreBoard.style.display = 'flex'
    startButton.innerText = 'GO'
    lives = 3
    score = 0
    updateDisplay()
  }

  function startGame(e){
    if (!active && !collision){
      console.log(active)
      if (gridWrapper.classList.contains('grid-wrapper-end')){
        resetGame()
      }
      if (e.code === 'Space' || e.type === 'click'){
        ghostTimers.forEach(timer => {
          clearInterval(timer)
        })
        ghostTimers = []
        console.log(ghostTimers)
        active = true
        
        pacman.addSprite(pacman.startingPosition)
        pacman.moveCurrentDirection(pacman)
        ghosts.forEach((ghost) => {
          setTimeout(() => {
            ghost.exitPen(ghost)
          }, ghost.delay)
        })
      }
    }
  }
 
  function endGame(result) {
    setTimeout(() => {
      ghosts.forEach(ghost => {
        ghost.resetGhost()
      })
      pacman.resetPacman()
      collision = false
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
          message2.innerHTML = `New Highscore! There ain't no stopping you now - you've been been crowned le freak of the week! Conratulations!<br/><span>${highscore}</span><br/>Highscore`
          playNewTrack('AintNoStoppingUsNow', '00:01:43')
        } else {
          message2.innerHTML = `So, you rocked the boat... but you're gonna have to keep working on those moves to compete with the elite<br/><span>${highscore}</span><br/>Highscore`
          playNewTrack('RockTheBoat', '00:00:18')
        }
      } else if (result === 'lost'){
        endMessage.innerHTML = 'Lights on!'
        finalScore.innerHTML = `Looks like you left <span id="funk"> The Funk </span> at home tonight! You got</br><span> ${score} </span></br>points`
        if (gotHighscore()){
          localStorage.setItem('highscore', score)
          message2.innerHTML = `Highscore!! Looks like the dancing queens all stayed home tonight cus you still came out on top...<br/><span>${highscore}</span><br/>Highscore`
          playNewTrack('DancingQueen', '00:00:22')
        } else {
          message2.innerHTML = `You gotta keep working on those moves to compete with the elite...<br/><span>${highscore}</span><br/>Highscore`
          playNewTrack('CarWash', '00:01:03')
        }
      }
      startButton.innerText = 'PLAY AGAIN'
    },500)    
  }

  function gotHighscore(){
    highscore = localStorage.getItem('highscore')
    if (highscore === null || score > highscore) {
      return true
    } else {
      return false
    }

  }

  function pickNewTrack(){
    const randIndex = Math.floor(Math.random() * tracks.length)
    track = tracks[randIndex]
    console.log(track)
    tracks = tracks.filter(item => item !== track)
    mainAudio.src = `./audio/${track}.mp3`
  }

  function musicSwitch(audio){
    if (audio.paused){
      audio.play()
    } else {
      audio.pause()
    }
  }

  function playNewTrack(track, timeStamp){
    superAudio.pause()
    if (!mainAudio.paused){
      mainAudio.src = `./audio/${track}.mp3#t=${timeStamp}`
      mainAudio.play()
    } else {
      mainAudio.src = `./audio/${track}.mp3#t=${timeStamp}`
    }
  }
  document.addEventListener('keydown', (event) => {
    pacman.testNewDirection(event, pacman)
  })
  
  document.addEventListener('keydown', startGame)
  startButton.addEventListener('click', startGame)
  speakers.forEach(speaker => {
    speaker.addEventListener('click', () => {
      if (state === 'normal'){
        musicSwitch(mainAudio)
      } else if (state === 'super'){
        musicSwitch(superAudio)
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', init)
