# Pacman
Pacman Javascript Project

playerMovement(event){
      const key = event.keyCode
      const up = 38
      const down = 40 
      const left = 37
      const right = 39
      let nextPosition
      if (key === right){
        if (pacman.currentPosition === 449 || pacman.currentPosition === 479){
          nextPosition = pacman.currentPosition - width + 1
        } else {
          nextPosition = pacman.currentPosition + 1
        }
      } else if (key === left){
        if (pacman.currentPosition === 420 || pacman.currentPosition === 450){
          nextPosition = pacman.currentPosition + width - 1
        } else {
          nextPosition = pacman.currentPosition - 1
        }
      } else if (key === up && pacman.currentPosition > width){
        nextPosition = pacman.currentPosition - width
      } else if (key === down && pacman.currentPosition < cellCount - width){
        nextPosition = pacman.currentPosition + width
      }
      if (!cells[nextPosition].classList.contains('border')){
        pacman.removePlayer(pacman.currentPosition)
        pacman.addPlayer(nextPosition)
        pacman.currentPosition = nextPosition
      }
      //eat dot
      if (cells[pacman.currentPosition].firstChild){
        cells[pacman.currentPosition].removeChild(cells[pacman.currentPosition].firstChild)
        score += 10
        scoreDisplay.innerText = score
      }
    } 



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