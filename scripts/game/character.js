class Character extends Animation { 
  constructor(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns) {
    super(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns);
    
    this.yDiff = yDiff;
    this.initialY = height - this.newHeight - this.yDiff;
    this.y = this.initialY; 
    this.jumpSpeed = 0;
    this.gravityValue = 1;
    this.jumps = 0;
    this.maxJumps = 2;
    this.jumpHeight = -30;
    this.movementSpeed = 2;

    this.invencible = false;
  }

  jump() {
    this.imageChar.remove();
    this.imageChar = createImg('imagens/personagem/sprites/jump.png');
    this.imageChar.size(55, 100);
    this.jumps = this.jumps + 1;
    if (this.jumps <= this.maxJumps) {
      this.jumpSpeed = this.jumpHeight;
      this.imageChar.remove();
      this.imageChar = createImg('imagens/personagem/sprites/midAir.gif');
      this.imageChar.size(55, 100);
    }
  }

  run() {
    this.x = this.x + this.movementSpeed;
  }

  gravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravityValue;
    // if (this.jumpSpeed > 0) {
    //   this.imageChar.remove();
		//   this.imageChar = createImg('imagens/personagem/sprites/landing.png');
    // }

    if (this.y > this.initialY) {
      this.y = this.initialY;
      this.jumps = 0;
    }
  }

  isColliding(enemy) {
    if(this.invencible) {
      return false;
    }
    const precision = 0.5;
    const precisionX = (this.newWidth - (this.newWidth * precision)) / 2;
    const precisionY = (this.newHeight - (this.newHeight * precision)) / 2;
    const precisionXEnemy = (enemy.newWidth - (enemy.newWidth * precision)) / 2;
    const precisionYEnemy = (enemy.newHeight - (enemy.newHeight * precision)) / 2;
    
    // Check boxes
    /*
    noFill();
    rect(this.x + precisionX, this.y + precisionY, this.newWidth - precisionX * 2, this.newHeight - precisionY * 2);
    rect(enemy.x + precisionXEnemy, enemy.y + precisionYEnemy, enemy.newWidth - precisionXEnemy * 2, enemy.newHeight - precisionYEnemy * 2);
    */

    return collideRectRect(this.x + precisionX, this.y + precisionY, this.newWidth - precisionX * 2, this.newHeight - precisionY * 2, enemy.x + precisionXEnemy, enemy.y + precisionYEnemy, enemy.newWidth - precisionXEnemy * 2, enemy.newHeight - precisionYEnemy * 2);
  }

  makeInvencible() {
    this.invencible = true;
    setTimeout(() => {
      this.invencible = false;
    }, 1000)
  }
}