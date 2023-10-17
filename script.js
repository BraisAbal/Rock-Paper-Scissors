//Elecciones del ordenador de forma aleatoria
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

//Convertir a mayúsculas la primera letra.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
    }
}

//Función para jugar 5 rondas, que guarde la puntuación y reporte quien gana o pierda.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Score: ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! Score: ${playerScore} to ${computerScore}`);
    } else {
        console.log(`The game is a tie! Score: ${playerScore} to ${computerScore}`);
    }
}

//Llamada de la función game
game();


