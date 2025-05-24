import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Game"; 
import Rules from "./rules";

export default function App() {
  return (
 
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/Rule" element={<Rules />} />
      </Routes>
 
  );
}