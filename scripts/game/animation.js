class Animation {
  constructor(
    image,
    x,
    yDiff,
    newWidth,
    newHeight,
    spriteWidth,
    spriteHeight,
    rows,
    columns
  ) {
    this.image = image;
    this.newWidth = newWidth;
    this.newHeight = newHeight;
    this.x = x;
    this.yDiff = yDiff;
    this.y = height - this.newHeight - this.yDiff;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.imageRows = rows;
    this.imageColumns = columns;

    this.imageChar = createImg(image, "alt");
    this.imageChar.hide();
    this.imageChar.position(this.x, this.y);
    this.imageChar.size(newWidth, newHeight);

    this.currentFrame = 0;
    this.horizontalVelocity = 20;
    this.verticalVelocity = 10;
    this.invencibleDraw = false;
  }

  setLeft() {
    this.imageChar.remove();
    this.imageChar = createImg(
      "imagens/personagem/sprites/idleLeft.gif",
      "alt"
    );
    this.imageChar.size(this.newWidth, this.newHeight);
    this.animate();
    this.imageChar.show();
  }

  setRight() {
    this.imageChar.remove();
    this.imageChar = createImg("imagens/personagem/sprites/idle.gif", "alt");
    this.imageChar.size(this.newWidth, this.newHeight);
    this.animate();
    this.imageChar.show();
  }

  runRight() {
    this.x = this.x + this.horizontalVelocity;
  }

  runLeft() {
    this.x = this.x - this.horizontalVelocity;
  }

  runUp() {
    this.y = this.y - this.verticalVelocity;
  }

  runDown() {
    this.y = this.y + this.verticalVelocity;
  }

  draw() {
    if (this.invencible && this.invencibleDraw) {
      this.invencibleDraw = false;
      return;
    } else if (this.invencible && !this.invencibleDraw) {
      this.invencibleDraw = true;
    }

    this.imageChar.show();

    // image(this.image, this.x, this.y, this.newWidth, this.newHeight, currentX , currentY, this.spriteWidth, this.spriteHeight);

    this.animate();
  }

  animate() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.runRight();
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.runLeft();
    }
    if (keyIsDown(UP_ARROW)) {
      //   this.runUp();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.runDown();
    }
    this.imageChar.position(this.x, this.y);
  }
}
