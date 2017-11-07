import React from 'react';
import ScheduleCard from './ScheduleCard';
import { setActive, removeActive } from "../Helpers";

function ScheduleAddBtn(props) {
  return(
    <div
      className="schedule-add-btn"
      onMouseDown={setActive}
      onMouseUp={removeActive}
      onMouseLeave={removeActive}
      onTouchStart={setActive}
      onTouchEnd={removeActive}
      onClick={props.toggleCalendar}>
      <img
        src={props.src}
        className="schedule-add-btn__img" />
    </div>
  );
}

class SchedulePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let days = [];
    for (var key in this.props.dates) {
      days.push(<ScheduleCard
        key={key}
        date={key}
        schedules={this.props.dates[key]}/>);
    }
    return(
      <div className="schedule-page">
        <h1 className="schedule-title">Schedule</h1>
        <ScheduleAddBtn
          src={require("../../assets/plus.svg")}
          toggleCalendar={this.props.toggleCalendar}/>
        <div>
          {days}
        </div>
        <div className="schedule-clearbtn-wrap">
          <button
            className="set-button"
            onMouseDown={setActive}
            onMouseUp={removeActive}
            onMouseLeave={removeActive}
            onTouchStart={setActive}
            onTouchEnd={removeActive}
            onClick={this.props.clearSchedules}>
            clear schedules
          </button>
        </div>
      </div>
    )
  }
}

export default SchedulePage;
