class Stinger {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.lastTime = 0;
    this.x = 35;
    this.y = -35;
    this.xx = 250;
    this.yy = 500;
    this.radius = 10;
    this.speed = 0; // 1 = 6 seconds
    this.angle = Math.PI / 360; // 1 degrees
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.xx, this.yy);
    this.game.ctx.beginPath();
    this.game.ctx.arc(
      this.xOfRedDot,
      this.yOfRedDot,
      this.radius,
      0,
      2 * Math.PI
    );
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.restore();
  }

  // interval() {
  //   setInterval(function () {
  //     return this.speed++;
  //   }, 1000);
  //   // console.log('speed: ' + this.speed);
  //   console.log(this.speed);
  // }

  dieOnRedDot() {
    let centerBalloon = this.xOfRedDot - this.game.balloon.x + this.xx;
    let centerPlayer = this.yOfRedDot - this.game.balloon.y + this.yy;
    let distance = Math.sqrt(
      centerBalloon * centerBalloon + centerPlayer * centerPlayer
    );
    let sumOfRadius = this.game.balloon.radius;
    if (distance < sumOfRadius) {
      this.game.lose();
    }
  }

  update(timeStamp) {
    this.angle++;
    this.xOfRedDot =
      this.x * Math.cos(this.angle * this.speed * (Math.PI / 180));
    this.yOfRedDot =
      this.y * Math.sin(this.angle * this.speed * (Math.PI / 180));

    if (!this.lastTime || timeStamp - this.lastTime >= 10 * 1000) {
      this.lastTime = timeStamp;
      this.speed++;
      // console.log(this.speed);
    }

    // setInterval(function () {
    //   return this.speed++;
    // }, 1000);
    // console.log('speed: ' + this.speed);
    // console.log(this.speed);
  }
}
