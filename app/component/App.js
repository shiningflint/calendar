import React from 'react';
import CalendarPage from './Calendar/CalendarPage';
import SchedulePage from './Schedule/SchedulePage';
import sortBy from 'lodash.sortby';
import groupBy from 'lodash.groupby';
const Dates = [
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
  {
    "date": "2016-05-06",
    "time": "10:00",
    "text": "Go to the immigration office"
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dateSorted = sortBy(Dates, (e) => { return e.date })
    let dateReduced = groupBy(dateSorted, (e) => { return e.date });
    return(
      <div>
        <SchedulePage dates={ dateReduced }/>
      </div>
    )
  }
}

export default App;
