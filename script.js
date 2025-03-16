// Write a function that randomly returns rock, paper or scissors, this simulate the computer's choice
function getComputerChoice() {
  // randomInteger is used to randomly select a number from 0 - 2
  let randomInteger = Math.floor(Math.random() * 3);

  // Create a switch to map the integers 0 - 2 to Rock, Paper and Scissors
  switch (randomInteger) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Test Cases
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
