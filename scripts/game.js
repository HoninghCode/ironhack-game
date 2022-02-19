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
            this.player.y -= 5;
            break;
          case 'ArrowDown':
            this.player.y += 5;
            break;
          case 'ArrowRight':
            this.player.x += 5;
            break;
          case 'ArrowLeft':
            this.player.x -= 5;
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
  }
}
