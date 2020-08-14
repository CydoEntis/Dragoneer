function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  handleObstacles();
  handleScoreBoard();
  ruby.draw();
  dragon.draw();
  dragon.update();
//   debugging();
  requestAnimationFrame(animate);
}

animate();

// Event Listeners
window.addEventListener("keydown", function (e) {
  keys = [];
  keys[e.keyCode] = true;
  if (keys[37] || keys[38] || keys[39] || keys[40]) {
    dragon.jump();
  }
});

window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];
  dragon.moving = false;
});

function scored() {
    score++;
    gameSpeed += 0.05;
    dragon.x = canvas.width / 2;
    dragon.y = canvas.height - dragon.height;
    ruby.reset();
}

function handleScoreBoard() {
  ctx.fillStyle = "white";
  ctx.font = "30px Verdana";
  ctx.fillText("Score", 560, 40);
  ctx.fillText(score, 590, 70);
}

function debugging() {
  ctx.fillStyle = "cyan";
  ctx.font = "20px Verdana";
  ctx.fillText("Collissions: " + collisionsCount, 10, 350);
  ctx.fillText("Game speed: " + gameSpeed.toFixed(2), 10, 370);
}

// Collission detection
function collision(first, second) {
  return !(
    first.x >= second.x + second.width ||
    first.x + first.width <= second.x ||
    first.y >= second.y + second.height ||
    first.y + first.height <= second.y
  );
}

function resetGame() {
  dragon.x = canvas.width / 2;
  dragon.y = canvas.height - dragon.height;
  score = 0;
  collisionsCount++;
  gameSpeed = 1;
}
