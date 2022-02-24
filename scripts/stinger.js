class Stinger {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 26;
    this.y = -26;
    this.xx = 0;
    this.yy = 0;
    this.radius = 10;
    this.speed = 0.05;
    this.angle = (0 * (Math.PI * 2)) / 180;
    this.circle = this.speed + this.radius;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.xx, this.yy);
    this.game.ctx.rotate(this.speed * this.angle);
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
    
    this.xOfRedDot = this.x * Math.cos(this.angle * (Math.PI / 180));
    this.yOfRedDot = this.y * Math.sin(this.angle * (Math.PI / 180));
    this.angle++;

    // console.log(this.xOfRedDot, this.yOfRedDot);
  }
}
