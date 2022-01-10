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
  return (
    <div className="editor">
      <select value="props.head" onChange={handleHead}>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
      </select>
      <label>head</label>
      <select value="props.middle" onChange={handleMiddle}>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
      </select>
      <label>middle</label>
      <select value="props.bottom" onChange={handleBottom}>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
      </select>
      <label>bottoms</label>
      <select value="props.catchphrase">
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
        <option value="">-</option>
      </select>
      <label>catchphrase</label>
    </div>
  );
}
