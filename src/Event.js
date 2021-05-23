import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState(previousState => ({
      showDetails: !previousState.showDetails
    }));
  }

  render() {
    const { event } =this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <div className="eventName">
          <h1>{event.summary}</h1>
          <p className="eventLocation">{event.location}</p>
          <div className="eventTimeStart">{event.start.dateTime}</div>
        </div>
        {!showDetails
          ? <button
              className="details-btn"
              onClick={() => this.handleClick()}
              >Show details
            </button>
          : <div>
              <div className="eventDetails">
                <p className="eventDescription">{event.description}</p>
              </div>
              <button
                className="details-btn"
                onClick={() => this.handleClick()}
                >Hide details
              </button>
            </div>
        }
      </div>
    );
  }
}

export default Event;