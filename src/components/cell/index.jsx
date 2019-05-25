import React from "react";
import "./cell.css";

const Cell = props => (
  <div
    {...props}
    style={{ backgroundColor: `rgba(200, 100, 100, ${props.cellLife})` }}
    className="cell"
  />
);

export default Cell;
