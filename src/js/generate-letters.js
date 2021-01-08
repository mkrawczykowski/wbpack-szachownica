let lettersHtml = '';

const drawLetters = () => {
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  for (let i = 0; i < 8; i++) {
    lettersHtml += `<div class="chess-board__letter">${LETTERS[i]}</div>`;
  }

}

drawLetters();

export default lettersHtml; 