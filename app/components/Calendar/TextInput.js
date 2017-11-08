import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  return(
    <div className="text-input-wrap">
      <input
        type="text"
        value={props.text}
        onChange={props.updateText}
        className={"text-input"+ (props.submitError ? " error" : "")}
        placeholder="What schedule will it be?" />
    </div>
  );
}

TextInput.propTypes = {
  text: PropTypes.string,
  updateText: PropTypes.func,
  submitError: PropTypes.bool,
}

export default TextInput
