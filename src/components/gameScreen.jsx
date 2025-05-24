import Board from "./ui/Board";
import ResetGameButton from "./ui/ResetGameButton";

export default function GameScreen({
  players,
  isP0Next,
  board,
  winner,
  handleSquareClick,
  handleResetGame,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-pink-300 to-yellow-200">
      <div className="
        w-full max-w-[430px] mx-auto p-4
        rounded-3xl shadow-2xl bg-white/30
        flex flex-col min-h-[90vh] max-h-[90vh]
      ">
        
        <h1 className="text-4xl font-extrabold text-center mb-2">Emoji FIFO Tac Toe</h1>

        {/* Indicator for next player */}
        <div className="text-center mb-2 text-xl">
          Next:{" "}
          <span className="bg-yellow-100 px-3 py-1 rounded-lg font-bold text-yellow-800">
            {isP0Next ? players[0].name : players[1].name}
          </span>
        </div>

        {/* Player Cards */}
        <div className="flex gap-3 mb-4">
          {[0, 1].map(i => (
            <div
              key={i}
              className={`
                flex-1 rounded-xl p-2 flex flex-col items-center transition-all
                ${isP0Next === (i === 0)
                  ? "bg-yellow-100 shadow-lg font-bold scale-105"
                  : "bg-pink-100 opacity-80"
                }
              `}
            >
              <div className="mb-1">{players[i].name}</div>
              <div className="flex gap-1 text-2xl">
                {players[i].emojis.map((e, idx) => (
                  <span key={idx}>{e}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Board */}
        <div className="flex justify-center items-center flex-grow">
          <div className="w-full max-w-xs">
            <Board
              board={board}
              winner={winner}
              handleSquareClick={handleSquareClick}
            />
          </div>
        </div>

        {/* Restart Button*/}
        <div className="pt-4">
          <ResetGameButton onClick={handleResetGame} winner={winner} />
        </div>
      </div>
    </div>
  );
}