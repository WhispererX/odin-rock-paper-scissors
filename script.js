// References
const message = document.querySelector('#message');

const roundElement = document.querySelector('#round');

const playerScoreElement = document.querySelector('#player-score');
const cpuScoreElement = document.querySelector('#cpu-score');

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const btnRetry = document.querySelector('#retry');

const playerSelection = document.querySelector('#player-selection');
const cpuSelection = document.querySelector('#cpu-selection');

// Data
const maxRounds = 5;
let round = 1;
let playerScore = 0;
let cpuScore = 0;

// Begin Game
btnRock.addEventListener('click', (e) =>
  playRound('rock', getComputerChoice())
);
btnPaper.addEventListener('click', (e) =>
  playRound('paper', getComputerChoice())
);
btnScissors.addEventListener('click', (e) =>
  playRound('scissors', getComputerChoice())
);

btnRetry.addEventListener('click', (e) => resetGame());

// Utility functions
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

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  round = 0;

  playerSelection.src = '';
  cpuSelection.src = '';

  btnRetry.style.display = 'none';
  btnRock.style.pointerEvents = 'all';
  btnPaper.style.pointerEvents = 'all';
  btnScissors.style.pointerEvents = 'all';

  playerScoreElement.textContent = '0';
  cpuScoreElement.textContent = '0';
  message.textContent = 'Choose! Rock, Paper, Scissors?';

  updateScore();
  updateRounds();
}

function updateScore() {
  playerScoreElement.textContent = `${playerScore}`;
  cpuScoreElement.textContent = `${cpuScore}`;
}

function updateRounds() {
  roundElement.textContent = `${round}`;
}

// Wins
function playerWins(playerChoice, cpuChoice) {
  checkWinCondition();

  playerScore++;
  round++;

  message.textContent = `You win! ${playerChoice} beats ${cpuChoice}!`;

  updateScore();
  updateRounds();
}

function cpuWins(playerChoice, cpuChoice) {
  checkWinCondition();

  cpuScore++;
  round++;

  message.textContent = `You lose! ${cpuChoice} beats ${playerChoice}!`;

  updateScore();
  updateRounds();
}

function tie(playerChoice, cpuChoice) {
  checkWinCondition();

  cpuScore++;
  playerScore++;
  round++;

  message.textContent = `You tied! You both picked ${playerChoice}.`;

  updateScore();
  updateRounds();
}

function checkWinCondition() {
  if (round >= maxRounds - 1) {
    // Show retry button
    btnRetry.style.display = 'block';

    // Disable pointer events
    btnRock.style.pointerEvents = 'none';
    btnPaper.style.pointerEvents = 'none';
    btnScissors.style.pointerEvents = 'none';

    // Show retry message
    message.textContent = 'Game Over!';

    return true;
  } else return false;
}

function playRound(playerChoice, cpuChoice) {
  // Display selections
  playerSelection.src = `./assets/${playerChoice}.png`;
  cpuSelection.src = `./assets/${cpuChoice}.png`;

  switch (`${playerChoice}-${cpuChoice}`) {
    case 'rock-paper':
      {
        // Cpu wins
        cpuWins(playerChoice, cpuChoice);
      }
      break;

    case 'rock-scissors':
      {
        // Player wins
        playerWins(playerChoice, cpuChoice);
      }
      break;

    case 'paper-rock':
      {
        // Player wins
        playerWins(playerChoice, cpuChoice);
      }
      break;

    case 'paper-scissors':
      {
        // Cpu wins
        cpuWins(playerChoice, cpuChoice);
      }
      break;

    case 'scissors-rock':
      {
        // Cpu wins
        cpuWins(playerChoice, cpuChoice);
      }
      break;

    case 'scissors-paper':
      {
        // Player wins
        playerWins(playerChoice, cpuChoice);
      }
      break;

    default:
      {
        // Tie
        tie(playerChoice, cpuChoice);
      }
      break;
  }
}
