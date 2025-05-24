export default function handleSquareClick({
  index,
  winner,
  isP0Next,
  placed,
  players,
  board,
  justVanished,
  setBoard,
  setPlaced,
  setIsP0Next,
  setJustVanished,
  setWinner,
  setStep,
  MAX_EMOJIS_PER_PLAYER,
  getRandomEmoji,
  checkWinner,
}) {
  if (winner !== null) return;

  const currentPlayer = isP0Next ? 0 : 1;
  const currPlaced = placed[currentPlayer];
  const currEmojis = players[currentPlayer].emojis;

  if (board[index] !== null) return;


// random emojis
  const emoji = getRandomEmoji(currEmojis);

  // FIFO logic
  let newPlaced = [...currPlaced];
  let newBoard = [...board];
  let newJustVanished = [...justVanished];

  if (currPlaced.length === MAX_EMOJIS_PER_PLAYER) {
    const oldest = currPlaced[0];
    newBoard[oldest.index] = null;
    newPlaced = newPlaced.slice(1);
    newJustVanished[currentPlayer] = oldest.index;
  } else {
    newJustVanished[currentPlayer] = null;
  }

  // Place new emoji
  newPlaced = [...newPlaced, { index, emoji }];
  newBoard[index] = { player: currentPlayer, emoji };

  // Update placed
  const newPlacedBoth = placed.map((arr, pIdx) =>
    pIdx === currentPlayer ? newPlaced : arr
  );

  // Check win
  const winnerIdx = checkWinner(newBoard, newPlacedBoth);

  if (winnerIdx !== null) {
    setWinner(winnerIdx);
    setStep('win');
  }

  setBoard(newBoard);
  setPlaced(newPlacedBoth);
  setIsP0Next(!isP0Next);
  setJustVanished(newJustVanished);
}