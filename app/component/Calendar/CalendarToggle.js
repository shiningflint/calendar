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

class CalendarToggle extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let calendar = (this.props.toggle === "calendar" ? "active" : "");
    let time = (this.props.toggle === "time" ? "active" : "");
    return(
      <div className="calendar-toggle-wrapper">
        <ToggleItem
          label="Date"
          name="calendar"
          src={require("../../assets/calendar.svg")}
          toggle={calendar}
          click={this.props.click} />
        <ToggleItem
          label="Time"
          name="time"
          src={require("../../assets/clock.svg")}
          toggle={time}
          click={this.props.click} />
      </div>
    )
  }
}

export default CalendarToggle;
