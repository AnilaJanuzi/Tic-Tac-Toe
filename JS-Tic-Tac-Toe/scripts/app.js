const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0; 
let currentRound = 1;
let gameIsOver = false; //for not allowing  to click on other buttons if the player won (if the game ended)

const players = [
    {
        name: '',
        symbol: 'X'
    },

    {
         name: '',
        symbol: 'O'
    },
];


const playerConfigElement=document.getElementById('config');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorsOutputElement=document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement=document.getElementById('edit-player-1-btn');

const editPlayer2BtnElement=document.getElementById('edit-player-2-btn');

const cancelConfigBtnElement=document.getElementById('cancel-config-btn');

const StartNewGameBtnElement = document.getElementById('start-game-btn');

//getting access to li
//const gameFieldElements = document.querySelectorAll('#game-board li')

const gameBoardElement = document.getElementById('game-board');




editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

StartNewGameBtnElement.addEventListener('click',startNewGame);

//for (const gameFieldElement of gameFieldElements){
  //  gameFieldElement.addEventListener('click',selectGameField);
//}

gameBoardElement.addEventListener('click',selectGameField);