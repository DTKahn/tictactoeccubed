import React, { Component } from 'react';
import './Box.css';

const Box = props => {
  return (
    <li className={"box " + props.player} >{props.column + props.row}</li>
  );
}

export default Box;