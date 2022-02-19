class Balloon {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.width = 100;
    this.heigth = 100;
  }

  drawBalloon() {
    this.game.ctx.save();
    // this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    // this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }
}
