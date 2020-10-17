function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  gameMusic.loop();
  game = new Game();
  start = new Start();
  gameOver = new GameOver();
  scenes = {
    start,
    game,
    gameOver,
  };
  scenes[currentScene].setup();
}

function touchStarted() {
  // character.jump();
  // jumpSound.play();
  return false;
}

function keyPressed() {
  if (!game) {
    game = new Game();
  }
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  currentScene = "game";
}
