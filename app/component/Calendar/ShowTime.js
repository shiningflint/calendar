import React from 'react';

class ShowTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="show-time-wrapper">
        {this.props.selectedDay}
      </div>
    )
  }
}

export default ShowTime;
