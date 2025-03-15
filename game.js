function getComputerChoice() {
  const choice = Math.random();

  if (choice <= 0.33) {
    return "rock";
  } else if (choice <= 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice: ");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lost, Rock beats Paper");
      computerScore++;
    } else {
      console.log("You won, Rock beats Scissors");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You won, Paper beats Rock");
      humanScore++;
    } else {
      console.log("You lost, Scissors beats Paper");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lost, Rock beats Scissors");
      computerScore++;
    } else {
      console.log("You won, Scissors beats Paper");
      humanScore++;
    }
  }
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Human ${humanScore} | Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Human won!");
  } else if (humanScore < computerScore) {
    console.log("Computer won!");
  } else {
    console.log("Tie!");
  }
}

playGame();
