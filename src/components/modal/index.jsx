import React from "react";
import Overlay from "../overlay";
import "./modal.css";
import Button from "../button";
import Input from "../input";

const Modal = props => (
  <Overlay open={props.open}>
    <div className="modal-container">
      <h2>Settings</h2>
      <div className="option">
        <Input
          type="range"
          label={`Percentage of starting living cells - ${Math.round(
            props.options.startingAlive * 100
          )}%`}
          id="startingAlive"
          onChange={props.onChange}
          min={0}
          max={1}
          step={0.01}
          value={props.options.startingAlive}
        />
      </div>
      <Button onClick={props.onClick}>Stop</Button>
      <Button onClick={props.onClick}>Save</Button>
      <Button onClick={props.onClick}>Reset</Button>
      <Button onClick={props.onClick}>Close</Button>
    </div>
  </Overlay>
);

export default Modal;
