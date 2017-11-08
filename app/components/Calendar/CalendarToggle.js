import React from 'react';
import PropTypes from 'prop-types';

function ToggleItem(props) {
  return(
    <div
      className={"calendar-toggle-item "+props.toggle}
      onClick={props.click.bind(this, props.name)}>
      <span className="calendar-toggle-img-wrap">
        <img
          src={props.src}
          className="calendar-toggle-img" />
      </span>
      <span className="calendar-toggle-text">{props.label}</span>
    </div>
  )
}

function CalendarToggle(props) {
  let calendar = (props.toggle === "calendar" ? "active" : "");
  let time = (props.toggle === "time" ? "active" : "");
  return(
    <div className="calendar-toggle-wrapper">
      <ToggleItem
        label="Date"
        name="calendar"
        src={require("../../assets/calendar.svg")}
        toggle={calendar}
        click={props.click} />
      <ToggleItem
        label="Time"
        name="time"
        src={require("../../assets/clock.svg")}
        toggle={time}
        click={props.click} />
    </div>
  )
}

CalendarToggle.propTypes = {
  toggle: PropTypes.string,
  click: PropTypes.func,
}
ToggleItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  toggle: PropTypes.string,
  click: PropTypes.func,
}

export default CalendarToggle;
