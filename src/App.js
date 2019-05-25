import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="App-main">
      <Board width={800} height={600} />
    </div>
  );
}

export default App;
