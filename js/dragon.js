class Dragon {
  constructor() {
    this.width = 80;
    this.height = 80;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height;
    this.moving = false;
    this.frameX = 0;
    this.frameY = 0;
  }

  update() {
    if(keys[38]) { // Up.
      if(this.moving === false) {
        this.y -= grid;
        this.moving = true;
      }
    }

    if(keys[40]) { // Down.
      if(this.moving === false && this.y < canvas.height - this.height) {
        this.y += grid;
        this.moving = true;
      }
    }

    if(keys[37]) { // Left.
      if(this.moving === false && this.x > 0) {
        this.x -= grid;
        this.moving = true;
      }
    }

    if(keys[39]) { // Right
      if(this.moving === false && this.x < canvas.width - this.width) {
        this.x += grid;
        this.moving = true;
      }
    }

    if(collision(dragon, ruby)) scored();
  }

  draw() {
    ctx.drawImage(dragonSprite, 0, 0, 80, 80, this.x, this.y, this.width, this.height);
  }

  jump() {
    console.log("jump");
  }
}

const dragon = new Dragon();