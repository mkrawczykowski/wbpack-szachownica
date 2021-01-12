import { NUMBERS } from './constants.js';

let numbersHtml = '';

const drawNumbers = () => {
  for (let i = 0; i < 8; i++) {
    numbersHtml += `<div class="chess-board__number">${NUMBERS[i]}</div>`;
  }

}

drawNumbers();

export default numbersHtml; 