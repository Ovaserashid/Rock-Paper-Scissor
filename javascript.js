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

console.log(getComputerChoice());