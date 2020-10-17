class Game {
  constructor() {
    this.map = map.map;
  }

  setup() {
    platform = new Platform();
    character = new Character(imageCharacter, 30, 30, 124, 180, 188, 273, 2, 5);

    stroke(0, 0, 0);
    strokeWeight(3);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      character.jump();
    }
    if (key === "ArrowRight") {
      character.setRight();
    }
    if (key === "ArrowLeft") {
      character.setLeft();
    }
  }

  draw() {
    clear();
    // scenario.draw();
    // platform.draw();
    character.draw();
    character.gravity();

    // if (character.isColliding(platforms)) {
    //   if (live.currentLives < 0) {
    //     currentScene = "gameOver";
    //     scenes[currentScene].setup();
    //     score.saveScore();
    //   }
    // }
  }
}
