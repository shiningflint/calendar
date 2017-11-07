import React from 'react';
import CalendarPage from './Calendar/CalendarPage';
import SchedulePage from './Schedule/SchedulePage';
import sortBy from 'lodash.sortby';
import groupBy from 'lodash.groupby';
var Dates = [
  {
    "date": "2017-05-10",
    "time": "10:00",
    "text": "Takao san time!"
  },
  {
    "date": "2017-05-10",
    "time": "14:00",
    "text": "Reach Takao san"
  },
];

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarShow: false,
    };
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
  }

  toggleCalendar() {
    this.setState({
      calendarShow: !this.state.calendarShow,
    });
  }

  submitSchedule(text, date, time) {
    let newObject = {}
    newObject.date = date;
    newObject.time = time;
    newObject.text = text;
    Dates.push(newObject);
    if(this.state.calendarShow === true) {
      this.setState({ calendarShow: false });
    }
  }

  render() {
    let dateSorted = sortBy(Dates, (e) => { return e.date })
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
          toggleCalendar={this.toggleCalendar}/>
        { calendar }
      </div>
    )
  }
}

export default Scheduler;
