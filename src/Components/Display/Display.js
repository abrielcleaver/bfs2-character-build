import React from 'react';
import './Display.css';

export default function Display(props) {
  return (
    <div className="display">
      <div className="display-img">
        <img src={`${process.env.PUBLIC_URL}/assets/${props.head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/assets/${props.middle}.png`} />
        <img src={`${process.env.PUBLIC_URL}/assets/${props.bottom}.png`} />
      </div>
      <div>
        <span>You have changed the head {props.headCount} times.</span>
        <span>You have changed the middle {props.middleCount} times.</span>
        <span>You have changed the bottoms {props.bottomCount} times.</span>
        <span>My favorite catchphrase is:</span>
      </div>
    </div>
  );
}
