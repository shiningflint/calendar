import React from 'react';
import { setActive, removeActive } from "../Helpers";

function SetTimeDate(props) {
  return(
    <div className="set-wrapper">
      <button
        className="set-button"
        onMouseDown={setActive}
        onMouseUp={removeActive}
        onMouseLeave={removeActive}
        onTouchStart={setActive}
        onTouchEnd={removeActive}>
        <img src={require('../../assets/checked.svg')} className="set-img" />
        <span className="set-text">{props.label}</span>
      </button>
    </div>
  )
}

export default SetTimeDate;
