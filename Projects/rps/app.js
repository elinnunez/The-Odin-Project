const computerPlay = () => {
    let arr = ["Rock", "Paper", "Scissors"];

    let chosen = arr[Math.floor(Math.random() * arr.length)];

    return chosen.toLowerCase();
};

let playerWins = 0;
let compWins = 0;
let tie = 0;
let gameCount = 0;

const playRound = (pS, cS) => {
    if (pS === "rock") {
        if (cS === "paper") {
            alert("You Lose! Paper beats Rock");
            compWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            alert("You Win! Rock beats Scissors");
            playerWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            alert("It's a Tie! Both Players chose Rock");
            tie++;
            console.log("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            alert("You Win! Paper beats Rock");
            playerWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            alert("You Lose! Scissors beats Paper");
            compWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            alert("It's a Tie! Both Players chose Paper");
            tie++;
            console.log("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    } else if (pS == "scissors") {
        if (cS === "paper") {
            alert("You Win! Scissors beats Paper");
            playerWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else if (cS  === "scissors") {
            alert("You Lose! Scissors beats Paper");
            compWins++;
            console.log("Player: " + playerWins + " vs Computer: " + compWins);
        } else {
            alert("It's a Tie! Both Players chose Scissors");
            tie++;
            console.log("Tie: Player: " + playerWins + " vs Computer: " + compWins);
        }
    }

    gameCount++;

    if(gameCount === 5) {
        console.log("Final Stats: Player: " + playerWins + " vs Computer: " + compWins);
        if(playerWins > compWins) {
            sb.textContent = "Player is the Grand Winner";
        } else if(compWins > playerWins) {
            sb.textContent = "Computer is the Grand Winner";
        } else {
            sb.textContent = "No Grand Winner! Both Tied";
        }

        gameCount = 0;
        playerWins = 0;
        compWins = 0;
        tie = 0;
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