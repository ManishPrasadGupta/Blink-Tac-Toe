import { useState } from "react";
import StartGameUi from "./ui/startGameUi";

function parseEmojis(input) {
  return input
    .split(/[\s,]+/)
    .map((e) => e.trim())
    .filter((e) => e.length > 0);
}

export default function StartGame({ onStart }) {
  const [playerInputs, setPlayerInputs] = useState([
    { name: "", emojis: "" },
    { name: "", emojis: "" },
  ]);

  const bothPlayersReady =
    playerInputs.every(
      (p) => p.name.trim().length > 0 && parseEmojis(p.emojis).length >= 3
    );

  const handleChange = (idx, field, value) => {
    setPlayerInputs((inputs) =>
      inputs.map((p, i) => (i === idx ? { ...p, [field]: value } : p))
    );
  };

  const handleStart = () => {
    onStart([
      {
        name: playerInputs[0].name.trim(),
        emojis: parseEmojis(playerInputs[0].emojis),
      },
      {
        name: playerInputs[1].name.trim(),
        emojis: parseEmojis(playerInputs[1].emojis),
      },
    ]);
  };

  return (
    <StartGameUi
      playerInputs={playerInputs}
      onInputChange={handleChange}
      bothPlayersReady={bothPlayersReady}
      onStart={handleStart}
    />
  );
}