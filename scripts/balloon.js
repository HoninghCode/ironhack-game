class Balloon {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.radius = 65;
    this.x = 250;
    this.y = 150;
    this.color = 'green';
    this.dx = 1;
    this.dy = -2;
  }

  draw() {
    this.game.ctx.save();
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
    this.game.ctx.closePath();
    this.game.ctx.restore();
  }

  bounceOnWalls() {
    if (
      this.x + this.dx > 500 - this.radius ||
      this.x + this.dx < 0 + this.radius
    ) {
      this.dx = -this.dx;
      hitWallSound.play();
    }

    if (this.y + this.dy < 0 + this.radius) {
      this.dy = -this.dy;
      hitWallSound.play();
    }

    if (this.y + this.dy > 750 - this.radius) {
      this.game.lose();
      gameEndSound.play();
    }

    let centerBalloon =
      this.game.stinger.xOfRedDot - this.x + this.game.stinger.xx;
    let centerPlayer =
      this.game.stinger.yOfRedDot - this.y + this.game.stinger.yy;
    let distance = Math.sqrt(
      centerBalloon * centerBalloon + centerPlayer * centerPlayer
    );
    let sumOfRadius = this.radius;
    if (distance < sumOfRadius) {
      this.game.lose();
      gameEndSound.play();
    }
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
