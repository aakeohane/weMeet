import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  beforeEach(() => {
    EventWrapper.setState({
      showDetails: false
    });
  });

  // Feature 2 Scenario 1
  test('render event element', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render details button', () => {
    expect(EventWrapper.find('button')).toHaveLength(1);
  });

  // Feature 2 Scenario 2
  test('show details when button is clicked', () => {
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
    expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    expect(EventWrapper.find('.eventDetails').children()).toHaveLength(1);
  });

  // Feature 2 Scenario 3
  test('hide details when button is clicked after details are already shown', () => {
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
    expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
  })
});