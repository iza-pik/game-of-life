import boardTick from "./boardTick";

describe("boardTick should", () => {
  it("exist", () => {
    expect(boardTick).toBeDefined();
  });
  it("should return a board of the same size as the input", () => {
    const sampleBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    const result = boardTick(sampleBoard);
    expect(result.length).toEqual(sampleBoard.length);
    expect(result[0].length).toEqual(sampleBoard[0].length);
  });
});
