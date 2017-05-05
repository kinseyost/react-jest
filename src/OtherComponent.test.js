import React from 'react';
import OtherComponent from './OtherComponent.js';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

test('OtherComponent snapshot', () => {
  const wrapper = shallow(<OtherComponent />);
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
})
