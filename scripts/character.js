// const playerImage = new Image();
// playerImage.src = '/player.png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 0;
    this.y = 0;
    this.stingerX = -25;
    this.stingerY = -25;
    this.width = 50;
    this.height = 50;
    this.witdhHalf = 500 / 2;
    this.heightHalf = 750 / 2;
    this.angle = (Math.PI * 2) / 360;
    this.speed = 0;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    this.game.ctx.rotate(this.speed * this.angle);
    // this.game.ctx.fillStyle = 'blue';
    // this.game.ctx.fillRect(-25, -25, this.width, this.height);
    this.game.ctx.beginPath();
    this.game.ctx.arc(0, 0, 50, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'blue';
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }

  stinger() {
    this.game.ctx.save();
    this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.stingerX, this.stingerY, 5, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }

  update() {
    this.speed += 4;
  }
}
// console.log(this.stingerX + (this.witdhHalf + this.x));
// console.log(this.stingerY + (this.heightHalf + this.y));
