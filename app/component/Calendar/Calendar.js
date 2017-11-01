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

function Calendar(props) {
  let currentObjects = createDateObjects(props.currentMoment);
  return(
    <div>
      <div className="calendar-month-wrap">
        <div className="calendar-arrow-left">
          <img
            src={require('../../assets/arrow.svg')}
            className="calendar-arrow-left__img"
            onClick={props.setPrevMonth}/>
        </div>
        <div className="calendar-arrow-right">
          <img
            src={require('../../assets/arrow.svg')}
            className="calendar-arrow-right__img"
            onClick={props.setNextMonth}/>
        </div>
        <div className="calendar-month-name">
          {props.currentMoment.format("MMMM YYYY")}
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
        selectedDay={props.selectedDay}
        selectDate={props.selectDate}/>
    </div>
  )
}

export default Calendar;
