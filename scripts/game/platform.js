class Platform {
  constructor() {
    this.image = loadImage("imagens/jungle/jungle tileset/jungle tileset.png");
    this.x = 300;
    this.y = 0;
    this.platformWidth = 48;
    this.platformHeight = 48;
    this.sourceX = 64;
    this.sourceY = 128;
    this.sourceWidth = 48;
    this.sourceHeight = 48;
    this.horizontalVelocity = 10;
    this.verticalVelocity = 10;
  }

  draw() {
    this.move();
    image(
      this.image,
      this.x,
      this.y,
      this.platformWidth,
      this.platformHeight,
      this.sourceX,
      this.sourceY,
      this.sourceWidth,
      this.sourceHeight
    );
  }

  moveRight() {
    this.x = this.x + this.horizontalVelocity;
  }

  moveLeft() {
    this.x = this.x - this.horizontalVelocity;
  }

  moveUp() {
    this.y = this.y - this.verticalVelocity;
  }

  moveDown() {
    this.y = this.y + this.verticalVelocity;
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.moveRight();
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.moveLeft();
    }
    if (keyIsDown(UP_ARROW)) {
      this.moveUp();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.moveDown();
    }
  }
}
