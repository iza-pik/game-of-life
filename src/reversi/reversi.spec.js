import reversi, { findPlayerCells } from "./reversi";

const [B, W] = ["B", "W"];
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, B, W, 0, 0, 0],
  [0, 0, 0, W, B, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

describe("findOpponentNeighbours should", () => {
  it("exist", () => {
    expect(findOpponentNeighbours).toBeDefined();
  });
  it("find opponent cells", () => {
    expect(findOpponentNeighbours(board, position)).toEqual();
  });
});

describe("findPlayerCells should", () => {
  it("exist", () => {
    expect(findPlayerCells).toBeDefined();
  });
  it("find all occurrences of B", () => {
    expect(findPlayerCells(board, B)).toEqual([[3, 3], [4, 4]]);
    expect(findPlayerCells(board, W)).toEqual([[4, 3], [3, 4]]);
  });
});

describe("reversi should", () => {
  it("exist", () => {
    expect(reversi).toBeDefined();
    expect(reversi()).toBeDefined();
  });
  it("compute all available moves for black", () => {
    const player = B;
    // expect(reversi(board, player)).toEqual(["C5", "D6", "E3", "F4"]);
  });
});
