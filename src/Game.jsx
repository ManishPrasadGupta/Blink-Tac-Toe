import { useState } from "react";
import StartGame from "./components/startGame";
import resetGameFn from "./components/resetGame";
import handleSquareClickFn from "./components/handleSquareClick";
import checkWinner from "./components/checkWinner";
import ResetGameButton from "./components/ui/ResetGameButton";
import Board from "./components/ui/Board";

const BOARD_SIZE = 9;
const MAX_EMOJIS_PER_PLAYER = 3;

function getRandomEmoji(emojis) {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function Game() {
  const [step, setStep] = useState("setup");
  const [players, setPlayers] = useState([
    { name: "", emojis: [] },
    { name: "", emojis: [] },
  ]);
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(null));
  const [placed, setPlaced] = useState([[], []]);
  const [isP0Next, setIsP0Next] = useState(true);
  const [winner, setWinner] = useState(null);
  const [justVanished, setJustVanished] = useState([null, null]);

  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleSquareClick = (index) =>
    handleSquareClickFn({
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
      checkWinner: (board, placed) =>
        checkWinner(board, placed, winnerCombinations),
    });

  const handleResetGame = () =>
    resetGameFn({
      setStep,
      setPlayers,
      setBoard,
      setPlaced,
      setIsP0Next,
      setWinner,
      setJustVanished,
      BOARD_SIZE,
    });

  // Setup Screen
  if (step === "setup") {
    return (
      <StartGame
        onStart={(playersFromSetup) => {
          setPlayers(playersFromSetup);
          setStep("game");
          setBoard(Array(BOARD_SIZE).fill(null));
          setPlaced([[], []]);
          setIsP0Next(true);
          setWinner(null);
          setJustVanished([null, null]);
        }}
      />
    );
  }

  // Game Screen
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-pink-300 to-yellow-200 animate-gradient-x transition-all duration-300">
      <div className="relative w-full max-w-[430px] mx-4">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-300/30 rounded-full filter blur-2xl opacity-70 animate-pulse hidden md:block" />

        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl p-8 border border-white/40">
          <h1 className="text-4xl md:text-3xl font-extrabold text-center mb-7 text-slate-900 drop-shadow">
            Blink Tac Toe
          </h1>

          {/* Winner/Next Player Display */}
          <div
            className={`text-center mb-7 transition-all ${
              winner !== null
                ? "text-2xl font-bold text-green-500 animate-bounce"
                : "text-xl text-slate-800"
            }`}
          >
            {winner !== null ? (
              <span>
                🎉{" "}
                <span className="bg-white/60 px-3 py-1 rounded-xl shadow text-green-700">
                  {players[winner].name}
                </span>{" "}
                Wins!
              </span>
            ) : (
              <span>
                Next:{" "}
                <span className="bg-yellow-100/70 px-3 py-1 rounded-xl shadow text-yellow-800 font-bold">
                  {isP0Next ? players[0].name : players[1].name}
                </span>
              </span>
            )}
          </div>

          {/* Player Names and Emojis */}
          <div className="flex justify-between gap-3 mb-5">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`flex-1 text-center rounded-xl py-2 transition-all shadow ${
                  isP0Next === (i === 0)
                    ? "bg-yellow-200/80 font-extrabold shadow-lg text-yellow-900 scale-105"
                    : "bg-white/40 text-slate-700"
                }`}
              >
                <div className="truncate">{players[i].name}</div>
                <div className="text-2xl mt-1 flex justify-center gap-1">
                  {players[i].emojis.map((e, idx) => (
                    <span key={idx}>{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Board and Reset Button */}
          <div className="my-5">
            <Board
              board={board}
              winner={winner}
              handleSquareClick={handleSquareClick}
            />
          </div>
          <ResetGameButton onClick={handleResetGame} winner={winner} />
        </div>
      </div>
    </div>
  );
}

export default Game;