
// p=0,s=1,r=2
// player choose 0, comp choose 2. p-c = -2, player win
// player choose 2, comp choose 0. p-c = 2, comp win

// player choose 0, comp choose 1. p-c = -1, comp win
// player choose 1, comp choose 0. p-c = 1, player win

// player choose 1, comp choose 2. p-c = -1, comp win
// player choose 2. comp choose 1. p-c = 1, player win

var choiceArray = ["paper", "scissors", "rock"];

function randomInteger(upper) {
    return Math.floor(Math.random() * upper);
}

function playRound(playerChoice) {
    const computerChoice = randomInteger(3); //Not inclusive of 3, i.e. 0-2
    console.log(computerChoice);

    switch (playerChoice - computerChoice) {
        case -2:
            playerWin();
            break;
        case -1:
            computerWin();
            break;
        case 0:
            changeResult("It's a draw!");
            break;
        case 1:
            playerWin();
            break;
        case 2:
            computerWin();
            break;
    }
}

let playerScore = 0;
let computerScore = 0;

function playerWin() {
    playerScore++;
    changeResult("Player wins!");
}

function computerWin() {
    computerScore++;
    changeResult("Computer wins!");
}

function changeResult(text) {
    document.getElementById("result").innerHTML = text;
    document.getElementById("status1").innerHTML = "Player 1 score: " + playerScore;
    document.getElementById("status2").innerHTML = "Computer score: " + computerScore;
}
    