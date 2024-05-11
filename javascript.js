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
    }else return "Invalid";
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Same response by both players!! No winner\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        alert("You lose! Paper beats Rock\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        alert("You win! Rock beats Scissor\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        alert("You win! Paper beats Rock\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        alert("You Lose! Scissor beats Paper\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        alert("You win! Scissor beats Paper\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else if(humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        alert("You Lose! Rock beats Scissor\nComputer Score: "+computerScore+"                Human Score: "+humanScore);
    }else alert("Unknown Error");
}
function playGame(){
    
    for(let i=0; i<5;i++){
        alert("Round "+(i+1))
        let humanFinalChoice = getHumanChoice();
        if(humanFinalChoice === "Invalid"){
            alert("Invalid Choice please try again!!")
            i -= 1;
        }else{
            playRound(humanFinalChoice,getComputerChoice());
        }
    }
}
function conclusion(){
    if(humanScore === computerScore) alert("*******RESULTS*******\nComputer Score: "+computerScore+"\nHuman Score: "+humanScore+"\n-------ITS A TIE!!!-------");
    else if(humanScore > computerScore) alert("*******RESULTS*******\nComputer Score: "+computerScore+"\nHuman Score: "+humanScore+"\n-------YOU WIN!!!-------");
    else if(humanScore < computerScore) alert("*******RESULTS*******\nComputer Score: "+computerScore+"\nHuman Score: "+humanScore+"\n-------YOU LOSE!!!-------");
    else alert("Unknown Error")
}
playGame();
conclusion();