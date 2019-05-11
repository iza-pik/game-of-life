import React from "react";
import Cell from "../cell";
import "./board.css";

export default class Board extends React.Component {
  state = { board: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]] };
  render() {
    return (
      <div className="board">
        {this.state.board.map(row => (
          <div className="board-row">
            {row.map(cell => (
              <Cell cell={cell} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
