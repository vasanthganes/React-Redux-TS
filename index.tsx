import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import {Persons} from './components/members'

import { configureStore } from './redux-store';

const store = configureStore();

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>{this.state.name} Typescript Redux Example</h1>
          <Persons></Persons>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
