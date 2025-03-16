// Keep track of player's score
let humanScore = 0;
let computerScore = 0;

// Randomly choose "rock", "paper" or "scissors"
function getComputerChoice() {
  // randomInteger is used to randomly select a number from 0 - 2
  let randomInteger = Math.floor(Math.random() * 3);

  // Map the integers 0 - 2 to Rock, Paper and Scissors respectively
  switch (randomInteger) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Take in the user's choice of rock, paper or scissors
function getHumanChoice() {
  let humanChoice = prompt(
    `Welcome to Rock Paper scissors!\nPlease type 'rock', 'paper',or 'scissors'.`
  ).toLowerCase(); // Prompt the user for a choice and lowercase it

  // Keep prompting the user for a valid input
  while (
    !(
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    )
  ) {
    alert("Invalid Choice!\nPlease type 'rock', 'paper', or 'scissots'.'");
    humanChoice = prompt(
      `Welcome to Rock Paper scissors!\nPlease type 'rock', 'paper',or 'scissors'.`
    ).toLowerCase();
  }

  return humanChoice;
}

// Capitalize strings for display in the console
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Play a round of rock paper scissors
function playRound(humanChoice, computerChoice) {
  // Get the human's and computer's choices
  computerChoice = computerChoice;
  humanChoice = humanChoice; // Remove case sensitivity

  if (humanChoice === computerChoice) {
    // Display that there is a tie
    console.log(`Tie! Both picked ${capitalize(humanChoice)}!`);
  } else if (
    // Display that the player won and update the player's score
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
    );
    humanScore++;
  } else {
    // Display that the computer won and update the computer's score
    console.log(
      `You lost! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
    );
    computerScore++;
  }

  // Display the current score
  console.log(
    `Current Score \nPlayer Score = ${humanScore} \nComputer Score = ${computerScore}`
  );
}

// Test playing 1 round
playRound(getHumanChoice(), getComputerChoice());
