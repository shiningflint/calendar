import React from 'react';

function TextInput(props) {
  return(
    <div className="text-input-wrap">
      <input
        type="text"
        value={props.text}
        onChange={props.updateText}
        className="text-input" />
    </div>
  );
}

export default TextInput
