import React from 'react';
import moment from 'moment';
import createDateObjects from './createDateObjects';
const Days = ["Mo","Tu","We","Th","Fr","Sa","Su"];

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: "",
    };
    this.selectDate = this.selectDate.bind(this);
  }

  renderDay(day) {
    return day.format('D')
  }

  selectDate(day, e) {
    this.setState({
      selectedDay: day.format("YYYY-MM-DD"),
    });
  }

  render() {
    let theMoment = moment();
    let potatoes = createDateObjects(theMoment);

    return(
      <div className="calendar">
        <div className="calendar-month-wrap">
          <div className="calendar-arrow-left">
            <img
              src={require('../../assets/arrow.svg')}
              className="calendar-arrow-left__img"/>
          </div>
          <div className="calendar-arrow-right">
            <img
              src={require('../../assets/arrow.svg')}
              className="calendar-arrow-right__img"/>
          </div>
          <div className="calendar-month-name">
            {theMoment.format("MMMM YYYY")}
          </div>
        </div>
        <div className="calendar-days-label">
          {Days.map((label, i) => (
            <div
              key={label}
              className="calendar-days-item">{label}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {potatoes.map((day, i) => {
            return (
              <div
                key={`day-${i}`}
                className={`calendar-grid-item ${day.classNames || ''}`}>
                <span
                  className={
                    "calendar-days-select "+(day.day.isSame(this.state.selectedDay) ? "active" : "")
                  }
                  onClick={this.selectDate.bind(this, day.day)}>
                  { this.renderDay(day.day) }
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Calendar;
