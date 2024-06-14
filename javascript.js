let compHealth = 11;
let humHealth = 11;
const resultMsg = document.querySelector('.resultarea');
const compHealthBar = document.querySelectorAll('.chealth div');
const humHealthBar = document.querySelectorAll('.hhealth div');
const compImgBox = document.querySelector('.compchoice');
const humImgBox = document.querySelector('.humchoice');
let  imageHuman = document.createElement('img');
let  imageComputer = document.createElement('img');
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

function displayResult(result){
    if(result === 'tie'){
        resultMsg.style.color = "blue";
        resultMsg.textContent = 'Tie!!!';
    }else if(result === 'human'){
        resultMsg.style.color = "green";
        resultMsg.textContent = 'You Win!!'
    }else if(result === 'computer'){
        resultMsg.style.color = "red";
        resultMsg.textContent = 'You lose!!'
    }else if(result === 'gamehuman'){
        resultMsg.style.color = "green";
        resultMsg.textContent = "Congratulations!!!\n You defeated computer";
    }else if(result === 'gamecomputer'){
        resultMsg.style.color = "red";
        resultMsg.textContent = "Game Over!!!\n You were defeated by computer";
    }else if(result === 'tiegame'){
        resultMsg.style.color = "blue";
        resultMsg.textContent = 'The game ended in a draw!';
    }
}

function reduceHealth(humanHealth, computerHealth){
    compHealthBar.forEach((cbar)=>{
        for(let i = 12;i> computerHealth;i--){
            if(cbar.className === 'c'+i){
                cbar.style.backgroundColor = "red";
            }            
        }
    });
    humHealthBar.forEach((hbar)=>{
        for(let i = 11;i> humanHealth;i--){
            if(hbar.className === 'h'+i){
                hbar.style.backgroundColor = "red";
            }  
        }
    });
}

function displayImages(humanImage, computerImage){
    
    
    imageHuman.src="images/"+humanImage+".png";
    humImgBox.appendChild(imageHuman);
    
    
    imageComputer.src="images/"+computerImage+".png";
    compImgBox.appendChild(imageComputer);
    
}
let button = document.querySelectorAll('button');
    button.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let choice = e.target;
            if(choice.className === 'reset'){
                location.reload();
            }
            if(humHealth > 0 && compHealth >0){
                switch(choice.className){
                    case 'rock':
                    {
                        playRound('rock',getComputerChoice());
                        reduceHealth(humHealth, compHealth);
                        break;
                    }
                    case 'paper':
                    {
                        playRound('paper',getComputerChoice());
                        reduceHealth(humHealth, compHealth);
                        break;
                    }
                    case 'scissor':
                    {
                            playRound('scissor',getComputerChoice());
                            reduceHealth(humHealth, compHealth);
                            break;
                    }
                    case 'reset':
                    {
                            location.reload();
                    }
                }
            }        
        });
    });
function playRound(humanChoice, computerChoice){
    displayImages(humanChoice, computerChoice);
    if(humanChoice === computerChoice){
        humHealth -= 1;
        compHealth -= 1;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('tie');
        }   
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        humHealth -= 2;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('computer');
        }
    }else if(humanChoice === "rock" && computerChoice === "scissor"){
        compHealth -=2; 
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('human');
        }
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        compHealth -= 2;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('human');
        }
    }else if(humanChoice === "paper" && computerChoice === "scissor"){
        humHealth -= 2;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('computer');
        }
    }else if(humanChoice === "scissor" && computerChoice === "paper"){
        compHealth -= 2;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('human');
        }
    }else if(humanChoice === "scissor" && computerChoice === "rock"){
        humHealth -=2;
        if(humHealth === 0 && compHealth ===0){
            displayResult('tiegame');
        }else if(humHealth <= 0 && compHealth >0){
            displayResult('gamecomputer');
        }else if(compHealth <= 0 && humHealth >0){
            displayResult('gamehuman');
        }else{
            displayResult('computer');
        }
    }else alert("Unknown Error");
}