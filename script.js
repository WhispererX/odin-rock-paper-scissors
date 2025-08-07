// Create function named getComputerChoice
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// create variable "cpuChoice"
// Generate a random number between 0 and 1
// If the number is below 0.3, set cpuChoice to "rock"
// Else if it's below 0.6, set cpuChoice to "paper"
// Else set cpuChoice to "scissors"
// return cpuChoice

function getComputerChoice() {
    let cpuChoice = "";

    let randomNumber = Math.random()

    if (randomNumber < 0.3) {
        cpuChoice = "rock";
    } else if (randomNumber < 0.6) {
        cpuChoice = "paper";
    } else {
        cpuChoice = "scissors";
    }

    return cpuChoice;
}