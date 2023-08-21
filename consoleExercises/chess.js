// 

function createBoard(size) {
  let board = '';

  for (let line = 0; line < size; line++) {
    for (let column = 0; column < size; column++) {
      if ((line + column) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }

  return board;
}

const boardSize = 8;
const boardChess = createBoard(boardSize);
console.log(boardChess);