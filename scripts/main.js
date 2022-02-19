// const canvas = document.getElementById('my-game');
// const ctx = canvas.getContext('2d');

// ctx.save();
// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 50, 50);
// ctx.restore();

// const witdhHalf = 500 / 2;
// const heightHalf = 750 / 2;

// const player = () => {
//   ctx.save();
//   ctx.translate(witdhHalf, heightHalf);
//   ctx.rotate(45 * ((Math.PI * 2) / 360));
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(-25, -25, 50, 50);
//   ctx.arc(-25, -25, 5, 0, 2 * Math.PI);
//   ctx.fillStyle = 'red';
//   ctx.fill();
//   ctx.restore();
// };

// player();

// // Non-rotated rectangle
// ctx.fillStyle = 'gray';
// ctx.fillRect(80, 60, 140, 30);

// // Matrix transformation
// ctx.translate(150, 75);
// ctx.rotate(Math.PI / 2);
// ctx.translate(-150, -75);

// // Rotated rectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(80, 60, 140, 30);

const canvasElement = document.querySelector('canvas');
const game = new Game(canvasElement);
game.start();
