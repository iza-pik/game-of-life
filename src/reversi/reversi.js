export const findOpponentNeighbours = (board, position, opponent) => {
  const res = [];
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if ((board[position[0] + x][position[0] + y] = opponent)) {
        res.push([x, y]);
      }
    }
  }
  return res;
};

export const findPlayerCells = (board, player) => {
  const res = [];
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      if (board[y][x] == player) {
        res.push([x, y]);
      }
    }
  }
  return res;
};

const reversi = (board, player) => {
  const res = [];
  // magic here
  return res;
};

export default reversi;
