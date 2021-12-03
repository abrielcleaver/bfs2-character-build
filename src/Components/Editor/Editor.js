import './Editor.css';
import React from 'react';

export default function Editor() {
  return (
    <div className="editor">
      <select value="props.head">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label>head</label>
      <select value="props.top">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label>top</label>
      <select value="props.bottom">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label>bottoms</label>
      <select value="props.catchphrase">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label>catchphrase</label>
    </div>
  );
}
