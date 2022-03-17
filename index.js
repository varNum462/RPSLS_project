"use strict";
const prompt = require('prompt-sync')();
const { Game } = require('./game');
const { Player, Human } = require('./players');



let myGame = new Game();

myGame.startGame();