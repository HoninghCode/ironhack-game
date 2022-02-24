class Balloon {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.radius = 100;
    this.x = 250;
    this.y = 150;
    this.color = 'green';
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
}
