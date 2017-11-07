import React from 'react';

function TextInput(props) {
  return(
    <div className="text-input-wrap">
      <input
        type="text"
        value={props.text}
        onChange={props.updateText}
        className="text-input"
        placeholder="What schedule will it be?" />
    </div>
  );
}

export default TextInput
