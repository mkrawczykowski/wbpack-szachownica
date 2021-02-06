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
    // console.log(`rookRow: ${rookRow}`);
    // console.log(`rookRowWalker: ${rookRowWalker}`);
    // console.log(`rookColumn: ${rookColumn}`);
    // console.log(testingField(rookColumnWalker, rookRowWalker));
    // do {
    //   rookRowWalker++;
    //   if (testingField(rookColumnWalker, rookRowWalker) != 'occupied') {
    //     colorField(rookColumnWalker, rookRowWalker, 'possibleMove');
    //   } else {
    //     colorField(rookColumnWalker, rookRowWalker, 'possibleAttack');
    //   }

    // } while (rookRowWalker <= 8 && testingField(rookColumnWalker, rookRowWalker) != 'occupied')



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


    // //vertical down
    // let rookRowWalker = parseInt(rookRow) + 1;
    // let rookColumnWalker = rookColumn;

    // while (rookRowWalker <= 8 && testingField(rookColumnWalker, rookRowWalker) != 'occupied') {
    //   let rookPotentialField = document.querySelectorAll(`[data-row="${rookRowWalker}"][data-column="${rookColumnWalker}"].game__column`);
    //   rookPotentialField[0].classList.add('possibleMove');
    //   rookRowWalker++;
    // }




    // //vertical up
    // rookRowWalker = parseInt(rookRow) - 1;
    // rookColumnWalker = rookColumn;

    // while (rookRowWalker >= 1 && testingField(rookColumnWalker, rookRowWalker) != 'occupied') {
    //   let rookPotentialField = document.querySelectorAll(`[data-row="${rookRowWalker}"][data-column="${rookColumnWalker}"].game__column`);
    //   rookPotentialField[0].classList.add('possibleMove');
    //   rookRowWalker--;
    // }

    //go top
    // while (s) {

    // }


    // for (let x = 0; x < rookMovementColumn.length; x++) {
    //   // console.log(rookMovementColumn[x]);
    //   if (!rookMovementColumn[x].classList.contains('occupied')) {
    //     rookMovementColumn[x].classList.add('possibleMove');
    //   }
    // };

    //highlighting fields horizontally
    // let possibleField = document.querySelectorAll(`[data - row= "${activePiece.dataset.row}"].game__row`)[0].childNodes;
    // // for (let x = 0; x < possibleField.length; x++) {
    // //   // if (!rookMovementRowFields[x].classList.contains('occupied')) {
    // //   //   rookMovementRowFields[x].classList.add('possibleMove');
    // //   // }
    // // };
    // let x = letterToNumber(activePiece.dataset.column) - 1;

    // while (!possibleField[x].classList.contains('occupied') || !possibleField[x].classList.contains(`occupied - ${ activePiece.dataset.color }`)) {
    //   try {

    //     if (!possibleField[x].classList.contains('occupied')) {
    //       possibleField[x].classList.add('possibleMove');
    //     } else if (!possibleField[x].classList.contains(`occupied - ${ activePiece.dataset.color }`)) {
    //       possibleField[x].classList.add('possibleAttack');
    //     };
    //     console.log(`x: ${ x }, try catch end, ${ possibleField[x].classList } `);
    //   } catch { };


    //   try {
    //     x--;
    //   } catch { };
    //   console.log(x);
    // }



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
    let bishopColumn = activePiece.dataset.column;
    let bishopRow = activePiece.dataset.row;

    //pieceColumn, pieceRow, possibleMovementStart, possibleMovementEnd, incrementDecrement
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, 1); //right+down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, 0); //right
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 1, -1); // right+up
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, 0, 1); // down
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, 1); // down+left
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, 0); // left
    linearMovement(activePiece.dataset.column, activePiece.dataset.row, 1, 7, -1, -1); // left



    // linearMovement(activePiece.dataset.column, activePiece.dataset.row, -1, -8, 'decrement', 1);
    // for (let possibleMovement = 1; possibleMovement < 7; possibleMovement++) {
    //   let possibleField = document.querySelectorAll(`[data-column="${numberToLetter(letterToNumber(bishopColumn) + possibleMovement + 1)}"][data-row="${parseInt(bishopRow) + possibleMovement}"]`);

    //   try {
    //     // possibleField[0].classList.add('possibleMove');

    //     if (!possibleField[0].classList.contains('occupied')) {
    //       possibleField[0].classList.add('possibleMove');
    //     } else if (!possibleField[0].classList.contains(`occupied-${activePiece.dataset.color} `)) {
    //       possibleField[0].classList.add('possibleAttack');
    //       break;
    //     } else break;

    //   } catch { }

    // }

    // for (let possibleMovement = -1; possibleMovement > -8; possibleMovement--) {
    //   let possibleField = document.querySelectorAll(`[data-column="${numberToLetter(letterToNumber(bishopColumn) + possibleMovement + 1)}"][data-row="${parseInt(bishopRow) + possibleMovement}"]`);

    //   try {

    //     if (!possibleField[0].classList.contains('occupied')) {
    //       possibleField[0].classList.add('possibleMove');
    //     } else if (!possibleField[0].classList.contains(`occupied-${activePiece.dataset.color}`)) {
    //       console.log();
    //       possibleField[0].classList.add('possibleAttack');
    //       break;
    //     } else break;

    //   } catch { };


    // }





  }
}