import React from 'react';

class ShowTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <p className="show-time-wrapper">
        <span className="show-date">{this.props.selectedDay}</span>
        <span className="show-time">{this.props.time}</span>
      </p>
    )
  }
}

export default ShowTime;
