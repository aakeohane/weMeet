import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render number input to specify number of events', () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput')).toHaveLength(1);
  });

  // Feature 3 Scenario 1
  test('default value for number of events is 32', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  // Feature 3 Scenario 2
  test('change the state when input changes', () => {
    NumberOfEventsWrapper.find('.eventNumberInput').simulate('change', {
      target: { value: 24 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(24);
  });
})