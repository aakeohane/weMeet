import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    return this.setState({
      numberOfEvents: value
    });
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          className="eventNumberInput"
          type="number"
          placeholder="32"
          value={numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;