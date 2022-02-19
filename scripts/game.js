class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.enableControls();
  }

  start() {
    this.running = true;
    this.player = new Player(this);
    this.balloon = new Balloon(this);
    this.loop();
    // console.log(this.player.stingerX);
    // console.log(this.player.stingerX + (this.player.witdhHalf + this.player.x));
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      if (this.running) {
        // Will stop page from scrolling
        const code = event.code;
        switch (code) {
          case 'ArrowUp':
            if (this.player.y < -339) {
              return 0;
            } else {
              this.player.y -= 5;
            }
            // console.log(this.player.y);
            break;
          case 'ArrowDown':
            if (this.player.y > 339) {
              return 0;
            } else {
              this.player.y += 5;
            }
            // console.log(this.player.y);
            break;
          case 'ArrowRight':
            if (this.player.x > 214) {
              return 0;
            } else {
              this.player.x += 5;
            }
            // console.log(this.player.x);
            break;
          case 'ArrowLeft':
            if (this.player.x < -214) {
              return 0;
            } else {
              this.player.x -= 5;
            }
            // console.log(this.player.x);
            break;
          // case 'Space':
          //   this.fireSpell();
          //   break;
        }
      }
    });
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.player.update();
      if (this.running) {
        this.loop();
      }
    });
  }

  runLogic() {
    // console.log('this is called');

    // for (let balloon = 0; balloon < this.player.width; balloon++) {
    if (this.player.x > this.balloon.x) {
      console.log('loop is called');
    }
    // }
  }

  // balloon.runLogic()
  // }

  // runLogic() {
  //   console.log('this is called');
  //   // for (const balloon of this.balloon) {
  //   //   balloon.runLogic();
  //     const balloonAndPlayerAreIntersecting = balloon.checkIntersection(
  //       this.player
  //     );
  //     const balloonIsOutOfBounds = this.balloon.x + this.balloon.width < 0;
  //     if (balloonAndPlayerAreIntersecting || balloonIsOutOfBounds) {
  //       // const indexOfEnemy = this.balloon.indexOf(balloon);
  //       // this.enemies.splice(indexOfEnemy, 1);
  //       // this.score -= 10;
  //       console.log('they hit me');
  //     }
  //   // }
  // }

  draw() {
    this.ctx.clearRect(0, 0, 500, 750);
    this.balloon.draw();
    this.player.draw();
    this.player.stinger();
    // console.log(this.player.x);
  }
}
