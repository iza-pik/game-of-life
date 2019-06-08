import React from "react";

const Input = props => (
  <>
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    <input {...props} />
  </>
);

export default Input;
