import React from 'react';
import PropTypes from 'prop-types';

function ScheduleItem(props) {
  return(
    <li className="schedule-item">
      <p className="schedule-item__text">{props.text}</p>
      <p className="schedule-item__time">{props.time}</p>
    </li>
  )
}

function ScheduleCard(props) {
  let items = props.schedules.map((val, index) => {
    return (<ScheduleItem
      key={index}
      time={val.time}
      text={val.text}/>);
  });
  return(
    <div className="schedule-card">
      <div className="schedule-date">
        <span className="schedule-date__text">{props.date}</span>
      </div>
      <ul className="schedule-ul">{items}</ul>
    </div>
  )
}

ScheduleCard.propTypes = {
  date: PropTypes.string,
  schedules: PropTypes.array,
}

ScheduleItem.propTypes = {
  time: PropTypes.string,
  text: PropTypes.string,
}

export default ScheduleCard;
