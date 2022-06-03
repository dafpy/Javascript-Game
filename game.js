
function computerPlay(){

    const gameOptions = [
        "rock",
        "paper",
        "scissors"
    ]

    let randomOption = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    return randomOption; 
}

let playerSelection = ""
let computerSelection = computerPlay()
//let lowerInput = playerSelection.toLowerCase();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){    

    let winner = ""

    if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            playerScore++;
        }
        else{
            computerScore++;
        }
    }        
    if (playerSelection == "scissors"){
        if(computerSelection == "rock"){
            computerScore++;
        }
        else{
            playerScore++;
        }
        
    } 
    if(playerSelection == "paper") {
        if(computerSelection == "rock"){
            playerScore++;
        }
        else{
            computerScore++;
        }
    }
    
    if (playerScore > computerScore){
        return playerScore
    }
    else {
        return computerScore
    }
    
}

function game(){
    
    for(let i = 0; i < 5; i++){
        
        playerSelection = prompt("Select Rock, Scissors or Paper: ")
        computerSelection = computerPlay()
        playRound()
        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection)        

    }

    if (playerScore > computerScore){
        winner = "You won!"
    }
    else{
        winner = "You lost!"
    }

    return winner
}


console.log(game())