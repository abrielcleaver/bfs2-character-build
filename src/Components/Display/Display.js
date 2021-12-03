import '.Display.css';
import React from 'react';

export default function Display() {
    return (
    <div className="display">
        <div className="display-img">
        <img src=""></img>
        <img src=""></img>
        <img src=""></img>
      </div>
      <span>You have changed the head {props.headCount} times.</span>
      <span>You have changed the top {props.topCount} times.</span>
      <span>You have changed the bottoms {props.bottomCount} times.</span>
      <span>My favorite catchphrase is:</span>
      <div>
        {props.catchphrase.map((catchphrase) => {
          <span>{catchphrase}</span>;
        })}
        </div>

    </div>
    );
}