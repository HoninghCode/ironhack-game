class Balloon {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.width = 100;
    this.heigth = 100;
    this.x = 200;
    this.y = 200;
    // this.speed = speed;
  }

  //   checkIntersection(element) {
  //     // We'll use this to check for intersections between player and enemy and spell and enemy
  //     return (
  //       // is right edge of element in front of left edge of enemy
  //       element.x + element.width > this.x &&
  //       // is left edge of element before of right edge of enemy
  //       element.x < this.x + this.width &&
  //       // is bottom edge of element below top edge of enemy
  //       element.y + element.height > this.y &&
  //       // is top edge of element above bottom edge of enemy
  //       element.y < this.y + this.height
  //     );
  //   }

  //   runLogic() {
  //     this.x -= this.speed;
  //   }

  draw() {
    this.game.ctx.save();
    // this.game.ctx.translate(this.witdhHalf + this.x, this.heightHalf + this.y);
    // this.game.ctx.rotate(this.speed * this.angle);
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = 'green';
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }
}
