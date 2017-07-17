
import assignPlayerName from './player.js';
import * as game from './game.js';

console.log('starting MultiMath with IIFE');

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function() {
    assignPlayerName(document.getElementById('playername').value);
    game.printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function() {
    game.calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = game.getProblemCount();
