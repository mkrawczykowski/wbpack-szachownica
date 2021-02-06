import { LETTERS } from './constants.js';

export default function possibleMoves(activePiece) {
  // return activePiece.dataset.type;
  switch (activePiece.dataset.type) {
    case 'rook': rookPossibleMovement(); break;
    case 'knight': knightPossibleMovement(); break;
    case 'bishop': bishopPossibleMovement(); break;
  }

  function ifFieldExists(fieldColumn, fieldRow) {

    try {
      let field = document.querySelectorAll(`[data-column="${fieldColumn}"][data-row="${fieldRow}"]`);
      if (field) {
        return true;
      } else {
        return false;
      }
    } catch { console.log(`1 nie istnieje pole: ${fieldColumn} ${fieldRow}`) };
  }

  function testingField(fieldColumn, fieldRow, rookColor = '') {
    try {
      const testedField = document.querySelector(`[data-column="${fieldColumn}"][data-row="${fieldRow}"]`);
      if (testedField.classList.contains('occupied')) {
        if (testedField.dataset.color == rookColor) {
          return 'occupied-mate';
        } else {
          return 'occupied-enemy';
        };
      } else {
        return `OK`;
      };
      console.log(`fieldColumn: ${fieldColumn}`);
      console.log(`fieldRow: ${fieldRow}`);
      console.log(`testedField.dataset.color: ${testedField.dataset.color}`);
    } catch { console.log(`2 nie istnieje pole: ${fieldColumn} ${fieldRow}`) };
  }

  function colorField(fieldColumn, fieldRow, colorStateClass) {
    try {
      const colouredField = document.querySelector(`[data-column="${fieldColumn}"][data-row="${fieldRow}"]`);
      colouredField.classList.add(colorStateClass);
    } catch { console.log(`3 nie istnieje pole: ${fieldColumn} ${fieldRow}`) };
  }

  function rookPossibleMovement() {
    let rookMovementColumn = document.querySelectorAll(`[data-column= "${activePiece.dataset.column}"].game__column`);
    let rookColumn = activePiece.dataset.column;
    let rookRow = activePiece.dataset.row;
    let rookColor = activePiece.dataset.color;
    let rookRowWalker = rookRow;
    let rookColumnWalker = rookColumn;

    rookRowWalker = rookRow;
    rookColumnWalker = rookColumn;
    do {
      rookRowWalker--;
      console.log(rookRowWalker);
      console.log('testingField(rookColumnWalker, rookRowWalker, rookColor)');

      if (testingField(rookColumnWalker, rookRowWalker, rookColor) == 'occupied-mate') {
        colorField(rookColumnWalker, rookRowWalker, 'possibleMove');
      } else if (testingField(rookColumnWalker, rookRowWalker, rookColor) == 'occupied-enemy') {
        colorField(rookColumnWalker, rookRowWalker, 'possibleAttack');
      }
    } while (rookRowWalker >= 1 && testingField(rookColumnWalker, rookRowWalker, rookColor) != 'occupied-mate' || testingField(rookColumnWalker, rookRowWalker, rookColor) != 'occupied-enemy');

    ifFieldExists('A', 1);

  }

  function letterToNumber(letter) {
    return LETTERS.indexOf(letter);
  }

  function numberToLetter(number) {
    // return LETTERS[number - 1];
    return LETTERS[number];
  }

  function knightPossibleMovement() {
    let nowRow = parseInt(activePiece.dataset.row);
    let nowColumn = letterToNumber(activePiece.dataset.column);
    let rookMovementField;

    function highlightPossibleField(moveColumns, moveRows) {
      try {
        rookMovementField = document.querySelectorAll(`[data-column= "${numberToLetter(nowColumn + moveColumns)}"][data-row="${nowRow + moveRows}"]`);
        if (!rookMovementField[0].classList.contains('occupied')) {
          rookMovementField[0].classList.add('possibleMove');
        } else {
          if (!rookMovementField[0].classList.contains(`occupied - ${activePiece.dataset.color} `)) {
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

  function linearMovement(pieceColumn, pieceRow, possibleMovementStart, possibleMovementEnd, increaseColumn, increaseRow,) {

    for (let possibleMovement = possibleMovementStart; possibleMovement < possibleMovementEnd; possibleMovement++) {

      let possibleField = document.querySelectorAll(`[data-column="${numberToLetter(letterToNumber(pieceColumn) + possibleMovement * increaseColumn)}"][data-row="${parseInt(pieceRow) + possibleMovement * increaseRow}"]`);

      console.log(`pieceColumn: ${numberToLetter(letterToNumber(pieceColumn))}, possibleMovement: ${possibleMovement}, increaseColumn: ${increaseColumn}`);
      console.log(`pieceRow: ${pieceRow}, possibleMovement: ${possibleMovement}, increaseRow: ${increaseRow}`);

      try {
        // possibleField[0].classList.add('possibleMove');

        if (!possibleField[0].classList.contains('occupied')) {
          possibleField[0].classList.add('possibleMove');
        } else if (!possibleField[0].classList.contains(`occupied-${activePiece.dataset.color} `)) {
          possibleField[0].classList.add('possibleAttack');
          break;
        } else break;

      } catch { }

    }
  }

  function bishopPossibleMovement() {

    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, 1); //right+down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, 0); //right
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, -1); // right+up
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 0, 1); // down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, 1); // down+left
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, 0); // left
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, -1); // left

  }
}