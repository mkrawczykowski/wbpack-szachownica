import { LETTERS } from './constants.js';

let lettersHtml = '';

const drawLetters = () => {

  for (let i = 0; i < 8; i++) {
    lettersHtml += `<div class="chess-board__letter">${LETTERS[i]}</div>`;
  }

}

drawLetters();

export default lettersHtml; 