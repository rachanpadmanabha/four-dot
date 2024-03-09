import Dot from "./Dot";
import "./App.css";
import React, { useState } from "react";

function ConnectFourRules({ setStartPlay }) {
  return (
    <div className="max-w-md mx-auto p-6  rounded-md shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Objective:</h2>
      <p className="text-gray-800 mb-4">
        Connect four of your colored discs in a row.
      </p>

      <h2 className="text-3xl font-bold mb-4">Game Setup:</h2>
      <ul className="list-disc pl-6 mb-4 mx-auto text-left">
        <li>Play on a 7x6 grid.</li>
        <li>Two players: one with red discs, one with yellow discs.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Taking Turns:</h2>
      <ul className="list-disc pl-6 mb-4 mx-auto text-left">
        <li>Drop one disc into any of the seven columns on your turn.</li>
        <li>
          Discs fall to the lowest available space in the selected column.
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Winning:</h2>
      <p className="text-gray-800 mb-4">
        Connect four discs in a row horizontally, vertically, or diagonally.
      </p>

      <h2 className="text-3xl font-bold mb-4">Ending the Game:</h2>
      <ul className="list-disc pl-6 mb-4 mx-auto text-left">
        <li>Game ends when a player connects four discs.</li>
        <li>If the grid is filled with no winner, it's a draw.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Strategy:</h2>
      <p className="text-gray-800 mb-4">
        Block your opponent while aiming for your own connections.
      </p>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-600 focus:outline-none"
        onClick={(_) => setStartPlay(true)}
      >
        Start Play
      </button>
    </div>
  );
}

// Example usage:
// <ConnectFourRules />

function App() {
  let [winner, setWinner] = useState({
    winner: "",
    indices: [],
    toggle: "green",
  });
  let [startPlay, setStartPlay] = useState(false);
  return (
    <div className="App">
      <div
        className={`${
          winner.winner || winner.toggle === "green"
            ? "bg-gradient-to-r from-blue-500 to-red-500"
            : winner.toggle === "red"
            ? "bg-red-400"
            : "bg-cyan-400"
        } min-h-screen -mt-[20px]`}
      >
        <header className="text-5xl mt-5 w-fit text-white mx-auto">
          Four Dots
        </header>
        <div className="flex">
          <div className="flex flex-col w-1/3 m-auto  text-red-400">
            <span className=" text-5xl w-full mx-auto">Player 1</span>
            <span
              className={`flex place-content-center ${
                winner.winner === "red" ? "" : "hidden"
              } text-5xl w-full mx-auto`}
            >
              WINNER
            </span>
          </div>
          {startPlay ? (
            <Dot
              winner={winner}
              setWinner={setWinner}
              className={`${startPlay ? "" : "hidden"}`}
            />
          ) : (
            <></>
          )}
          {!startPlay ? (
            <ConnectFourRules setStartPlay={setStartPlay} />
          ) : (
            <></>
          )}
          <div className="flex flex-col w-1/3 m-auto  text-cyan-400">
            <span className=" text-5xl w-full mx-auto">Player 2</span>
            <span
              className={`flex place-content-center ${
                winner.winner === "cyan" ? "" : "hidden"
              } text-5xl w-full mx-auto`}
            >
              WINNER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
