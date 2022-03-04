// const playerImage = new Image();
// playerImage.src = '/player.png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 250;
    this.y = 500;
    this.width = 50;
    this.height = 50;
    this.speed = -0.0175;
    this.angle = Math.PI / 360; // 1 degrees
    this.radius = 35;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.translate(this.x, this.y);
    this.game.ctx.rotate(this.angle * this.speed);
    this.game.ctx.beginPath();
    this.game.ctx.arc(0, 0, this.radius, this.startAngle, this.endAngle);
    // this.game.gradiant.addColorStop(0, 'black');
    // this.game.gradiant.addColorStop(0.9, 'yellow');
    this.game.gradiant.addColorStop(1, 'blue');
    this.game.ctx.fillStyle = this.game.gradiant;
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }

  bounceOnPlayer() {
    let centerBalloonExtra = this.x - this.game.balloon.x;
    let centerPlayerExtra = this.y - this.game.balloon.y;
    let distanceExtra = Math.sqrt(
      centerBalloonExtra * centerBalloonExtra +
        centerPlayerExtra * centerPlayerExtra
    );
    let sumOfRadiusExtra = this.radius + this.game.balloon.radius;
    if (distanceExtra < sumOfRadiusExtra) {
      this.game.balloon.dx = -this.game.balloon.dx;
      this.game.balloon.dy = -this.game.balloon.dy;
      hitBallSound.play();
    }
  }

  update() {
    this.angle++;
  }
}
