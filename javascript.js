function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    let compChoice = "";
    if(randomNum === 0){
        compChoice = "rock";
    }else if(randomNum === 1){
        compChoice = "paper";
    }else {
        compChoice = "scissor";
    }
    return compChoice;
}
function getHumanChoice(){
    let userInput = window.prompt("Please enter your choice\n \n 'rock'  or  'paper'  or  'scissor'\n");
    if(userInput.toLowerCase() === "rock"){
        return userInput;
    }else if(userInput.toLowerCase() === "paper"){
        return userInput;
    }else if(userInput.toLowerCase() === "scissor"){
        return userInput;
    }else return "Invalid Choice";
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Same response by both players!! try again!");
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        alert("You lose! Paper beats Rock");
    }else if(humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        alert("You win! Rock beats Scissor");
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        alert("You win! Paper beats Rock");
    }else if(humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        alert("You Lose! Scissor beats Paper");
    }else if(humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        alert("You win! Scissor beats Paper");
    }else if(humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        alert("You Lose! Rock beats Scissor");
    }else alert("Invalid Choice");
}
playRound(getHumanChoice(),getComputerChoice());