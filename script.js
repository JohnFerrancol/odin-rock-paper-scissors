// Keep track of player's score
let humanScore = 0;
let computerScore = 0;
const currentScore = document.querySelector(".current-scores");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const btnGroup = document.querySelector(".btn-group");
const results = document.querySelector(".results");

playGame();

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
    results.textContent = `Tie! Both picked ${capitalize(humanChoice)}!`;
  } else if (
    // Display that the player won and update the player's score
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    results.textContent = `You won! ${capitalize(
      humanChoice
    )} beats ${capitalize(computerChoice)}`;
    humanScore++;
  } else {
    // Display that the computer won and update the computer's score
    results.textContent = `You lost! ${capitalize(
      computerChoice
    )} beats ${capitalize(humanChoice)}`;
    computerScore++;
  }

  // Display the current score
  humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

// Play a game which has 5 rounds and declare a winner at the end
function playGame() {
  btnGroup.addEventListener("click", (event) => {
    // Obtain the information on the button pressed
    let target = event.target;
    // run a switch statement to map the id of the button that the player presses to the corresponding choice and play a round
    switch (target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }

    // If the human or the computer reached a score of 5, end the game and stop the function
    if (humanScore === 5) {
      endGame("WON");
      return;
    } else if (computerScore === 5) {
      endGame("LOST");
      return;
    }
  });
}

function endGame(result) {
  currentScore.innerHTML = `<h1>YOU ${result}</h1>
   <p>Final Score: Player Score = ${humanScore}, Computer Score = ${computerScore}</p>`;
  currentScore.setAttribute("style", "flex-direction: column");

  btnGroup.remove();
  results.remove();

  // Create a new button to let the user play again
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  currentScore.appendChild(playAgainBtn);

  // Reload the webpage when the play again button is pressed
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });
}
