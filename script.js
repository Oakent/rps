let cpu_win = 0;
let p_win = 0;
let tie = 0;

const box = document.querySelector("#box");
const buttons = document.querySelector("#buttons");
const result = document.createElement("div");
score = document.createElement("div");
score.setAttribute("id", "score");
score.classList.add("center");
result.classList.add("center");

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let statement = "";
  if (playerSelection == computerSelection) {
    tie++;
    statement = "Tie! " + playerSelection + " vs " + computerSelection;
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    statement = "You win! " + playerSelection + " beats " + computerSelection;
    p_win++;
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    statement = "You lose! " + computerSelection + " beats " + playerSelection;
    cpu_win++;
  }
  result.textContent = statement;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

rock = document.querySelector("#rock");
rock.addEventListener("click", function (e) {
  roundUpdate("rock");
});

paper = document.querySelector("#paper");
paper.addEventListener("click", function (e) {
  roundUpdate("paper");
});

scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function (e) {
  roundUpdate("scissors");
});

function roundUpdate(playerChoice) {
  playRound(playerChoice, getComputerChoice());
  updateUi();
}

function updateUi() {
  let update = "";
  if (p_win < 5 && cpu_win < 5) {
    update = "You: " + p_win + " Computer: " + cpu_win;
  } else if (p_win == 5 && cpu_win < 5) {
    udpdate =
      "You win, score: " + p_win + " to " + cpu_win + " Refresh to play again.";
  } else if (cpu_win == 5 && p_win < 5) {
    update =
      "You lose, score: " +
      p_win +
      " to " +
      cpu_win +
      " Refresh to play again.";
  } else {
    update = "Error, game over. Refresh to play again.";
  }
  score.textContent = update;
  box.insertBefore(score, buttons);
  box.appendChild(result);
}
