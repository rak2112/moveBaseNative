import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/index';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './../epics/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(epicMiddleware));
  return store;
}
