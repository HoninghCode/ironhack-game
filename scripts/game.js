class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.gradiant = this.ctx.createLinearGradient(45, 45, 10, 52);
    this.enableControls();
  }

  start() {
    this.running = true;
    this.stinger = new Stinger(this);
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
            if (this.player.y < 34) {
              return 0;
            } else {
              this.player.y -= 5;
              this.stinger.yy -= 5;
            }
            break;
          case 'ArrowDown':
            if (this.player.y > 714) {
              return 0;
            } else {
              this.player.y += 5;
              this.stinger.yy += 5;
            }
            break;
          case 'ArrowRight':
            if (this.player.x > 464) {
              return 0;
            } else {
              this.player.x += 5;
              this.stinger.xx += 5;
            }
            break;
          case 'ArrowLeft':
            if (this.player.x < 34) {
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

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.stinger.update();
      this.player.update();
      if (this.running) {
        this.loop();
      }
    });
  }

  runLogic() {
    // let centerBalloon = this.player.x - this.balloon.x;
    // let centerPlayer = this.player.y - this.balloon.y;
    // let distance = Math.sqrt(
    //   centerBalloon * centerBalloon + centerPlayer * centerPlayer
    // );
    // let sumOfRadius = this.player.radiusWasp + this.balloon.radius;
    // if (distance < sumOfRadius) {
    //   // console.log(`lightgreen hits the green circle`);
    //   this.balloon.color = 'blue';
    // } else {
    //   this.balloon.color = 'green';
    // }

    let centerBalloonStinger =
      this.stinger.xx + this.stinger.x - this.balloon.x;
    let centerPlayerStinger = this.stinger.yy + this.stinger.y - this.balloon.y;
    let distanceStinger = Math.sqrt(
      centerBalloonStinger * centerBalloonStinger +
        centerPlayerStinger * centerPlayerStinger
    );
    let sumOfRadiusStinger = this.stinger.radius + this.balloon.radius;
    if (distanceStinger < sumOfRadiusStinger) {
      // console.log(`lightgreen hits the green circle`);
      console.log('it hits');
      this.balloon.color = 'red';
    } else {
      this.balloon.color = 'green';
    }

    // console.log(Math.atan2(this.stinger.x, this.stinger.y));
    // console.log(this.player.endAngle);
  }

  draw() {
    this.ctx.clearRect(0, 0, 500, 750);
    this.balloon.draw();
    this.player.draw();
    this.stinger.draw();
  }
}
