// elements.js
export const UI = {
  canvas: document.getElementById('tetris'),
  context: document.getElementById('tetris').getContext('2d'),
  nextCanvas: document.getElementById('next'),
  nextContext: document.getElementById('next').getContext('2d'),
  holdCanvas: document.getElementById('hold'),
  holdContext: document.getElementById('hold').getContext('2d'),
  startButton: document.getElementById('start-button'),
  resetButton: document.getElementById('reset-button'),
  scoreElement: document.getElementById('score'),
  gameOverElement: document.getElementById('game-over'),
  gameOverScoreElement: document.getElementById('game-over-score'),
};
