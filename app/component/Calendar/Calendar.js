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

function CalendarArrows(props) {
  return(
    <div className={props.wrapperClassName}>
      <img
        src={props.src}
        className={props.imgClassName}
        onClick={props.setPrevMonth}/>
    </div>
  )
}

function Calendar(props) {
  let currentObjects = createDateObjects(props.currentMoment);
  let arrowimg = require('../../assets/arrow.svg');
  return(
    <div>
      <div className="calendar-month-wrap">
        <CalendarArrows
          wrapperClassName="calendar-arrow-left"
          src={arrowimg}
          imgClassName="calendar-arrow-left__img"
          setPrevMonth={props.setPrevMonth}/>
        <CalendarArrows
          wrapperClassName="calendar-arrow-right"
          src={arrowimg}
          imgClassName="calendar-arrow-right__img"
          setPrevMonth={props.setNextMonth}/>
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
