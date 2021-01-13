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
    console.log(rookMovementRowFields);
    for (let x = 0; x < rookMovementRowFields.length; x++) {
      if (!rookMovementRowFields[x].classList.contains('occupied')) {
        rookMovementRowFields[x].classList.add('possibleMove');
      }
    };
  }
}