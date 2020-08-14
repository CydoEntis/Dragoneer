class Ruby {
    constructor() {
        this.x = (Math.ceil(Math.random() * 15 + 1)) * 80;
        this.y = 0;
        this.width = 80;
        this.height = 80;
    }

    draw() {
        ctx.drawImage(rubySprite, this.x, this.y, this.width, this.height);
    }

    reset() {
        this.x = (Math.ceil(Math.random() * 16 + 1)) * 80;
    }
}

const ruby = new Ruby();