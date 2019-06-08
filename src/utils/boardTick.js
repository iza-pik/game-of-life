import checkNeighbours from "./checkNeighbours";

export default function boardTick(
  board,
  minNeighAlive,
  maxNeighAlive,
  minNeighDead,
  maxNeighDead
) {
  return board.map((row, y) =>
    row.map((cell, x) => {
      const neighbours = checkNeighbours(board, x, y);
      if (cell !== 0) {
        if (neighbours >= minNeighAlive && neighbours <= maxNeighAlive) {
          return 1;
        }
      } else {
        if (neighbours >= minNeighDead && neighbours <= maxNeighDead) {
          return 1;
        }
      }
      return 0;
    })
  );
}
