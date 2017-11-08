import React from 'react';
import PropTypes from 'prop-types';

function ShowTime(props) {
  return(
    <p className="show-time-wrapper">
      <span className="show-date">{props.selectedDay}</span>
      <span className="show-time">{props.time}</span>
    </p>
  )
}

ShowTime.propTypes = {
  selectedDay: PropTypes.string,
  time: PropTypes.string,
}

export default ShowTime;
