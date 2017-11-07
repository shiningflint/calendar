import React from 'react';
import CalendarPage from './Calendar/CalendarPage';
import SchedulePage from './Schedule/SchedulePage';
import sortBy from 'lodash.sortby';
import groupBy from 'lodash.groupby';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarShow: false,
      dates: JSON.parse(localStorage.getItem("dates")),
    };
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
    this.clearSchedules = this.clearSchedules.bind(this);
  }

  toggleCalendar() {
    this.setState({
      calendarShow: !this.state.calendarShow,
    });
  }

  submitSchedule(text, date, time) {
    let newObject = {}
    let newArr = [];
    newObject.date = date;
    newObject.time = time;
    newObject.text = text;
    if (this.state.dates === null) {
      newArr = [newObject];
    } else {
      newArr = [...this.state.dates, newObject];
    }
    localStorage.setItem("dates", JSON.stringify(newArr));
    this.setState({
      dates: newArr,
    });
    if(this.state.calendarShow === true) {
      this.setState({ calendarShow: false });
    }
  }

  clearSchedules() {
    localStorage.removeItem("dates");
    this.setState({
      dates: [],
    });
  }

  render() {
    let dateSorted = sortBy(this.state.dates, (e) => { return e.date })
    let dateReduced = groupBy(dateSorted, (e) => { return e.date });
    let calendar = "";
    if (this.state.calendarShow) {
      calendar = <div className="calendar-page-modal">
        <CalendarPage submitSchedule = {this.submitSchedule}/>
        <img
          src={require("../assets/plus.svg")}
          className="calendar-page-close"
          onClick={this.toggleCalendar}/>
        </div>
    } else { calendar = "" }
    return(
      <div className="app-wrapper">
        <SchedulePage
          dates={ dateReduced }
          toggleCalendar={this.toggleCalendar}
          clearSchedules={this.clearSchedules}/>
        { calendar }
      </div>
    )
  }
}

export default Scheduler;
