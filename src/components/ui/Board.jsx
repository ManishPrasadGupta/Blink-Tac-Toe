import React from 'react';

function Board({ board, winner, handleSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-3 bg-white/30 rounded-2xl shadow-lg overflow-hidden mb-7 p-4 transition-all">
      {board.map((cell, index) => (
        <button
          key={index}
          className={`
            w-full aspect-square flex items-center justify-center
            rounded-xl text-4xl md:text-5xl font-extrabold transition-all duration-200
            border-2
            ${cell
              ? cell.player === 0
                ? 'bg-yellow-100/60 text-yellow-600 border-yellow-300 shadow-md'
                : 'bg-cyan-100/60 text-cyan-600 border-cyan-300 shadow-md'
              : 'bg-white/50 text-slate-700 border-slate-300 hover:bg-pink-200/60 hover:scale-105 active:scale-95'
            }
            ${winner !== null || cell ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
          `}
          onClick={() => handleSquareClick(index)}
          disabled={!!cell || winner !== null}
          style={{ minWidth: 0 }}
          aria-label={`Cell ${index + 1} ${cell ? cell.emoji : "empty"}`}
        >
          <span className="transition-transform duration-300">{cell ? cell.emoji : ""}</span>
        </button>
      ))}
    </div>
  );
}

export default Board;