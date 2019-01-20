import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SERIALISE_STATE } from './reducers/createReducer';
import rootReducer from './reducers';
import logo from './logo.svg';
import Colours from './containers/Colours';
import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class App extends Component {
  componentDidMount() {
    window.addEventListener('unload', this.serialiseStore);
  }

  serialiseStore = () => {
    store.dispatch({ type: SERIALISE_STATE });
    window.removeEventListener('unload', this.serialiseStore);
  }
  render() {
    return (
      <Provider store={store}>
        <Colours />
      </Provider>
    );
  }
}

export default App;
