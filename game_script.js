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
    console.log("Computer chose: " + computerSelection);
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") return "You win! Paper beats Rock.";
        else if (computerSelection == "paper") return "You lose! Rock beats Scissors.";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") return "You win! Scissors beats Paper.";
        else if (computerSelection == "scissors") return "You lose! Paper beats Rock.";
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") return "You win! Rock beats Scissors.";
        else if (computerSelection == "rock") return "You lose! Scissors beats Paper.";
    } else return 0;
}

function game() { //play 5 rounds of game and keep score
    for (let i= 0; i<5; i++) {
        playerSelection = prompt("Enter your choice:");
        computerSelection = getComputerChoice();
        roundOutcome = playRound(playerSelection, computerSelection);
        
        if (roundOutcome === 0) {
            console.log("Invalid input. Valid inputs: 'Rock', 'Paper', 'Scissors'.");
            i--;
            continue;
        } else if (roundOutcome.substr(4,3) == "win") playerScore++;
        else if (roundOutcome.substr(4,4) == "lose") computerScore++;
        
        console.log(roundOutcome);
        console.log(`You: ${playerScore}, Computer: ${computerScore}`);

        if (computerScore === 3) {
            console.log("Computer is the winner!");
            break;
        } else if (playerScore === 3) {
            console.log("You are the winner!");
            break;
        }
    }
}

let playerSelection, computerSelection, roundOutcome;
let playerScore = 0;
let computerScore = 0;
game();