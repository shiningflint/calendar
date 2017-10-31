import React from 'react';
import moment from 'moment';
import createDateObjects from './createDateObjects';
const Days = ["Mo","Tu","We","Th","Fr","Sa","Su"];

function CalendarDays(props) {
  return(
    <div className={`calendar-grid ${props.monthClass}`}>
      {props.currentObjects.map((day, i) => {
        return (
          <div
            key={`day-${i}`}
            className={`calendar-grid-item ${day.classNames || ''}`}>
            <span
              className={
                "calendar-days-select "+
                (day.day.isSame(props.selectedDay, 'day') ? "active" : "")
              }
              onClick={props.selectDate.bind(this, day.day)}>
              { day.day.format('D') }
            </span>
          </div>
        )
      })}
    </div>
  );
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoment: moment(),
      selectedDay: "",
    };
    this.selectDate = this.selectDate.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  selectDate(day, e) {
    if (
      this.state.currentMoment.isBefore(day, 'month') ||
      this.state.currentMoment.isAfter(day, 'month')
    ) {
      return this.updateCalendar(day);
    }
    this.setState({
      selectedDay: day.format("YYYY-MM-DD"),
    });
  }

  updateCalendar(newDate) {
    this.setState({
      currentMoment: newDate,
      selectedDay: newDate.format("YYYY-MM-DD"),
    });
  }

  setNextMonth(e) {
    this.setState((prevState) => ({
      currentMoment: prevState.currentMoment.add(1, 'months'),
    }));
  }

  setPrevMonth(e) {
    this.setState((prevState) => ({
      currentMoment: prevState.currentMoment.subtract(1, 'months'),
    }));
  }

  render() {
    let currentObjects = createDateObjects(this.state.currentMoment);

    return(
      <div className="calendar">
        <div className="calendar-month-wrap">
          <div className="calendar-arrow-left">
            <img
              src={require('../../assets/arrow.svg')}
              className="calendar-arrow-left__img"
              onClick={this.setPrevMonth}/>
          </div>
          <div className="calendar-arrow-right">
            <img
              src={require('../../assets/arrow.svg')}
              className="calendar-arrow-right__img"
              onClick={this.setNextMonth}/>
          </div>
          <div className="calendar-month-name">
            {this.state.currentMoment.format("MMMM YYYY")}
          </div>
        </div>
        <div className="calendar-days-label">
          {Days.map((label, i) => (
            <div
              key={label}
              className="calendar-days-item">{label}</div>
          ))}
        </div>
        <CalendarDays
          monthClass="current"
          currentObjects={currentObjects}
          selectedDay={this.state.selectedDay}
          selectDate={this.selectDate}/>
      </div>
    )
  }
}

export default Calendar;
