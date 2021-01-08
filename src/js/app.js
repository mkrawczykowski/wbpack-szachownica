////////////////////////////////////////////////////////////////////////////////
// STYLES FOR WEBPACK
////////////////////////////////////////////////////////////////////////////////

import '../scss/app.scss';

////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT LIBRARIES
////////////////////////////////////////////////////////////////////////////////


// import $ from 'jquery';

// window.$ = $;

////////////////////////////////////////////////////////////////////////////////
// CUSTOM SCRIPTS
////////////////////////////////////////////////////////////////////////////////

import lettersHtml from './generate-letters.js';
import numbersHtml from './generate-numbers.js';
import chessBoardHtml from './generate-chess-board.js';


let gameArea = document.getElementsByClassName('game__border');
let lettersTop = document.getElementsByClassName('chess-board__letters--top');
let lettersBottom = document.getElementsByClassName('chess-board__letters--bottom');
let numbersLeft = document.getElementsByClassName('chess-board__numbers--left');
let numbersRight = document.getElementsByClassName('chess-board__numbers--right');

document.addEventListener("DOMContentLoaded", function () {

  let gameAreaFirst = gameArea[0];
  gameAreaFirst.innerHTML = chessBoardHtml;

  let lettersTopFirst = lettersTop[0];
  lettersTopFirst.innerHTML = lettersHtml;

  let lettersBottomFirst = lettersBottom[0];
  lettersBottomFirst.innerHTML = lettersHtml;

  let numbersLeftFirst = numbersLeft[0];
  numbersLeftFirst.innerHTML = numbersHtml;

  let numbersRightFirst = numbersRight[0];
  numbersRightFirst.innerHTML = numbersHtml;

  window.onmouseover = function (e) {
    if (e.target.classList.contains('game__column')) {
      console.log(e.target.dataset.column);
      console.log(e.target.dataset.row);
    }

  };
});
