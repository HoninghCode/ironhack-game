class Stinger {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 21;
    this.y = 21;
    this.xx = 0;
    this.yy = 0;
    this.radius = 10;
    this.speed = 1;
    this.angle = (5 * (Math.PI * 2)) / 360;
    this.circle = this.speed + this.radius;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.xx, this.yy);
    this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.restore();
  }

  update() {
    this.speed++;
  }
}
