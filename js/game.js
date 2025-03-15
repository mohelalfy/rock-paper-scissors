const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const humanScoreEle = document.querySelector("#humanScore");
const computerScoreEle = document.querySelector("#computerScore");
const roundResult = document.querySelector("#select-choice");

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
    roundResult.textContent = "Tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      roundResult.textContent = "You lost, Rock beats Paper";
      computerScore++;
    } else {
      roundResult.textContent = "You won, Rock beats Scissors";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      roundResult.textContent = "You won, Paper beats Rock";
      humanScore++;
    } else {
      roundResult.textContent = "You lost, Scissors beats Paper";
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      roundResult.textContent = "You lost, Rock beats Scissors";
      computerScore++;
    } else {
      roundResult.textContent = "You won, Scissors beats Paper";
      humanScore++;
    }
  }

  const round = computerScore + humanScore;
  roundResult.textContent += ` | Round (${round}/5)`;

  if (roundResult.textContent.includes("won")) {
    roundResult.className = "round-win";
  } else if (roundResult.textContent.includes("lost")) {
    roundResult.className = "round-loss";
  } else {
    roundResult.className = "round-tie";
  }

  humanScoreEle.textContent = humanScore;
  computerScoreEle.textContent = computerScore;

  if (computerScore + humanScore === 5) {
    endGame();
  }
}

function endGame() {
  const didWin = humanScore > computerScore;
  alert(`You ${didWin ? "won" : "lost"}, ${humanScore}|${computerScore}`);

  humanScore = 0;
  computerScore = 0;
  humanScoreEle.textContent = humanScore;
  computerScoreEle.textContent = computerScore;
  roundResult.textContent = "Select a choice";
  roundResult.className = "";
}

rockButton.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", (e) => {
  playRound("scissors", getComputerChoice());
});
