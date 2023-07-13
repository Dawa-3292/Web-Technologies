let winMsg='Win'
let loseMsg = 'Defeat';
let tieMsg = 'Tie';
let moveList = ['Rock', 'Paper', 'Scissors'];

let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

function calcResult(move1, move2) {
    // Player move -> Rock
    if (move1 === 'Rock') {
        if (move2 === 'Rock') {
            return tieMsg;
        } else if (move2 === 'Paper') {
            return loseMsg;
        } else {
            return winMsg;
        }
    } 

    // Player move -> Paper
    if (move1 === 'Paper') {
        if (move2 === 'Rock') {
            return winMsg;
        } else if (move2 === 'Paper') {
            return tieMsg;
        } else {
            return loseMsg;
        }
    }

    // Player move -> Scissors
    if (move1 === 'Scissors') {
        if (move2 === 'Rock') {
            return loseMsg;
        } else if (move2 === 'Paper') {
            return winMsg;
        } else {
            return tieMsg;
        }
    }
}

/*
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
    statusDisplay.textContent =  'Choose!';   
   
    buttons.forEach((button, index) => {
        
        button.textContent = moveList[index];
        button.style.display = 'inline-block';
        button.addEventListener('click', endGame)
    })

    moveDisplays.forEach((move) => {
        move.style.display = 'none';
    })
}

function endGame(event) {
    const computerMove = moveList[randomMove()];
    const playerMove = event.target.textContent;

    moveDisplays.forEach(move => {
        move.style.display = 'inline-block';
    })

    moveDisplays[0].textContent = `You chose ${playerMove}`; 
    moveDisplays[1].textContent = `Computer chose ${computerMove}`; 

    const result = calcResult(playerMove, computerMove);

    statusDisplay.textContent = result;

    buttons.forEach(button => {
        button.style.display = 'none';
    })

    buttons[1].style.display = 'inline-block';
    buttons[1].textContent = 'Play Again';
    buttons[1].removeEventListener('click', endGame)
    buttons[1].addEventListener('click', startGame)
}

startGame();