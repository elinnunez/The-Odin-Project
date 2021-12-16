const computerPlay = () => {
    let arr = ["Rock", "Paper", "Scissors"];

    let chosen = arr[Math.floor(Math.random() * arr.length)];

    return chosen.toLowerCase();
};

const buttons = document.querySelectorAll("button");

const disableBtns = () => {
    buttons.forEach(btn => {
        btn.disabled = true
    })
}

let playerWins = 0;
let compWins = 0;
let tie = 0;
let gameCount = 0;

const result = document.querySelector(".result");
const final = document.querySelector(".final");

const playRound = (pS, cS) => {
    if (pS === "rock") {
        if (cS === "paper") {
            result.textContent = ("You Lose! Paper beats Rock");
            compWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            result.textContent = ("You Win! Rock beats Scissors");
            playerWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            result.textContent = ("It's a Tie! Both Players chose Rock");
            tie++;
            sb.textContent = ("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            result.textContent = ("You Win! Paper beats Rock");
            playerWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            result.textContent = ("You Lose! Scissors beats Paper");
            compWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            result.textContent = ("It's a Tie! Both Players chose Paper");
            tie++;
            sb.textContent = ("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    } else if (pS == "scissors") {
        if (cS === "paper") {
            result.textContent = ("You Win! Scissors beats Paper");
            playerWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            result.textContent = ("You Lose! Scissors beats Paper");
            compWins++;
            sb.textContent = ("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            result.textContent = ("It's a Tie! Both Players chose Scissors");
            tie++;
            sb.textContent = ("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    }

    gameCount++;

    if(gameCount === 5) {
        console.log("Final Stats: Player: " + playerWins + " vs Computer: " + compWins);
        if(playerWins > compWins) {
            final.textContent = "Player is the Grand Winner";
        } else if(compWins > playerWins) {
            final.textContent = "Computer is the Grand Winner";
        } else {
            final.textContent = "No Grand Winner! Both Tied";
        }

        // gameCount = 0;
        // playerWins = 0;
        // compWins = 0;
        // tie = 0;

        disableBtns();
    }
};

const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");

const sb = document.querySelector(".scoreboard");

paperBtn.addEventListener("click",(e) => {

    playRound("paper", computerPlay());
});

rockBtn.addEventListener("click",(e) => {
    playRound("rock", computerPlay());
});

scissorsBtn.addEventListener("click",(e) => {
    playRound("scissors", computerPlay());
});