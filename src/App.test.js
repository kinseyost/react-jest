import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { shallowToJson } from 'enzyme-to-json'

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});
