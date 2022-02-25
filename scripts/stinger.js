class Stinger {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 35;
    this.y = -35;
    this.xx = 250;
    this.yy = 500;
    this.radius = 10;
    this.speed = 0.01;
    this.angle = (Math.PI * 2) / 360;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.xx, this.yy);
    this.game.ctx.rotate(this.speed);
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

  update() {
    this.angle++;

    this.xOfRedDot = this.x * Math.cos(this.angle * (Math.PI / 180));
    this.yOfRedDot = this.y * Math.sin(this.angle * (Math.PI / 180));

    // console.log(this.xOfRedDot, this.yOfRedDot);
  }
}
