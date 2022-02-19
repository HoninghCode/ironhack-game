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
            event.preventDefault();
            this.player.y -= 10;
            break;
          case 'ArrowDown':
            event.preventDefault();
            this.player.y += 10;
            break;
          case 'ArrowRight':
            event.preventDefault();
            this.player.x += 10;
            break;
          case 'ArrowLeft':
            event.preventDefault();
            this.player.x -= 10;
            break;
          case 'Space':
            event.preventDefault();
            this.fireSpell();
            break;
        }
      }
    });
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.draw();
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
