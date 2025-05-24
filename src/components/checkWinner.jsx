export default function checkWinner(board, placed, winnerCombinations) {
  for (const combo of winnerCombinations) {
    for (let p = 0; p < 2; ++p) {
      const playerEmojis = placed[p].map((e) => e.index);
      if (combo.every((cellIdx) => playerEmojis.includes(cellIdx))) {
        return p;
      }
    }
  }
  return null;
}