const computerPlay = () => {
    let arr = ["Rock", "Paper", "Scissors"];

    let chosen = arr[Math.floor(Math.random() * arr.length)];

    return chosen.toLowerCase();
};

const playRound = (pS, cS) => {
    if (pS === "rock") {
        if (cS === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (cS  === "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a Tie! Both Players chose Rock";
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            return "You Win! Paper beats Rock";
        } else if (cS  === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a Tie! Both Players chose Scissors";
        }
    } else if (pS == "scissors") {
        if (cS === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (cS  === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a Tie! Both Players chose Paper";
        }
    } else {
        return "Not a Valid Choice from Player";
    }
};

const game = () => {

    let playerWins = 0;
    let compWins = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        let playSel = prompt("Enter Choice: ");
        let compSel = computerPlay();

        let cur = playRound(playSel.toLowerCase(), compSel);
        
        alert(cur);

        if(cur[4] == "W") {
            playerWins++;
        } else if (cur[4] == "L") {
            compWins++;
        } else if( cur[0] == "I") {
            tie++;
        } else {
            i--;
        }
    }

    if(playerWins > compWins) {
        alert("Player is the Grand Winner")
    } else if(compWins > playerWins) {
        alert("Computer is the Grand Winner");
    } else {
        alert("No Grand Winner! Both Tied");
    }
};

game();
