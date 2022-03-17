"use strict";
const prompt = require('prompt-sync')();
const {Human,AI} = require('./players');


class Game {
    constructor(){
        console.log(`YOU HAVE ENTERED THE RPSLS ARENA!
        Enter your player name:`);
        let yourName = prompt()
        this.Player1 = new Human(yourName);
        this.Player2;
    }

    startGame(){
        console.log(
        ` 
        ==============================
        Rules of the game:
        • Rock crushes Scissors  
        • Scissors cuts Paper  
        • Paper covers Rock   
        • Rock crushes Lizard   
        • Lizard poisons Spock   
        • Spock smashes Scissors  
        • Scissors decapitates Lizard  
        • Lizard eats Paper   
        • Paper disproves Spock   
        • Spock vaporizes Rock

        First to win 2 rounds wins the game!
        ===============================

        Now that you know the rules, choose type of play:
         >> Enter 1 to play against HAL 9000, the psychotic computer from "2001: A Space Odyssey"
         >> Enter 2 to play another humanoid
        
        `);
        let gameType = prompt();
        if (gameType == 1){
            this.Player2 = new AI("HAL 9000");
            this.gameProgress();
            
        }else if(gameType == 2){            
            this.Player2 = new Human("The Ultimate Humanoid");
            this.gameProgress();
        }
        else{
            console.log("Invalid choice")
        }       
    }    

    player1Wins(){
        this.Player1.wins += 1;
        if (this.Player1.wins === 2){
            console.log(`
            ${this.Player1.gesture} beats ${this.Player2.gesture} so...
            THAT'S TWO WINS!

            Woohoo! ${this.Player1.name} wins the game!
            
            `);
        }else{
            console.log(`
            ${this.Player1.gesture} beats ${this.Player2.gesture} so...

            ${this.Player1.name} wins this round!`);
            if (this.Player1.wins === this.Player2.wins){
            console.log(`
            We're all tied up at ${this.Player1.wins} win each!
            `)            
            }else{
            console.log(`
            Score is ${this.Player1.wins} to ${this.Player2.wins}, ${this.Player1.name}'s favor.
            `)
            }

            console.log(`
            Next round starts NOW!
             `); 
            this.gameProgress();          
        };
    }

    
    player2Wins(){
        this.Player2.wins += 1;
        if (this.Player2.wins === 2){
            console.log(`
            ${this.Player2.gesture} beats ${this.Player1.gesture} so...
            THAT'S TWO WINS!

            Yeehaw! ${this.Player2.name} wins the game!
            
            `);
        }else{
            console.log(`
            ${this.Player2.gesture} beats ${this.Player1.gesture} so...

            ${this.Player2.name} wins this round!`);
            if (this.Player2.wins === this.Player1.wins){
            console.log(`
            We're all tied up at ${this.Player2.wins} win each!
            `)            
            }else{
            console.log(`
            Score is ${this.Player2.wins} to ${this.Player1.wins}, ${this.Player2.name}'s favor.
            `)
            }

            console.log(`
            Next round starts NOW!
             `); 
            this.gameProgress();               
        };
    }
    
    gameProgress(){
        this.Player1.chooseGesture();
        this.Player2.chooseGesture();
        
        if(this.Player1.gesture ===  this.Player2.gesture){
            console.log(`
            You both chose ${this.Player1.gesture}, so IT'S A TIE! 
            Go again!`);
            this.gameProgress();
        }
        else if (this.Player1.gesture === "Rock"){
            if(this.Player2.gesture === "Scissors" || this.Player2.gesture === "Lizard"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Paper" || this.Player2.gesture === "Spock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Scissors"){
            if(this.Player2.gesture === "Paper" || this.Player2.gesture === "Lizard"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Rock" || this.Player2.gesture === "Spock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Paper"){
            if(this.Player2.gesture === "Rock" || this.Player2.gesture === "Spock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Scissors" || this.Player2.gesture === "Lizard")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Lizard"){
            if(this.Player2.gesture === "Paper" || this.Player2.gesture === "Spock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Scissors" || this.Player2.gesture === "Rock")
            {
                this.player2Wins();
            }
        }        
        else if (this.Player1.gesture === "Spock"){
            if(this.Player2.gesture === "Scissors" || this.Player2.gesture === "Rock"){
                this.player1Wins();
            }
            else if (this.Player2.gesture === "Lizard" || this.Player2.gesture === "Paper")
            {
                this.player2Wins();
            }
        }       
    }   
    
}

module.exports= {
    Game
}