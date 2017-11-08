import React from 'react';
import PropTypes from 'prop-types';
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
    let clear_btn = "";
    if (Object.keys(this.props.dates).length === 0) {
      clear_btn = <p className="set-no-text">
          No schedules set, <br/>hit the plus button to add one.
        </p>
    } else {
      clear_btn = <button
          className="set-button"
          onMouseDown={setActive}
          onMouseUp={removeActive}
          onMouseLeave={removeActive}
          onTouchStart={setActive}
          onTouchEnd={removeActive}
          onClick={this.props.clearSchedules}>
          clear schedules
        </button>
      for (var key in this.props.dates) {
        days.push(<ScheduleCard
          key={key}
          date={key}
          schedules={this.props.dates[key]}/>);
      }
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
          { clear_btn }
        </div>
      </div>
    )
  }
}

SchedulePage.propTypes = {
  dates: PropTypes.object,
  toggleCalendar: PropTypes.func,
  clearSchedules: PropTypes.func,
}

ScheduleAddBtn.propTypes = {
  src: PropTypes.string,
  toggleCalendar: PropTypes.func,
}

export default SchedulePage;
