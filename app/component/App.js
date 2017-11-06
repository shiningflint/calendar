import React from 'react';
import CalendarPage from './Calendar/CalendarPage';
import SchedulePage from './Schedule/SchedulePage';
const Dates = [
  {
    "date": "2017-05-05",
    "time": "14:00",
    "text": "Go shopping"
  },
  {
    "date": "2017-05-05",
    "time": "13:00",
    "text": "Do Laundry"
  },
  {
    "date": "2017-05-05",
    "time": "17:00",
    "text": "Play"
  },
  {
    "date": "2017-05-06",
    "time": "10:00",
    "text": "Go to the immigration office"
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SchedulePage/>
      </div>
    )
  }
}

export default App;
