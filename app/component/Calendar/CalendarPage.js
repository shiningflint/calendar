import React from 'react';
import moment from 'moment';
import CalendarToggle from './CalendarToggle';
import Calendar from './Calendar';
import TimePicker from './TimePicker';
import ShowTime from './ShowTime';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "calendar",
      currentMoment: moment(),
      selectedDay: moment().format("YYYY-MM-DD"),
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  handleToggle(e) {
    this.setState({
      toggle: e,
    });
  }

  selectDate(day, e) {
    if (
      this.state.currentMoment.isBefore(day, 'month') ||
      this.state.currentMoment.isAfter(day, 'month')
    ) {
      return this.updateCalendar(day);
    }
    this.setState({
      selectedDay: day.format("YYYY-MM-DD"),
    });
  }

  updateCalendar(newDate) {
    this.setState({
      currentMoment: newDate,
      selectedDay: newDate.format("YYYY-MM-DD"),
    });
  }

  setNextMonth(e) {
    this.setState((prevState) => ({
      currentMoment: prevState.currentMoment.add(1, 'months'),
    }));
  }

  setPrevMonth(e) {
    this.setState((prevState) => ({
      currentMoment: prevState.currentMoment.subtract(1, 'months'),
    }));
  }

  render() {
    let content = <Calendar
      currentMoment={this.state.currentMoment}
      selectedDay={this.state.selectedDay}
      selectDate={this.selectDate}
      setPrevMonth={this.setPrevMonth}
      setNextMonth={this.setNextMonth}/>;
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
        <ShowTime selectedDay={this.state.selectedDay}/>
      </div>
    )
  }
}

export default CalendarPage;
