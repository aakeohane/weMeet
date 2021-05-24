import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });
    if (value > 32 || value < 1) {
      return this.setState({
        infoText: 'Select number from 1 to 32'
      })
    } else {
      return this.setState({
        infoText: ''
      });
    }
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
        <ErrorAlert className="error-alert" text={this.state.infoText}/>
      </div>
    );
  }
}

export default NumberOfEvents;