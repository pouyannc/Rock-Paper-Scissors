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

function updateScore (event) {
    computerSelection = getComputerChoice();
    computerChoiceTxt.textContent = "Computer chose: " + computerSelection;

    playerSelection = event.currentTarget.classList.toString();

    roundOutcome = playRound(playerSelection, computerSelection);

    roundResult.textContent = roundOutcome;
    if (roundOutcome.substring(4,7) == "win") playerScore++;
    else if (roundOutcome.substring(4,8) == "lose") computerScore++;

    playerScoreTxt.textContent = playerScore;
    computerScoreTxt.textContent = computerScore;

    if (playerScore===5 || computerScore===5) gameOver(playerScore);
}

function gameOver(pScore) {
    let winner;
    pScore === 5 ? winner = "You are" : winner = "Computer is";
    gameEndTxt.textContent = `Game over. ${winner} the winner.`;
    rockButton.removeEventListener('click', updateScore);
    paperButton.removeEventListener('click', updateScore);
    scissorsButton.removeEventListener('click', updateScore);
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const computerChoiceTxt = document.querySelector(".computerChoice");
const roundResult = document.querySelector(".roundResult");
const playerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");
const gameEndTxt = document.querySelector(".gameEnd");


let playerSelection, computerSelection, roundOutcome;
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', updateScore);
paperButton.addEventListener('click', updateScore);
scissorsButton.addEventListener('click', updateScore);




