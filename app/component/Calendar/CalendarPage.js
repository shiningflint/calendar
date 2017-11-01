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
        <TimePicker/>
      </div>
    )
  }
}

export default CalendarPage;
