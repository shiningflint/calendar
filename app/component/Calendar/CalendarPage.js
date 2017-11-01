import React from 'react';
import Calendar from './Calendar';
import TimePicker from './TimePicker';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="calendar-page">
        <Calendar/>
        <TimePicker
          maxHour={23}
          minHour={0}
          maxMinute={59}
          minMinute={0}/>
      </div>
    )
  }
}

export default CalendarPage;
