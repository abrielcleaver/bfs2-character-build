import './Display.css';
import React from 'react';

export default function Display(props) {
  return (
    <div className="display">
      <div className="display-img">
        <img src=""></img>
        <img src=""></img>
        <img src=""></img>
      </div>
      <span>You have changed the head {props.headCount} times.</span>
      <span>You have changed the middle {props.middleCount} times.</span>
      <span>You have changed the bottoms {props.bottomCount} times.</span>
      <span>My favorite catchphrase is:</span>
    </div>
  );
}
