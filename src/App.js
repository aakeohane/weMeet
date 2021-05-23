import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { getEvents, checkToken } from './api';
import Login from "./login";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    tokenCheck: false
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

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({ 
  //         events: events.slice(0, this.state.numberOfEvents), 
  //         locations: extractLocations(events)
  //       });
  //     }
  //   });
  // }

  async componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    const validToken = accessToken !== null  ? await checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if(validToken === true) this.updateEvents()
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    this.mounted = true;
    if (code && this.mounted === true && validToken === false){ 
      this.setState({tokenCheck:true });
      this.updateEvents()
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { tokenCheck } = this.state;
    return tokenCheck === false ? (
      <div className="App">
        <Login />
      </div>
    ) : (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList  events={this.state.events} />
      </div>
    );
  }
}

export default App;
