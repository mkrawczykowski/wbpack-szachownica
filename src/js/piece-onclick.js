export default function possibleMoves(activePiece) {
  // return activePiece.dataset.type;
  switch (activePiece.dataset.type) {
    case 'rook': rookPossibleMovement(); break;
  }

  function rookPossibleMovement() {

    let rookMovementColumn = document.querySelectorAll(`[data-column="${activePiece.dataset.column}"].game__column`);

    for (let x = 0; x < rookMovementColumn.length; x++) {
      console.log(rookMovementColumn[x]);
      rookMovementColumn[x].classList.add('possibleMove');
    };
  }
}