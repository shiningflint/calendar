import React from 'react';
import CalendarToggle from './CalendarToggle';
import Calendar from './Calendar';
import TimePicker from './TimePicker';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "calendar",
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({
      toggle: e
    });
  }

  render() {
    let content = <Calendar/>;
    if (this.state.toggle === "time") {
      content = <TimePicker
        maxHour={23}
        minHour={0}
        maxMinute={59}
        minMinute={0}/>
    }
    return(
      <div className="calendar-page">
        <CalendarToggle
          toggle={this.state.toggle}
          click={this.handleToggle}/>
        {content}
      </div>
    )
  }
}

export default CalendarPage;
