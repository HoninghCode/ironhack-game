class Stinger {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 35;
    this.y = -35;
    this.xx = 250;
    this.yy = 500;
    this.radius = 10;
    this.speed = 1; // 1 = 6 seconds
    this.angle = Math.PI / 360; // 1 degrees
    // this.speed = 100;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.xx, this.yy);
    // this.game.ctx.rotate(this.seconds + this.milliseconds);
    // this.game.ctx.rotate(this.xOfRedDot, this.yOfRedDot);
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

    // console.log(this.angle);
  }

  update() {
    this.angle++;
    this.xOfRedDot =
      this.x * Math.cos(this.angle * this.speed * (Math.PI / 180));
    this.yOfRedDot =
      this.y * Math.sin(this.angle * this.speed * (Math.PI / 180));
    // this.time = new Date();
    // this.seconds = ((2 * Math.PI) / 60) * this.time.getSeconds();
    // this.milliseconds = ((2 * Math.PI) / 60000) * this.time.getMilliseconds();

    // console.log(this.xOfRedDot, this.yOfRedDot);

    // console.log(this.angle);

    // console.log(this.xOfRedDot, this.yOfRedDot);
  }
}
