
const SYMBOLS = ["rock","paper","scissors"]

function getRandomNumber(){
    return Math.floor(Math.random()*SYMBOLS.length);
}

function getComputerChoice(){
    const randomNumber = getRandomNumber();
    return  SYMBOLS[randomNumber];
}

function playRound(playerSelection,computerSelection){
     // rock rock ---- scissors scissors --- paper paper => draw
     // rock scissors   => rock 
     // rock paper      =>paper 
     // scissors paper  =>scissors 

     if (playerSelection=="rock" && computerSelection=="rock" || playerSelection=="paper" && computerSelection=="paper" || playerSelection=="scissors" && computerSelection=="scissors"){
         alert("Match end in draw")
     }
     else if(playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissors" && computerSelection=="paper"){
        alert("Congrats!!! you won against the computer")
     }
     else{
        alert("You little pathetic human, you were defected by the computer")
     }
}

const playerSelection = prompt("Enter rock paper or scissor: ")
const computerSelection = getComputerChoice();

playRound(playerSelection,computerSelection);

alert("You're selection was "+playerSelection+" and the computer selection was "+computerSelection);