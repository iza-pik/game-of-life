import React from "react";
import Cell from "../cell";
import "./board.css";
import generateGrid from "../../utils/generateGrid";
import Button from "../button";
import Modal from "../modal";

export default class Board extends React.Component {
  state = {
    board: generateGrid(this.props.width, this.props.height, 34),
    modalVisible: false,
    options: {
      startingAlive: 0.2,
      minCellAlive: 2,
      maxCellAlive: 3,
      minCellDead: 3,
      maxCellDead: 3,
      interval: 100
    }
  };
  onClickHandler = event => {
    console.log(event.target.dataset);
    const { x: clickX, y: clickY } = event.target.dataset;
    const newBoard = this.state.board.map((row, y) =>
      row.map((cell, x) =>
        x === clickX && y === clickY
          ? Number(!this.state.board[y][x])
          : this.state.board[y][x]
      )
    );
    this.setState({ board: newBoard });
  };
  onChangeOptions = event => {
    this.setState({
      options: {
        ...this.state.options,
        [event.target.id]: event.target.value
      }
    });
  };
  toggleModal = event => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    return (
      <>
        <Modal
          open={this.state.modalVisible}
          onClick={this.toggleModal}
          options={this.state.options}
          onChange={this.onChangeOptions}
        />
        <div className="board">
          {this.state.board.map((row, y) => (
            <div key={y} className="board-row">
              {row.map((cellLife, x) => (
                <Cell
                  key={x}
                  data-x={x}
                  data-y={y}
                  onClick={this.onClickHandler}
                  cellLife={cellLife}
                />
              ))}
            </div>
          ))}
          {/* <Button>Start</Button> */}
          <Button onClick={this.toggleModal}>Settings</Button>
          {/* <Button>Reset</Button> */}
        </div>
      </>
    );
  }
}
