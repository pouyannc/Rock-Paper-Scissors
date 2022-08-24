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
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") return "You win! Rock beats Scissors.";
        else if (computerSelection == "paper") return "You lose! Paper beats Rock.";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") return "You win! Paper beats Rock.";
        else if (computerSelection == "scissors") return "You lose! Scissors beats Paper.";
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") return "You win! Scissors beats Paper.";
        else if (computerSelection == "rock") return "You lose! Rock beats Scissors.";
    } else return 0;
}

function updateScore (playerSelection) {
    computerSelection = getComputerChoice();
    computerChoiceTxt.textContent = "Computer chose: " + computerSelection;

    roundOutcome = playRound(playerSelection, computerSelection);

    roundResult.textContent = roundOutcome;
    if (roundOutcome.substring(4,7) == "win") playerScore++;
    else if (roundOutcome.substring(4,8) == "lose") computerScore++;

    playerScoreTxt.textContent = playerScore;
}

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const computerChoiceTxt = document.querySelector(".computerChoice");
const roundResult = document.querySelector(".roundResult");
const playerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");


let playerSelection, computerSelection, roundOutcome;
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => updateScore("rock"));
paperButton.addEventListener('click', () => updateScore("paper"));
scissorsButton.addEventListener('click', () => updateScore("scissors"));



