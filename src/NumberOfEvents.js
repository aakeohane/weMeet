import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChange = event => {
    const value = event.target.value;
    return this.setState({
      numberOfEvents: value
    });
  }

  render() {
    return (
      <div className="numberOfEvents">
        <input
          className="eventNumberInput"
          type="number"
          placeholder="32"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;