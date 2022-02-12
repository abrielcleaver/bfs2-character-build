import './Editor.css';
import React from 'react';

export default function Editor(props) {
  const handleHead = (e) => {
    props.setHead(e.target.value);
    props.setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    props.setMiddle(e.target.value);
    props.setMiddleCount((prevState) => prevState + 1);
  };
  const handleBottom = (e) => {
    props.setBottom(e.target.value);
    props.setBottomCount((prevState) => prevState + 1);
  };
  const handleButton = () => {
    props.setCatchphrase((prevState) => [...prevState]);
  };
  return (
    <div className="editor">
      <div>
        <select value={props.head} onChange={handleHead}>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
        </select>
        <label>head</label>
      </div>
      <div>
        <select value={props.middle} onChange={handleMiddle}>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
        </select>
        <label>middle</label>
      </div>
      <div>
        <select value={props.bottom} onChange={handleBottom}>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
          <option value="">-</option>
        </select>
        <label>bottoms</label>
      </div>
      <div>
        <label>Add a catchphrase: </label>
        <input type="text" value={props.input} onChange={(e) => props.setInput(e.target.value)} />
      </div>
      <button onClick={handleButton}>Submit</button>
    </div>
  );
}
