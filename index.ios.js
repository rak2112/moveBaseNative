/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();
console.log('in app');
const MovieBaseApp = () => (
  <Provider store={store}>
   <AppContainer/>
  </Provider>
);
AppRegistry.registerComponent('movieBaseNative', () => MovieBaseApp);
