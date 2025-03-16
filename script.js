// Created variables to keep track of player's score
let humanScore = 0;
let computerScore = 0;

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

// Write a function that takes in the user's choice of rock, paper or scissors
function getHumanChoice() {
  return prompt(
    `Welcome to Rock Paper scissors!\n Please type 'rock', 'paper', 'scissors'.`
  );
}

// Testing user input
console.log(getHumanChoice());
