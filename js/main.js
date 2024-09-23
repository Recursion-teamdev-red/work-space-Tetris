import { initializeGame } from './game/initialization.js';
import { setupEventListeners } from './eventHandlers.js';
import { update } from './game/gameLoop.js';

// Initialize the game
initializeGame();
setupEventListeners();

// Start the game loop
requestAnimationFrame(update);
