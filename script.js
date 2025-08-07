// Create function named getComputerChoice
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// create variable "cpuChoice"
// Generate a random number between 0 and 1
// If the number is below 0.3, set cpuChoice to "rock"
// Else if it's below 0.6, set cpuChoice to "paper"
// Else set cpuChoice to "scissors"
// print outcome
// return cpuChoice

function getComputerChoice() {
    let cpuChoice = '';

    let randomNumber = Math.random();

    if (randomNumber < 0.3) {
        cpuChoice = 'rock';
    } else if (randomNumber < 0.6) {
        cpuChoice = 'paper';
    } else {
        cpuChoice = 'scissors';
    }

    console.log(`Computer chose ${cpuChoice}!`);
    return cpuChoice;
}

// create a new function named getHumanChoice
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

// prompt user to enter a choice
// return their choice

function getHumanChoice() {
    const choice = prompt('Choose rock, paper, or scissors');
    console.log(`You chose ${choice}!`);
    return choice;
}

// create a new function named playRound
// Define two parameters for playRound: humanChoice and cpuChoice.
// Make function’s humanChoice parameter case-insensitive

// playRound
// humanChoice.toLowerCase();
// cpuChoice.toLowerCase();
// switch humanChoice + cpuChoice
// case rockpaper: cpu wins, increment cpu score, log outcome
// case rockscissors: user wins, increment user score, log outcome
// case paperrock: user wins, increment user score, log outcome
// case paperscissors: cpu wins, increment cpu score, log outcome
// case scissorspaper: user wins, increment user score, log outcome
// case scissorsrock: cpu wins, increment cpu score, log outcome
// default: tie, log outcome

function playGame() {
    const rounds = 5;

    // keep track of user score
    let humanScore = 0;
    let computerScore = 0;

    function humanWins(humanChoice, cpuChoice) {
        console.log(`You win! ${humanChoice} beats ${cpuChoice}.`);
        humanScore++;
    }
    function cpuWins(humanChoice, cpuChoice) {
        console.log(`You lose! ${cpuChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    function tie() {
        console.log('It was a tie!');
    }

    function playRound(humanChoice, cpuChoice) {
        let humanResult = humanChoice.toLowerCase();
        let cpuResult = cpuChoice.toLowerCase();

        switch (humanResult + cpuResult) {
            case 'rockpaper':
                cpuWins(humanChoice, cpuChoice);
                break;

            case 'rockscissors':
                humanWins(humanChoice, cpuChoice);
                break;

            case 'paperrock':
                humanWins(humanChoice, cpuChoice);
                break;

            case 'paperscissors':
                cpuWins(humanChoice, cpuChoice);
                break;

            case 'scissorspaper':
                humanWins(humanChoice, cpuChoice);
                break;

            case 'scissorsrock':
                cpuWins(humanChoice, cpuChoice);
                break;

            default:
                tie();
                break;
        }
    }

    for (let round = 1; round < rounds; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`You won ${humanScore} rounds out of 5`);
    if (humanScore > computerScore) {
        console.log('You won the game!');
    } else {
        console.log('You lost the game!');
    }

    if (confirm('Play again?')) {
        playGame();
    }
}

playGame();
