import { Link } from "react-router-dom";



export default function StartGameUi({
  playerInputs,
  onInputChange,
  bothPlayersReady,
  onStart,

}) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-pink-300 to-yellow-200">
      <div className="
        w-full max-w-[430px] mx-4
        rounded-3xl shadow-2xl border border-white/40
        backdrop-blur-xl bg-white/30
        flex flex-col justify-between
        min-h-[90vh] max-h-[90vh]
        p-8
      ">
        {/* Decorative emoji at the top */}
        <div className="flex justify-center mb-2 text-5xl drop-shadow-lg">🎮</div>
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-slate-900 drop-shadow">
          Emoji FIFO Tac Toe
        </h1>

        {/* Scrollable inputs */}
        <div className="flex-1 overflow-y-auto px-1 mb-4">
          {[0, 1].map((i) => {
            const emojiCount = playerInputs[i].emojis
              .split(/[\s,]+/)
              .filter((e) => e.trim().length > 0).length;
            return (
              <div
                key={i}
                className="mb-7 bg-gradient-to-r from-pink-200/50 to-yellow-100/50 rounded-2xl p-5 shadow-lg border border-white/30"
              >
                <div className="mb-4">
                  <label
                    className="block text-slate-800 mb-1 font-bold tracking-wide"
                    htmlFor={`player${i}-name`}
                  >
                    <span className="mr-1">👤</span> Player {i + 1} Name
                  </label>
                  <input
                    id={`player${i}-name`}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/70 text-slate-900 border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-medium"
                    placeholder={`Enter Player ${i + 1}'s Name`}
                    value={playerInputs[i].name}
                    onChange={(e) => onInputChange(i, "name", e.target.value)}
                    maxLength={16}
                  />
                </div>
                <div>
                  <label
                    className="block text-slate-800 mb-1 font-bold tracking-wide"
                    htmlFor={`player${i}-emojis`}
                  >
                    <span className="mr-1">✨</span> Player {i + 1} Emojis <span className="text-xs">(min 3, separate by space or comma)</span>
                  </label>
                  <input
                    id={`player${i}-emojis`}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/70 text-slate-900 border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-medium"
                    placeholder="e.g. 🐶, 🐱, 🐵"
                    value={playerInputs[i].emojis}
                    onChange={(e) =>
                      onInputChange(i, "emojis", e.target.value)
                    }
                    maxLength={32}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {emojiCount} emoji(s)
                    {emojiCount < 3 && (
                      <span className="text-red-500 ml-2 font-semibold animate-pulse">
                        (Enter at least 3)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex gap-4">
          <button
            className={`flex-1 py-3 text-lg font-bold rounded-2xl shadow-lg transition-all duration-200 tracking-wide
              ${
                bothPlayersReady
                  ? "bg-gradient-to-r from-green-400 via-lime-300 to-yellow-300 text-slate-900 hover:scale-105 hover:brightness-110 active:scale-95"
                  : "bg-gray-300 text-gray-400 cursor-not-allowed"
              }`}
            disabled={!bothPlayersReady}
            onClick={onStart}
          >
            Start Game
          </button>
          <Link
            to="/Rule"
            className="flex-1 py-3 text-lg font-bold rounded-2xl shadow-lg transition-all duration-200 tracking-wide bg-gradient-to-r from-green-400 via-lime-300 to-yellow-300 text-center text-slate-900 hover:scale-105 hover:brightness-110 active:scale-95"
            >         
            Game Rules
          </Link>
        </div>
        
      </div>
    </div>
  );
}