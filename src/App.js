import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="App-main">
      <Board rows={10} columns={10} />
    </div>
  );
}

export default App;
