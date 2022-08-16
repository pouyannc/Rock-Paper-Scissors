function randomIntFromInterval(min, max) { //return random number between min and max
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getComputerChoice() { //randomize a computer choice between rock paper or scissors
    let i = randomIntFromInterval(1,3);
    if (i === 1) return "rock";
    else if (i === 2) return "paper";
    else if (i === 3) return "scissors"; 
}

function playRound(playerSelection, computerSelection) { //plays a round of rock paper scissors
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") return "You win! Paper beats Rock.";
        else if (playerSelection == "scissors") return "You lose! Rock beats Scissors.";
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") return "You win! Scissors beats Paper.";
        else if (playerSelection == "rock") return "You lose! Paper beats Rock.";
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") return "You win! Rock beats Scissors.";
        else if (playerSelection == "paper") return "You lose! Scissors beats Paper.";
    } 
}



const playerSelection= "ROCK";
const computerSelection= getComputerChoice();
console.log(playRound(playerSelection, computerSelection));