import React from "react";
import { useNavigate } from "react-router-dom";


const rules = [
  {
    title: "Board Structure",
    points: [
      "The game is played on a 3x3 grid like regular Tic Tac Toe.",
      "The grid starts empty and can contain a maximum of 6 active emojis (3 per player) at any given time.",
    ],
  },
  {
    title: "Emoji Categories",
    points: [
      "Each player selects one emoji category before the game begins.",
      (
        <span>
          Example categories:<br />
          <strong>Animals:</strong> 🐶 🐱 🐵 🐰<br />
          <strong>Food:</strong> 🍕 🍟 🍔 🍩<br />
          <strong>Sports:</strong> ⚽️ 🏀 🏈 🎾
        </span>
      ),
      "On their turn, a player is assigned a random emoji from their own category.",
      "You can create your own category of emojis.",
    ],
  },
  {
    title: "Turn-Based Play",
    points: [
      "Player 1 begins, followed by Player 2, alternating every turn.",
      "A player can place their emoji on any cell.",
    ],
  },
  {
    title: "Vanishing Rule",
    points: [
      "Each player can have only 3 emojis on the board at any time.",
      "When a player attempts to place a 4th emoji, their oldest emoji is removed automatically (FIFO logic).",
      "The 4th emoji cannot be placed over where the 1st emoji was placed.",
      "The emoji disappears visually, and that cell becomes empty or reusable.",
    ],
  },
  {
    title: "Winning Condition",
    points: [
      "A player wins by forming a line of 3 of their own emojis: horizontally, vertically, or diagonally.",
      "Winning emojis must all belong to the same player (category-based check).",
    ],
  },
  {
    title: "Game Ending",
    points: [
      "The game continues until one player wins.",
      "Draws are not possible because the board can never be fully filled.",
      "After a win:",
      (
        <ul className="list-disc ml-5">
          <li>Display a “Player X Wins!” message.</li>
          <li>Show a “Play Again” button to restart the game from scratch.</li>
        </ul>
      ),
    ],
  },
];

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-pink-300 to-yellow-200 animate-gradient-x transition-all duration-300">
      <div className="relative w-full max-w-[600px] mx-4">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-300/30 rounded-full filter blur-2xl opacity-70 animate-pulse hidden md:block" />
        
        {/* scrolling feature if the content exceeds the viewport height */}
        <div
          className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl p-8 border border-white/40"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            scrollbarColor: "#c3cfe2 #f5f7fa",
            scrollbarWidth: "thin",
          }}
        >
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold mb-7 shadow transition-all"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-slate-900 drop-shadow">
            🕹️ Help: Blink Tac Toe Rules
          </h1>
          <div className="mb-5 text-slate-800 text-lg text-center">
            Learn how to play Blink Tac Toe!
          </div>
          <div className="space-y-5">
            {rules.map((rule, idx) => (
              <div key={rule.title}>
                <h2 className="text-xl font-bold text-indigo-700 mb-2">
                  {`${idx + 1}. ${rule.title}`}
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-slate-700">
                  {rule.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-blue-50/80 rounded-xl text-blue-900 text-center font-medium shadow">
            Need more help?<br />
            Reach out:{" "}
            <a
              href="mailto:support@example.com"
              className="text-indigo-600 underline"
            >
              support@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;