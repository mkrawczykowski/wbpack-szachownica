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

    gameAreaFirst.innerHTML += `<div class="piece game-area__${PIECESONCHESSBOARD[property].type}-${PIECESONCHESSBOARD[property].color}"
    style="left:${stylesFromPositions('left', PIECESONCHESSBOARD[property].col)}; 
    top: ${stylesFromPositions('top', PIECESONCHESSBOARD[property].row)};" 
    data-column="${PIECESONCHESSBOARD[property].col}" 
    data-row="${PIECESONCHESSBOARD[property].row}" 
    data-type="${PIECESONCHESSBOARD[property].type}" 
    data-color="${PIECESONCHESSBOARD[property].color}"></div>`;

    let singlePiece = `[data-column="${PIECESONCHESSBOARD[property].col}"][data-row="${PIECESONCHESSBOARD[property].row}"].game__column`;
    console.log(document.querySelectorAll(singlePiece)[0]);
    document.querySelectorAll(singlePiece)[0].classList.add('occupied');
    document.querySelectorAll(singlePiece)[0].classList.add(`occupied-${PIECESONCHESSBOARD[property].color}`);
    document.querySelectorAll(singlePiece)[0].setAttribute('data-color', PIECESONCHESSBOARD[property].color);
  }






  //activating piece

  let pieces = document.getElementsByClassName('piece');
  let activePiece;
  document.addEventListener('click', function (object) {

    if (object.path[0].classList.contains('piece')) {

      if (activePiece) {
        if (
          object.path[0].dataset.column == activePiece.dataset.column && object.path[0].dataset.row == activePiece.dataset.row && object.path[0].dataset.color == activePiece.dataset.color) {
        }
        // console.log(object.path[0].dataset.column);
        // console.log(object.path[0].dataset.row);
        // console.log(object.path[0].dataset.color);
        // console.log(activePiece.dataset.column);
        // console.log(activePiece.dataset.row);
        // console.log(activePiece.dataset.color);
      } else {
        activePiece = object.path[0];
        console.log(activePiece);
      }
    } else if (object.path[0].classList.contains('possibleMove')) {
      if (activePiece) {
        let fieldColumn = object.path[0].dataset.column;
        let fieldRow = object.path[0].dataset.row;
        activePiece.style.left = '600px';
        activePiece.classList.remove('active');

      }


    }




    //deaktywowanie podniesionej figury = usuwanie klasy active
    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i];
      // piece.classList.remove('active');
    }


    //wygaszanie zaznaczonych pól
    document.querySelectorAll('.game__column').forEach(elementColumn => {
      elementColumn.classList.remove('possibleMove');
      elementColumn.classList.remove('possibleAttack');
    });


    if (object.path[0].classList.contains('piece')) {
      object.path[0].classList.add('active');
      possibleMoves(object.path[0]);
    }


  });

});


