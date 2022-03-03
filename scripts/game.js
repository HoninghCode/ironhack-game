class Game {
  constructor(canvasElement, screens) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.gradiant = this.ctx.createLinearGradient(45, 45, 10, 52, 50, 30);
    this.screens = screens;
    this.running = false;
    // this.startTime = this.startTime;
    this.enableControls();
  }

  start() {
    this.startTime = Date.now();
    this.running = true;
    this.stinger = new Stinger(this);
    this.player = new Player(this);
    this.balloon = new Balloon(this);
    // this.stinger.interval();
    this.displayScreen('playing');
    this.loop();
  }

  displayScreen(name) {
    for (let screenName in this.screens) {
      this.screens[screenName].style.display = 'none';
    }
    this.screens[name].style.display = '';
  }

  lose() {
    this.running = false;
    this.displayScreen('end');
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      if (this.running) {
        // Will stop page from scrolling
        const code = event.code;
        switch (code) {
          case 'ArrowUp':
            if (this.player.y < -460) {
              return 0;
            } else {
              this.player.y -= 5;
              this.stinger.yy -= 5;
            }
            break;
          case 'ArrowDown':
            if (this.player.y > 710) {
              return 0;
            } else {
              this.player.y += 5;
              this.stinger.yy += 5;
            }
            break;
          case 'ArrowRight':
            if (this.player.x > 460) {
              return 0;
            } else {
              this.player.x += 5;
              this.stinger.xx += 5;
            }
            break;
          case 'ArrowLeft':
            if (this.player.x < 40) {
              return 0;
            } else {
              this.player.x -= 5;
              this.stinger.xx -= 5;
            }
            break;
        }
      }
    });
  }

  update() {
    this.timePassed = Math.floor((Date.now() - this.startTime) / 1000);
  }

  loop(timeStamp) {
    window.requestAnimationFrame((timeStamp) => {
      this.runLogic(timeStamp);
      this.draw();
      // this.currentTime = Date.now();
      if (this.running) {
        this.loop(timeStamp);
      }
    });
  }

  runLogic(timeStamp) {
    this.stinger.dieOnRedDot();
    this.stinger.update(timeStamp);
    this.player.bounceOnPlayer();
    this.player.update();
    this.balloon.bounceOnWalls();
    this.balloon.update();
    // console.log(Math.floor((Date.now() - this.startTime) / 1000));
  }

  drawText() {
    this.ctx.font = '30px VT323, monospace;';
    this.ctx.fillText(
      `Score: ${this.timePassed}  Speed: ${this.stinger.speed}x`,
      10,
      730
    );
  }

  draw() {
    this.ctx.clearRect(0, 0, 500, 750);
    this.balloon.draw();
    this.player.draw();
    this.stinger.draw();
    this.update();
    this.drawText();
    // console.log(this.timePassed);
  }
}
