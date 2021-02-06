import { LETTERS } from './constants.js';

export default function possibleMoves(activePiece) {
  // return activePiece.dataset.type;
  switch (activePiece.dataset.type) {
    case 'rook': rookPossibleMovement(); break;
    case 'knight': knightPossibleMovement(); break;
    case 'bishop': bishopPossibleMovement(); break;
  }

  function letterToNumber(letter) {
    return LETTERS.indexOf(letter);
  }

  function numberToLetter(number) {
    // return LETTERS[number - 1];
    return LETTERS[number];
  }

  function linearMovement(pieceColumn, pieceRow, possibleMovementStart, possibleMovementEnd, increaseColumn, increaseRow,) {

    for (let possibleMovement = possibleMovementStart; possibleMovement < possibleMovementEnd; possibleMovement++) {

      let possibleField = document.querySelectorAll(`[data-column="${numberToLetter(letterToNumber(pieceColumn) + possibleMovement * increaseColumn)}"][data-row="${parseInt(pieceRow) + possibleMovement * increaseRow}"]`);

      console.log(`pieceColumn: ${numberToLetter(letterToNumber(pieceColumn))}, possibleMovement: ${possibleMovement}, increaseColumn: ${increaseColumn}`);
      console.log(`pieceRow: ${pieceRow}, possibleMovement: ${possibleMovement}, increaseRow: ${increaseRow}`);

      try {
        // possibleField[0].classList.add('possibleMove');

        if (!possibleField[0].classList.contains('occupied')) {
          possibleField[0].classList.add('possibleMove');
        } else if (!possibleField[0].classList.contains(`occupied-${activePiece.dataset.color}`)) {
          console.log(activePiece.dataset.color);
          possibleField[0].classList.add('possibleAttack');
          break;
        } else break;

      } catch { }

    }
  }

  function knightPossibleMovement() {
    let nowRow = parseInt(activePiece.dataset.row);
    let nowColumn = letterToNumber(activePiece.dataset.column);
    let rookMovementField;

    function highlightPossibleField(moveColumns, moveRows) {
      try {
        rookMovementField = document.querySelectorAll(`[data-column="${numberToLetter(nowColumn + moveColumns)}"][data-row="${nowRow + moveRows}"]`);
        if (!rookMovementField[0].classList.contains('occupied')) {
          rookMovementField[0].classList.add('possibleMove');
        } else {
          if (!rookMovementField[0].classList.contains(`occupied-${activePiece.dataset.color}`)) {
            rookMovementField[0].classList.add('possibleAttack');
          }
        }
      } catch { }
    };

    highlightPossibleField(1, 2);
    highlightPossibleField(2, 1);
    highlightPossibleField(-1, 2);
    highlightPossibleField(-2, 1);
    highlightPossibleField(1, -2);
    highlightPossibleField(-1, -2);
    highlightPossibleField(-2, -1);
    highlightPossibleField(2, -1);

  };

  function bishopPossibleMovement() {
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, 1, 1); //right+down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, 1, -1); // right+up
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, -1, 1); // down+left
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, -1, -1); // up+left
  }

  function rookPossibleMovement() {
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, 0, -1); // up
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, 0, 1); // down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, 1, 0); //right
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 8, -1, 0); // left
  }
}