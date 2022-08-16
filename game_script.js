function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getComputerChoice() {
    let i = randomIntFromInterval(1,3);
    if (i === 1) return "rock";
    else if (i === 2) return "paper";
    else if (i === 3) return "scissors"; 
}

console.log(getComputerChoice());