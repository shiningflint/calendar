import React from 'react';

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

export default CalendarToggle;
