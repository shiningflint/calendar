import React from 'react';
import CalendarPage from './Calendar/CalendarPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CalendarPage/>
      </div>
    )
  }
}

export default App;
