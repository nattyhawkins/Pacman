# Disco Pacman
#### Solo project  |  8 days  |  Vanilla Javascript
‘Disco Pacman’ is Pacman, but Disco! A themed version of the classic arcade game. This was my first project completed during the General Assembly Software Engineering Immersive course. Don't forget to click the speakers for music!

[Try it out!](https://nattyhawkins.github.io/disco-pacman/)

![Disco Pacman](/assets/readme/game.png)

## Technologies
- JavaScript
- HTML5
- CSS3


## Controls
- Hit spacebar or click the start button at the bottom of the screen to begin
- Control pacman's direction with the arrow keys and collect all of the disco dots
- Avoid the ghosts! Red and blue will chase you, pink and orange are just here for a good time
- Be invincible for 10s with the gold stars. Catch the flashing ghosts for extra points.


## Brief
- To design and build a grid-based game rendered using DOM element manipulation
- The player should be able to clear at least one board
- The player's score should be displayed at the end of the game



## Planning
After choosing a concept, I spent a good amount of time planning its execution. I started by drawing up a simple wireframe in Excalidraw to experiment with the design and help visualise the structure. This is also where I started to map out some of the logic, breaking down the game flow into its key components: the character classes, related methods and some of the overarching functions to start and end the game. With a fuller picture in mind of how the project would pan out, I made a Trello list of the high priority aspects that would make up the minimum value product (MVP) and which I’d leave for stretch goals. 

![wireframe](/assets/readme/wireframe.png)

![spider](/assets/readme/spider.png)



## Build Process
Day 1-2: I set up the project in VSCode, linking to GitHub for version control, and got to work on the main HTML elements. Guided by my wireframe, I wrote some provisionary CSS styling and pseudocode in the script file. The first step was to create the grid inside a div using DOM manipulation and forming a maze. I used an array of numbers to map each cell to a CSS class, based on its function in the game.

```
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
  ```

Day 3: At this point I was eager to get some characters on the screen to get things moving. I dedicated some time to finding sprite sheets and researching how to use them, adjusting the background position for each frame. I found a helpful article explaining the methodology, but it seemed like it would be a faff to fully animate them. So, I focused on getting the first frames looking decent and left the rest as a stretch goal. I began creating the player and ghost classes, writing methods to add sprites to starting positions and move Pacman round the track and through the side gates. Toward the end of the day, I worked on the design a little into something that looked more visually appealing. I used Math.random to select a colour from an array of my chosen colours, assigned to each border tile upon creation. Before signing off each day, I also wrote a few bullet points on what I’d worked on and any challenges that arose to help keep track for when I’d eventually sit down to write out this ReadMe in full.

On the 4th day, I refactored part of Pacman’s movement function into a global function that could be leveraged by the ghost class as well. To begin with, I just wanted the ghosts to move in a randomly chosen direction, changing on contact with an obstacle. I continued writing methods to check for collisions between Pacman and ghosts to end the game/lose a life and reset the characters. As was becoming a habit, I ended the day with some CSS styling.

```
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
```

Day 5 turned out to be particularly productive. I added the end of game state with final score and highscore, added a ‘power up’ state and got Pacman to move continually, freeing the player from having to hammer on the arrow keys. I also enjoyed refactoring the code that assigned colours to the border tiles into its own function, triggering on an interval throughout the ‘power up’ state to create a flashing dance floor effect.

Day 6: Whilst the ghosts were moving randomly, they were often getting stuck in the pen. So I spent some time integrating an exit sequence for each ghost that would be looped through before their usual movement pattern is executed. However, if another ghost interrupted their exit sequence, they’d get stuck inside the pen. I decided to leave this for now and worked on improving Pacman’s movement and usability. Finally I added some speakers to the page, attaching audio settings to play the all important disco tunes.

By day 7, I had more or less achieved the MVP. But there was still a lot I wanted to add and only 1 full day left. So, once again, I wrote out the top priorities for the day. I started by streamlining the audio flow, so songs don’t always start from the beginning after each pause/on the results page, and to only play if the user has already turned it on. I had been keen to add a chase behaviour for the ghosts but I was concerned it might break my existing code and cause issues. After backing up the project, I found it was actually quite simple to integrate alongside the moveRandom function. This function turned out to be really useful. It was easily reversed to create a ‘flee’ mode during the ‘power up’ state, and modified into a generalised function to move toward any given position. This took over the previous exitPen method and solved the issue of the ghosts getting stuck in the pen. In the afternoon, I returned to the sprite sheets to get the characters animated.

```
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
```

DUE DATE: With the deadline approaching, I focused on cleaning up some of the functionality and fixing bugs before submitting.



## Challenges
Animating the characters using the sprite sheets was a bit of a learning curve, but also the most satisfying to accomplish. I tried a few different angles, encountering different problems but eventually broke it down into 2 stages. First, to orient Pacman in the direction of travel with ‘addSprite’. Then, to cycle through the subframes with ‘animate’. Some adjustments were needed to get the exact positioning of each frame and reconcile all the interactions. There were a few eureka moments that led inconsistent and misaligned flashing images to the smoothly moving sprites now in play.

```
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
```



## Wins
On Day 6, Pacman had some movement issues whereby pressing a key to change direction too early would cause Pacman to stop. To fix this, I added a function that would test the new direction input and only update Pacman’s current direction if valid. This brought on another problem, with the user having to change direction at exactly the right time, leaving no margin for error. So after some thought, I decided to try introducing a rapid interval that would repeatedly test the new direction for a couple seconds after input. Now the user can change direction for a short window of time before the junction which makes the game much more playable. Note that nextPositionValid takes ‘pacman’ as a parameter here in order to run a global function inside that is shared with the ghosts.

```
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
```



## Key Takeaways
The ghosts were disappearing behind the stars on contact rather than the other way around. I began devising plans of removing the stars when the ghosts landed on them, then remembered I could just switch the order of the CSS classes. Sometimes the best solutions are the simplest.
On more than one occasion, when struggling with something for a while, I found it really helpful to take a step back and draw out the problem. Starting from the beginning and writing out my thoughts to visualise the overall ideas helped me to see a way through it.
This project was really good practice for working with classes



## Bugs
- Sometimes Pacman stops after capturing a ghost, and changes position incorrectly if the space bar is pressed multiple times just after entering the board
- Pacman will stop if you press up or down when by the entrance to the ghost pen
- Occasionally, Pacman will just escape the ghosts when it should have been a collision
- Sometimes game does not restart on first click of spacebar after losing a life



## Future Improvements
- Make grid and characters slightly bigger as I have realised it is a bit small on smaller laptops
- Use chase function to move ghost along the track back to the pen after capture / animation when Pacman is captured
- Add a better start game screen. Maybe a 3… 2… 1… 
- Look into a third ghost behaviour
- Different levels of difficulty
- A better song than Dancing Queen for ‘lost-but-got-highscore’!
