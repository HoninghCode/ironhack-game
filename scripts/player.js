// const playerImage = new Image();
// playerImage.src = '/player.png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.witdhHalf = 0;
    this.heightHalf = 0;
    this.angle = (5 * (Math.PI * 2)) / 360;
    this.speed = 1;
    this.radiusWasp = 35;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(0, 0, this.radiusWasp, this.startAngle, this.endAngle);
    this.game.gradiant.addColorStop(0, '#A7D30C');
    this.game.gradiant.addColorStop(0.9, 'yellow');
    this.game.gradiant.addColorStop(1, 'blue');
    this.game.ctx.fillStyle = this.game.gradiant;
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
    // console.log(`wasp: ` + this.x, this.y);
  }

  update() {
    this.speed++;
  }
}
// console.log(this.stingerX + (this.witdhHalf + this.x));
// console.log(this.stingerY + (this.heightHalf + this.y));