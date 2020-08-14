class Particle {
  constructor(x, y) {
    this.x = x + 40;
    this.y = y + 40;
    this.radius = Math.random() * 20 + 1;
    this.opacity = 1;
    this.directionX = Math.random() * 1 - 0.5;
    this.directionY = Math.random() * 1 - 0.5;
  }

  draw() {
    ctx.fillStyle = "rgba(150, 150, 150," + this.opacity + ")";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    if (this.opacity > 0.1) {
      this.opacity -= 0.9;
    }

    if (this.radius > 0.15) {
      this.radius -= 0.14;
    }
  }

  drawRipple() {
    ctx.strokeStyle = "rgba(255, 255, 255," + this.opacity + ")";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }

  ripple() {
    if (this.radius < 50) {
      this.radius += 0.5;
      this.x -= 0.03;
      this.y -= 0.03;
    }

    if (this.opacity > 0) {
      this.opacity -= 0.009;
    }
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }

  if (particlesArray.length > maxParticles) {
    for (let i = 0; i < 30; i++) {
      particlesArray.pop();
    }
  }

  if (
    (keys[37] || keys[38] || keys[39] || keys[40]) &&
    (dragon.y > 240 || dragon.y < 80) &&
    particlesArray.length < maxParticles + 10
  ) {
    for (let i = 0; i < 10; i++) {
      particlesArray.unshift(new Particle(dragon.x, dragon.y));
    }
  }
}

function handleRipples() {
  // Water Ripples
  for (let i = 0; i < ripplesArray.length; i++) {
    ripplesArray[i].ripple();
    ripplesArray[i].drawRipple();
  }

  if (ripplesArray.length > 5) {
    for (let i = 0; i < 30; i++) {
      ripplesArray.pop();
    }
  }

  if ((keys[37] || keys[38] || keys[39] || keys[40]) && dragon.y < 320) {
    for (let i = 0; i < 20; i++) {
      ripplesArray.unshift(new Particle(dragon.x, dragon.y));
    }
  }
}
