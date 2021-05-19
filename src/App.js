import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all'
  }

  updateEvents = (location, numberOfEvents) => {
    let locationEvents;
    getEvents().then((events) => {
      const count = numberOfEvents || this.state.numberOfEvents;
      const selectedLocation = location || this.state.selectedLocation;

      if (selectedLocation === 'all') {
        locationEvents = events.slice(0, count);
      } else {
        locationEvents = events.filter((event) => event.location === selectedLocation)
        .slice(0, count); 
      }
      this.setState({
        events: locationEvents,
        numberOfEvents: count,
        selectedLocation
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList  events={this.state.events} />
      </div>
    );
  }
}

export default App;
