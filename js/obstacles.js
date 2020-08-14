class Obstacle {
  constructor(x, y, width, height, speed, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
  }

  draw() {
    if(this.type === "arrows") {
      ctx.drawImage(arrowsSprite, this.x, this.y, this.width, this.height);
    } else if (this.type === "rocks") {
      ctx.drawImage(rocksSprite, this.x, this.y, this.width, this.height);
    }
  }

  update() {
    this.x += this.speed * gameSpeed;
    if (this.speed > 0) {
      if (this.x > canvas.width + this.width) {
        this.x = 0 - this.width;
      }
    } else {
      if (this.x < 0 - this.width) {
        this.x = canvas.width + this.width;
      }
    }
  }
}

function initObstacles() {
  // Lane 1
  for (let i = 0; i < 4; i++) {
    let x = i * 280;
    arrowsArray.push(
      new Obstacle(x, canvas.height - grid * 2, grid, grid, -1, "arrows")
    );
  }
  //   Lane 2
  for (let i = 0; i < 4; i++) {
    let x = i * 350;
    arrowsArray.push(
      new Obstacle(x, canvas.height - grid * 3, grid, grid, -2, "arrows")
    );
  }

  //   Lane 3
  for (let i = 0; i < 4; i++) {
    let x = i * 400;
    arrowsArray.push(
      new Obstacle(x, canvas.height - grid * 4, grid, grid, -3, "arrows")
    );
  }

  // Lane 4
  for (let i = 0; i < 4; i++) {
    let x = i * 280;
    rocksArray.push(
      new Obstacle(x, canvas.height - grid * 6, grid * 2, grid, -1, "rocks")
    );
  }
  // Lane 5
  for (let i = 0; i < 4; i++) {
    let x = i * 300;
    rocksArray.push(
      new Obstacle(x, canvas.height - grid * 7, grid * 2, grid, -2, "rocks")
    );
  }
  // Lane 6
  for (let i = 0; i < 4; i++) {
    let x = i * 350;
    rocksArray.push(
      new Obstacle(x, canvas.height - grid * 8, grid * 2, grid, -3, "rocks")
    );
  }
}

initObstacles();

function handleObstacles() {
  for (let i = 0; i < arrowsArray.length; i++) {
    arrowsArray[i].update();
    arrowsArray[i].draw();
  }

  for (let i = 0; i < rocksArray.length; i++) {
    rocksArray[i].update();
    rocksArray[i].draw();
  }

  // Collision with arrows
  for(let i = 0; i < arrowsArray.length; i++) {
    if(collision(dragon, arrowsArray[i])) {
      // ctx.drawImage(collisions, 0, 0, 80, 80, dragon.x, dragon.y, 80, 80);
      resetGame();
    }
  }

  // Collisions with Rocks
  if(dragon.y < 280 && dragon.y > 80) {
    safe = false;
    
    for(let i = 0; i < rocksArray.length; i++) {
      if(collision(dragon, rocksArray[i])) {
        dragon.x += rocksArray[i].speed;
        safe = true;
      }
    }

    if(!safe) {
      resetGame();
    }
  }
}
