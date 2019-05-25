import generateGrid from "./generateGrid";

describe("generateGrid should", () => {
  it("exist", () => {
    expect(generateGrid).toBeDefined();
  });
  it("should generate a board with the same board size as the input", () => {
    const [width, height, cellSize] = [400, 600, 32];
    const result = generateGrid(width, height, cellSize);
    expect(result.length).toEqual(Math.floor(height / cellSize));
    expect(result[0].length).toEqual(Math.floor(width / cellSize));
  });
});
