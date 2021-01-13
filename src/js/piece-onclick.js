import { LETTERS } from './constants.js';

export default function possibleMoves(activePiece) {
  // return activePiece.dataset.type;
  switch (activePiece.dataset.type) {
    case 'rook': rookPossibleMovement(); break;
    case 'knight': knightPossibleMovement(); break;
  }

  function rookPossibleMovement() {

    //highlighting fields vertically
    let rookMovementColumn = document.querySelectorAll(`[data-column="${activePiece.dataset.column}"].game__column`);

    for (let x = 0; x < rookMovementColumn.length; x++) {
      // console.log(rookMovementColumn[x]);
      if (!rookMovementColumn[x].classList.contains('occupied')) {
        rookMovementColumn[x].classList.add('possibleMove');
      }
    };

    //highlighting fields horizontally
    let rookMovementRowFields = document.querySelectorAll(`[data-row="${activePiece.dataset.row}"].game__row`)[0].childNodes;
    for (let x = 0; x < rookMovementRowFields.length; x++) {
      if (!rookMovementRowFields[x].classList.contains('occupied')) {
        rookMovementRowFields[x].classList.add('possibleMove');
      }
    };
  }

  function letterToNumber(letter) {
    return LETTERS.indexOf(letter);

  }

  function numberToLetter(number) {
    return LETTERS[number - 1];
  }

  function knightPossibleMovement() {
    let nowRow = parseInt(activePiece.dataset.row);
    let nowColumn = letterToNumber(activePiece.dataset.column) + 1;
    let rookMovementField;

    //down-right
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn + 2)}"][data-row="${nowRow + 1}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      } else {
        rookMovementField[0].classList.add('possibleAttack');
      }
    } catch { }

    //down-left
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn - 2)}"][data-row="${nowRow + 1}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      } else {
        rookMovementField[0].classList.add('possibleAttack');
      }
    } catch { }

    //left-down
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn - 1)}"][data-row="${nowRow + 2}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }

    //right-down
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn + 1)}"][data-row="${nowRow + 2}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }

    //up-right
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn + 2)}"][data-row="${nowRow - 1}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }

    //up-left
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn - 2)}"][data-row="${nowRow - 1}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }

    //left-up
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn - 1)}"][data-row="${nowRow - 2}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }

    //right-up
    try {
      rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn + 1)}"][data-row="${nowRow - 2}"]`);
      if (!rookMovementField[0].classList.contains('occupied')) {
        rookMovementField[0].classList.add('possibleMove');
      }
    } catch { }



  };
}