import React from 'react';

function ScheduleItem(props) {
  return(
    <li className="schedule-item">
      <p className="schedule-item__text">{props.text}</p>
      <p className="schedule-item__time">{props.time}</p>
    </li>
  )
}

class ScheduleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.schedules.map((val, index) => {
      return (<ScheduleItem
        key={index}
        time={val.time}
        text={val.text}/>);
    });
    return(
      <div className="schedule-card">
        <div className="schedule-date">{this.props.date}</div>
        <ul className="schedule-ul">{items}</ul>
      </div>
    )
  }
}

export default ScheduleCard;
