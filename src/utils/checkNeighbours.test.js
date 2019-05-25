import checkNeighbours from "./checkNeighbours";

describe("checkNeighbours should", () => {
  it("exist", () => {
    expect(checkNeighbours).toBeDefined();
  });
  it("find all alive neighbours of a given cell", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 0]
    ];
    let result = checkNeighbours(sampleBoard, 0, 0);
    expect(result).toEqual(1);
    result = checkNeighbours(sampleBoard, 5, 0);
    expect(result).toEqual(0);
    result = checkNeighbours(sampleBoard, 4, 2);
    expect(result).toEqual(2);
    result = checkNeighbours(sampleBoard, 1, 1);
    expect(result).toEqual(0);
    result = checkNeighbours(sampleBoard, 2, 5);
    expect(result).toEqual(8);
  });
});
