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
