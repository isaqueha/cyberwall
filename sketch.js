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
    gameOver
  };
}

function touchStarted() {
  character.jump();
  jumpSound.play();
  return false;
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  currentScene = 'start';
}

// TODO
// State machine with images
// Make vertical platforms
// Do the vertical scrolling
// Score should be height
// Vertical Parallax
// Improve gravity (time in consideration?)
// Improve collision
// Keep all the proportion
// Initial Screen
// ScoreBoard
// Reduce bugs in images when changing directions
// 2nd level
// Refactor constructors
// Story
// PowerUp?
// 
// Outline the enemy in RED???
// Leaderboard???