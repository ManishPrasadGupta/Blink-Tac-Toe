export default function resetGame({
  setStep,
  setPlayers,
  setBoard,
  setPlaced,
  setIsP0Next,
  setWinner,
  setJustVanished,
  BOARD_SIZE,
}) {
  setStep('setup');
  setPlayers([
    { name: '', emojis: [] },
    { name: '', emojis: [] }
  ]);
  setBoard(Array(BOARD_SIZE).fill(null));
  setPlaced([[], []]);
  setIsP0Next(true);
  setWinner(null);
  setJustVanished([null, null]);
}