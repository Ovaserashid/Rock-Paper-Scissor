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
console.log(getHumanChoice());