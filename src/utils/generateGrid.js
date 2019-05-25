export default function generateGrid(width, height, cellSize = 32) {
  return Array.from({ length: Math.floor(height / cellSize) }, () =>
    Array.from({ length: Math.floor(width / cellSize) }, () => 0)
  );
}
