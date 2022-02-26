class Balloon {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.radius = 60;
    this.x = 250;
    this.y = 150;
    this.color = 'green';
    this.dx = 1;
    this.dy = -2;
  }

  draw() {
    this.game.ctx.save();
    // this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    // this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    console.log(this.x, this.y);
  }
}
