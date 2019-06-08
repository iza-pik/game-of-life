export default function generateGrid(
  width,
  height,
  cellSize = 32,
  percentageAlive
) {
  return Array.from({ length: Math.floor(height / cellSize) }, () =>
    Array.from({ length: Math.floor(width / cellSize) }, () =>
      Number(Math.random() < percentageAlive)
    )
  );
}
