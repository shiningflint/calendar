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

function TimePicker(props) {
  return(
    <div className="time-picker">
      <div className="time-display">
        <TimeDisplay
          time={props.hour}
          change={props.changeHour}/>
        <span className="time-colon">:</span>
        <TimeDisplay time={props.minute} change={props.changeMinute}/>
      </div>
      <Slider
        max={props.maxHour}
        min={props.minHour}
        value={props.hour}
        change={props.changeSliderHour}
        label="Hours:"/>
      <Slider
        max={props.maxMinute}
        min={props.minMinute}
        value={props.minute}
        change={props.changeSliderMinute}
        label="Minutes:"/>
    </div>
  )
}

export default TimePicker;
