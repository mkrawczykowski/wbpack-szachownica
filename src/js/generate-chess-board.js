import { NUMBERS, LETTERS } from './constants.js';

let chessBoardHtml = '';
let fieldColor = 'white';

const drawChessBoard = () => {

  for (let i = 0; i < 8; i++) {
    chessBoardHtml += `<div class="game__row" data-row="${NUMBERS[i]}">`;

    for (let j = 0; j < 8; j++) {
      chessBoardHtml += `<div class="game__column ${fieldColor}" data-column="${LETTERS[j]}"  data-row="${NUMBERS[i]}"></div>`;

      if (fieldColor == 'white') {
        fieldColor = 'black';
      } else {
        fieldColor = 'white';
      }
    }
    if (fieldColor == 'white') {
      fieldColor = 'black';
    } else {
      fieldColor = 'white';
    }

    chessBoardHtml += '</div>';
  }
}

drawChessBoard();

export default chessBoardHtml;