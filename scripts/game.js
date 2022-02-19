class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.enableControls();
  }

  start() {
    this.running = true;
    this.player = new Player(this);
    this.loop();
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
          case 'Space':
            this.fireSpell();
            break;
        }
      }
    });
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.draw();
      this.player.update();
      if (this.running) {
        this.loop();
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, 500, 750);
    this.player.draw();
    // console.log(this.player.x);
  }
}
