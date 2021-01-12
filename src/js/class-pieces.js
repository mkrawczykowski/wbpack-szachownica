import { PIECESONCHESSBOARD } from './constants.js';

class Piece {
  constructor(type, color, col, row) {
    this.type = type;
    this.color = color;
    this.row = row;
    this.col = col;
  }
}

function setPiecesOnChessBoard() {
  //white pieces are generated first

  //wieża
  PIECESONCHESSBOARD.A1 = new Piece('rook', 'white', 'A', 1);
  PIECESONCHESSBOARD.H1 = new Piece('rook', 'white', 'H', 1);

  //skoczek
  PIECESONCHESSBOARD.B1 = new Piece('knight', 'white', 'B', 1);
  PIECESONCHESSBOARD.G1 = new Piece('knight', 'white', 'G', 1);

  //goniec
  PIECESONCHESSBOARD.C1 = new Piece('bishop', 'white', 'C', 1);
  PIECESONCHESSBOARD.F1 = new Piece('bishop', 'white', 'F', 1);

  //król
  PIECESONCHESSBOARD.D1 = new Piece('king', 'white', 'D', 1);

  //królowa
  PIECESONCHESSBOARD.E1 = new Piece('queen', 'white', 'E', 1);

  //piony
  // PIECESONCHESSBOARD.A2 = new Piece('pawn', 'white', 'H', 2);
  // PIECESONCHESSBOARD.B2 = new Piece('pawn', 'white', 'B', 2);
  // PIECESONCHESSBOARD.C2 = new Piece('pawn', 'white', 'C', 2);
  // PIECESONCHESSBOARD.D2 = new Piece('pawn', 'white', 'D', 2);
  // PIECESONCHESSBOARD.E2 = new Piece('pawn', 'white', 'E', 2);
  // PIECESONCHESSBOARD.F2 = new Piece('pawn', 'white', 'F', 2);
  // PIECESONCHESSBOARD.G2 = new Piece('pawn', 'white', 'G', 2);
  // PIECESONCHESSBOARD.H2 = new Piece('pawn', 'white', 'H', 2);


  // król i królowa stoją odwrotnie!

  //black pieces

  //wieża
  PIECESONCHESSBOARD.A8 = new Piece('rook', 'black', 'A', 8);
  PIECESONCHESSBOARD.H8 = new Piece('rook', 'black', 'H', 8);

  //skoczek
  PIECESONCHESSBOARD.B8 = new Piece('knight', 'black', 'B', 8);
  PIECESONCHESSBOARD.G8 = new Piece('knight', 'black', 'G', 8);

  //goniec
  PIECESONCHESSBOARD.C8 = new Piece('bishop', 'black', 'C', 8);
  PIECESONCHESSBOARD.F8 = new Piece('bishop', 'black', 'F', 8);

  //król
  PIECESONCHESSBOARD.D8 = new Piece('king', 'black', 'D', 8);

  //królowa
  PIECESONCHESSBOARD.E8 = new Piece('queen', 'black', 'E', 8);

  //piony
  // PIECESONCHESSBOARD.A7 = new Piece('pawn', 'black', 'A', 7);
  // PIECESONCHESSBOARD.B7 = new Piece('pawn', 'black', 'B', 7);
  // PIECESONCHESSBOARD.C7 = new Piece('pawn', 'black', 'C', 7);
  // PIECESONCHESSBOARD.D7 = new Piece('pawn', 'black', 'D', 7);
  // PIECESONCHESSBOARD.E7 = new Piece('pawn', 'black', 'E', 7);
  // PIECESONCHESSBOARD.F7 = new Piece('pawn', 'black', 'F', 7);
  // PIECESONCHESSBOARD.G7 = new Piece('pawn', 'black', 'G', 7);
  PIECESONCHESSBOARD.H7 = new Piece('rook', 'white', 'H', 8);

}

function stylesFromPositions(col, row) {

  let leftFromCol;

  switch (col) {
    case 'A': leftFromCol = 0;
      break;
    case 'B': leftFromCol = '100px';
      break;
    case 'C': leftFromCol = '200px';
      break;
    case 'D': leftFromCol = '300px';
      break;
    case 'E': leftFromCol = '400px';
      break;
    case 'F': leftFromCol = '500px';
      break;
    case 'G': leftFromCol = '600px';
      break;
    case 'H': leftFromCol = '700px';
      break;
  }

  let topFromRow = row * 100 - 100 + 'px';

  return `style="left: ${leftFromCol}; top: ${topFromRow};"`;

}

export { setPiecesOnChessBoard, stylesFromPositions };