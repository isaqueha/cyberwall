class Animation {
	constructor(image, x, yDiff, newWidth, newHeight, spriteWidth, spriteHeight, rows, columns) {
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
		
    this.imageChar = createImg(image);
		this.imageChar.hide();
		this.imageChar.position(width/4, height/5 * 3);
		this.imageChar.size(55, 100);
		
		this.currentFrame = 0;
		this.invencibleDraw = false;
	}

  setLeft() {
		this.imageChar.remove();
		this.imageChar = createImg('imagens/personagem/sprites/idleLeft.gif');
		this.imageChar.size(55, 100);
		this.animate();
		this.imageChar.show();
	}
	
	setRight() {
		this.imageChar.remove();
		this.imageChar = createImg('imagens/personagem/sprites/idle.gif');
		this.imageChar.size(55, 100);
		this.animate();
		this.imageChar.show();
	}
	
	runRight() {
		this.x = this.x + 3;
	}

	runLeft() {
		this.x = this.x - 3;
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
		} else if (keyIsDown(LEFT_ARROW)) {
			this.runLeft();
		}
		this.imageChar.position(this.x, this.y);
		// this.x = this.x + 1;
    // this.currentFrame++;
    // if(this.currentFrame >= (this.imageRows * this.imageColumns)) {
    //   this.currentFrame = 0;
    // }
  }
}