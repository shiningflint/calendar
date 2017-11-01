import React from 'react';
import Slider from '../Slider';
import { selectAll, maxminNumber } from '../Helpers';

function TimeDisplay(props) {
  return(
    <input
      type="number"
      className="time-number"
      value={props.time}
      onChange={props.change}
      onFocus={selectAll}/>
  )
}

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 10,
      minute: 20,
    }
    this.changeHour = this.changeHour.bind(this);
    this.changeMinute = this.changeMinute.bind(this);
    this.changeSliderHour = this.changeSliderHour.bind(this);
    this.changeSliderMinute = this.changeSliderMinute.bind(this);
  }

  changeHour(e) {
    let theHour = maxminNumber(e.target.value, this.props.minHour, this.props.maxHour);
    this.setState({hour: theHour});
  }

  changeSliderHour(value) {
    this.setState({hour: value});
  }

  changeSliderMinute(value) {
    this.setState({minute: value});
  }

  changeMinute(e) {
    let theMinute = maxminNumber(e.target.value, this.props.minMinute, this.props.maxMinute);
    this.setState({minute: theMinute});
  }

  render() {
    return(
      <div className="time-picker">
        <div className="time-display">
          <TimeDisplay
            time={this.state.hour}
            change={this.changeHour}/>
          <span className="time-colon">:</span>
          <TimeDisplay time={this.state.minute} change={this.changeMinute}/>
        </div>
        <Slider
          max={this.props.maxHour}
          min={this.props.minHour}
          value={parseInt(this.state.hour)}
          change={this.changeSliderHour}
          label="Hours:"/>
        <Slider
          max={this.props.maxMinute}
          min={this.props.minMinute}
          value={parseInt(this.state.minute)}
          change={this.changeSliderMinute}
          label="Minutes:"/>
      </div>
    )
  }
}

export default TimePicker;
