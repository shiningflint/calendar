import React from 'react';
import ScheduleCard from './ScheduleCard';

class SchedulePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="schedule-page">
        <h1 className="schedule-title">Schedules</h1>
        <div>
          <ScheduleCard date="2017-05-05"/>
          <ScheduleCard date="2017-05-10"/>
          <ScheduleCard date="2017-05-11"/>
        </div>
      </div>
    )
  }
}

export default SchedulePage;
