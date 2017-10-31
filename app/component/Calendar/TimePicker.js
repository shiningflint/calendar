import React from 'react';

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <input type="range" className="time-slider" />
      </div>
    )
  }
}

export default TimePicker;
