// const playerImage = new Image();
// playerImage.src = '/player.png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = -25;
    this.y = -25;
    this.width = 50;
    this.height = 50;
    this.frame = 1;
    this.witdhHalf = 500 / 2;
    this.heightHalf = 750 / 2;
  }

  draw() {
    this.frame++;
    this.game.ctx.save();
    // In a method of the game class,
    // "this" refers to the instance
    // of the game class on which
    // the method is being called
    // this.game.ctx.fillStyle = 'blue';
    // Draw a blue square on the canvas
    // this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    //     this.game.ctx.arc(10, 10, 5, 0, 2 * Math.PI);
    // this.game.ctx.fillStyle = 'red';
    // this.game.ctx.fill();

    this.game.ctx.translate(this.witdhHalf, this.heightHalf);
    this.game.ctx.rotate(45 * ((Math.PI * 2) / 360));
    this.game.ctx.fillStyle = 'blue';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }
}
