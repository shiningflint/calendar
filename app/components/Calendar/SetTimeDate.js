import React from 'react';
import PropTypes from 'prop-types';
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
        onTouchEnd={removeActive}
        onClick={props.submitSchedule.bind(this, props.text, props.date, props.time)}>
        <img src={require('../../assets/checked.svg')} className="set-img" />
        <span className="set-text">{props.label}</span>
      </button>
    </div>
  )
}

SetTimeDate.propTypes = {
  label: PropTypes.string,
  submitSchedule: PropTypes.func,
  text: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
}

export default SetTimeDate;
