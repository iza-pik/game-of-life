export default function checkNeighbours(board, col, row) {
  let counter = 0;
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      counter += Boolean(board[row + y] && board[row + y][col + x]);
    }
  }
  return counter - board[row][col];
}
