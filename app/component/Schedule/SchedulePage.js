import React from 'react';
import ScheduleCard from './ScheduleCard';

class SchedulePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let days = [];
    console.log(this.props.dates);
    for (var key in this.props.dates) {
      days.push(<ScheduleCard
        key={key}
        date={key}
        schedules={this.props.dates[key]}/>);
    }
    return(
      <div className="schedule-page">
        <h1 className="schedule-title">Schedules</h1>
        <div>
          {days}
        </div>
      </div>
    )
  }
}

export default SchedulePage;
