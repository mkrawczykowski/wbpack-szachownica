let numbersHtml = '';

const drawNumbers = () => {
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = 0; i < 8; i++) {
    numbersHtml += `<div class="chess-board__number">${NUMBERS[i]}</div>`;
  }

}

drawNumbers();

export default numbersHtml; 