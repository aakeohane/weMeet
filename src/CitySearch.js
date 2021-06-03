import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  // Alternative way of setting initial state, can also be done within constructor { super(); this.state =...}
  CitySearch = React.createRef();
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We cannot find the city you are looking for. Please try another city.'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion);
  }

  // when clicking outside of suggestion box, it will remove suggestion box utilizing React.createRef method
  handleClickOutside = (event) => {
    if (
      this.CitySearch.current &&
      !this.CitySearch.current.contains(event.target)
    ) {
      this.setState({
        showSuggestions: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="CitySearch" ref={this.CitySearch}>
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="City"
          onFocus={() => this.setState({showSuggestions: true})}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li 
              className="city-suggestion"
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;