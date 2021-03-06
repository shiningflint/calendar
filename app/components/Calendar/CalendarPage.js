import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarToggle from './CalendarToggle';
import Calendar from './Calendar';
import TimePicker from './TimePicker';
import ShowTime from './ShowTime';
import SetTimeDate from './SetTimeDate';
import TextInput from './TextInput';
import { maxminNumber, pad } from '../Helpers';
const minHour = 0;
const maxHour = 23;
const minMinute = 0;
const maxMinute = 59;

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "calendar",
      currentMoment: moment(),
      selectedDay: moment().format("YYYY-MM-DD"),
      hour: moment().hour(),
      minute: moment().minute(),
      text: "",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.updateCalendar = this.updateCalendar.bind(this);
    this.changeHour = this.changeHour.bind(this);
    this.changeMinute = this.changeMinute.bind(this);
    this.changeSliderHour = this.changeSliderHour.bind(this);
    this.changeSliderMinute = this.changeSliderMinute.bind(this);
    this.updateText = this.updateText.bind(this);
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

  changeHour(e) {
    let theHour = maxminNumber(parseInt(e.target.value), minHour, maxHour);
    this.setState({hour: theHour});
  }

  changeMinute(e) {
    let theMinute = maxminNumber(parseInt(e.target.value), minMinute, maxMinute);
    this.setState({minute: theMinute});
  }

  changeSliderHour(value) {
    this.setState({hour: value});
  }

  changeSliderMinute(value) {
    this.setState({minute: value});
  }

  updateText(e) {
    this.setState({
      text: e.currentTarget.value,
    });
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
        hour={this.state.hour}
        minute={this.state.minute}
        maxHour={maxHour}
        minHour={minHour}
        maxMinute={maxMinute}
        minMinute={minMinute}
        changeHour={this.changeHour}
        changeMinute={this.changeMinute}
        changeSliderHour={this.changeSliderHour}
        changeSliderMinute={this.changeSliderMinute}/>
    }
    let time = (pad(this.state.hour, 2)+":"+pad(this.state.minute, 2));
    return(
      <div className="calendar-page">
        <CalendarToggle
          toggle={this.state.toggle}
          click={this.handleToggle}/>
        {content}
        <ShowTime
          selectedDay={this.state.selectedDay}
          time={pad(this.state.hour, 2)+":"+pad(this.state.minute, 2)}/>
        <TextInput
          text={this.state.text}
          updateText={this.updateText}
          submitError={this.props.submitError} />
        <SetTimeDate
          label="Set schedule"
          submitSchedule={this.props.submitSchedule}
          text={this.state.text}
          date={this.state.selectedDay}
          time={time}/>
      </div>
    )
  }
}

CalendarPage.propTypes = {
  submitError: PropTypes.bool,
  submitSchedule: PropTypes.func
}

export default CalendarPage;
