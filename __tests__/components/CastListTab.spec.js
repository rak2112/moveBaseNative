import 'react-native';
import React from 'react';
import CastListTab from './../../components/CastListTab';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

fit('renders correctly', () => {
  const tree = renderer.create(<CastListTab />).toJSON();
  expect(tree).toMatchSnapshot();
});
