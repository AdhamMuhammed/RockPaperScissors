let computerMove = '';
let result = '';
let playerMove = '';
let gameScore = JSON.parse(localStorage.getItem('gameScore')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};
let gameResult = localStorage.getItem('gameResult') || 'Make your move to start the game!';

updateScore();
document.querySelector('.js-result').textContent = gameResult;

function pickComputermove() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
}

function playGame(playerMove) {
    pickComputermove();

    if (playerMove === 'paper') {
        if (computerMove === 'Paper') {
            result = 'It is a Tie';
        } else if (computerMove === 'Rock') {
            result = 'You win!';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'Rock') {
            result = 'It is a Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You win!';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'Scissors') {
            result = 'It is a Tie';
        } else if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win!';
        }
    }

    if (!gameScore) {
        gameScore = {
            Wins: 0,
            Losses: 0,
            Ties: 0
        };
    }

    updateScore();
    updateResult();
}

function updateResult() {
    gameResult = `Computer picked ${computerMove}, ${result}`;
    localStorage.setItem('gameResult', gameResult);
    document.querySelector('.js-result').innerHTML = gameResult;
}

function updateScore() {
    if (result === 'You win!') {
        gameScore.Wins += 1;
    } else if (result === 'You lose') {
        gameScore.Losses += 1;
    } else if (result === 'It is a Tie') {
        gameScore.Ties += 1;
    }

    localStorage.setItem('gameScore', JSON.stringify(gameScore));
    document.querySelector('.js-score').textContent = `Wins: ${gameScore.Wins}, Losses: ${gameScore.Losses}, Ties: ${gameScore.Ties}`;
}

function resetScore() {
    localStorage.removeItem('gameScore');
    localStorage.removeItem('gameResult');
    localStorage.removeItem('computerMove');
    gameScore = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };
    result = 'Make your move to start the game!';
    document.querySelector('.js-result').textContent = result;
    updateScore();
}