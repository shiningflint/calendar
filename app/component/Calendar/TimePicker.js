import React from 'react';
import Slider from '../Slider';

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{paddingTop: '64px'}}>
        <Slider/>
      </div>
    )
  }
}

export default TimePicker;
