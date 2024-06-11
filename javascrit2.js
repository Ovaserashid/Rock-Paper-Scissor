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
let button = document.querySelectorAll('button');
    button.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let choice = e.target;
        switch(choice.className){
            case 'rock':
                {
                    playRound('rock',getComputerChoice());
                    break;
                }
            case 'paper':
                {
                    playRound('paper',getComputerChoice());
                    break;
                }
            case 'scissor':
                {
                    playRound('scissor',getComputerChoice());
                    break;
                }
            case 'reset':
                {
                    location.reload();
                }
        }
        });
    });
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        humHealth -= 1;
        compHealth -= 1;

    }else if(humanChoice === "rock" && computerChoice === "paper"){
        humHealth -= 2;
    }else if(humanChoice === "rock" && computerChoice === "scissor"){
        compHealth -=2; 
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
let compHealth = 11;
let humHealth = 11;
let computerScore = 0;
let humanScore =0;
