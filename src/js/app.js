////////////////////////////////////////////////////////////////////////////////
// STYLES FOR WEBPACK
////////////////////////////////////////////////////////////////////////////////

import '../scss/app.scss';

////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT LIBRARIES
////////////////////////////////////////////////////////////////////////////////


// import $ from 'jquery';

// window.$ = $;

////////////////////////////////////////////////////////////////////////////////
// CUSTOM SCRIPTS
////////////////////////////////////////////////////////////////////////////////

import lettersHtml from './generate-letters.js';
import numbersHtml from './generate-numbers.js';
import chessBoardHtml from './generate-chess-board.js';
import { setPiecesOnChessBoard, stylesFromPositions } from './class-pieces.js';
import { PIECESONCHESSBOARD } from './constants.js';
import possibleMoves from './piece-onclick.js';

let gameArea = document.getElementsByClassName('game-area');
let lettersTop = document.getElementsByClassName('chess-board__letters--top');
let lettersBottom = document.getElementsByClassName('chess-board__letters--bottom');
let numbersLeft = document.getElementsByClassName('chess-board__numbers--left');
let numbersRight = document.getElementsByClassName('chess-board__numbers--right');

document.addEventListener("DOMContentLoaded", function () {

  let gameAreaFirst = gameArea[0];
  gameAreaFirst.innerHTML = chessBoardHtml;

  let lettersTopFirst = lettersTop[0];
  lettersTopFirst.innerHTML = lettersHtml;

  let lettersBottomFirst = lettersBottom[0];
  lettersBottomFirst.innerHTML = lettersHtml;

  let numbersLeftFirst = numbersLeft[0];
  numbersLeftFirst.innerHTML = numbersHtml;

  let numbersRightFirst = numbersRight[0];
  numbersRightFirst.innerHTML = numbersHtml;

  window.onmouseover = function (e) {
    if (e.target.classList.contains('game__column')) {
      console.log(e.target.dataset.column);
      console.log(e.target.dataset.row);
    }

  };

  setPiecesOnChessBoard();

  for (const property in PIECESONCHESSBOARD) {
    console.log(`${property}: `);

    gameAreaFirst.innerHTML += `<div class="piece game-area__${PIECESONCHESSBOARD[property].type}-${PIECESONCHESSBOARD[property].color}"` + stylesFromPositions(`${PIECESONCHESSBOARD[property].col}`, `${PIECESONCHESSBOARD[property].row}`) + ` data-column="${PIECESONCHESSBOARD[property].col}" data-row="${PIECESONCHESSBOARD[property].row}" data-type="${PIECESONCHESSBOARD[property].type}"></div>`;

    let singlePiece = `[data-column="${PIECESONCHESSBOARD[property].col}"][data-row="${PIECESONCHESSBOARD[property].row}"].game__column`;
    console.log(document.querySelectorAll(singlePiece)[0]);
    document.querySelectorAll(singlePiece)[0].classList.add('occupied');
  }

  let pieces = document.getElementsByClassName('piece');

  document.addEventListener('click', function (object) {

    //deaktywowanie podniesionej figury = usuwanie klasy active
    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i];
      piece.classList.remove('active');
    }

    //wygaszanie zaznaczonych pól
    document.querySelectorAll('.game__column').forEach(elementColumn => {
      elementColumn.classList.remove('possibleMove');
    });

    if (object.path[0].classList.contains('piece')) {

      object.path[0].classList.add('active');
      possibleMoves(object.path[0]);
    }
  });

});


