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
    return(
      <div className="schedule-card">
        <div className="schedule-date">{this.props.date}</div>
        <ul className="schedule-ul">
          <ScheduleItem
            text="Meet my friend at Roppongi hills"
            time="14:00"/>
          <ScheduleItem
            text="Buy the ceiling light"
            time="15:00"/>
          <ScheduleItem
            text="Have dinner"
            time="18:00"/>
        </ul>
      </div>
    )
  }
}

export default ScheduleCard;
