import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: {},
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
          <div className="eventTimeStart">{new Date(event.start.dateTime).toLocaleString(
            "en-US", { 
            year: "numeric",
            month: "long",
            day: "numeric"
            }
          )}</div>
        </div>
        {!showDetails
          ? <button
              className="details-btn"
              onClick={() => this.handleClick()}
              ><span>Show details</span>
            </button>
          : <div>
              <div className="eventDetails">
                <p className="eventDescription">{event.description}</p>
              </div>
              <button
                className="details-btn details-btn-clicked"
                onClick={() => this.handleClick()}
                ><span>Hide details</span>
              </button>
            </div>
        }
      </div>
    );
  }
}

export default Event;