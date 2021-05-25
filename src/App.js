import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all'
  }

  updateEvents = (location, eventCount) => {
    const { selectedLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          selectedLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (selectedLocation === 'all') 
        ? events 
        : events.filter((event) => event.location === selectedLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount
        });
      });
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
      }
      if (!navigator.onLine) {
        this.setState({
          infoText:
            'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.infoText} />
        <h1>weMeet</h1>
        <p>Choose the city nearest you</p>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList  events={this.state.events} />
      </div>
    );
  }
}

export default App;
