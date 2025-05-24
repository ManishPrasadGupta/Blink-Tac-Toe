import React from 'react';

function ResetGameButton({ onClick, winner }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full py-3 mt-3 text-lg font-bold rounded-2xl shadow-lg transition-all duration-200 tracking-wide
        ${
          winner !== null
            ? "bg-gradient-to-r from-green-400 via-lime-300 to-yellow-300 text-slate-900 hover:scale-105 hover:brightness-110 active:scale-95"
            : "bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:bg-gray-400 hover:text-slate-900 active:scale-95"
        }
      `}
    >
      {winner !== null ? '🎉 Play Again' : '🔄 Restart Game'}
    </button>
  );
}

export default ResetGameButton;