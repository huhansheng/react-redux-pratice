import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routesConfig from './router';
import store from './store';

class App extends Component {
  render() {
  	return (
  		<Provider store={store}>
        <Router history={hashHistory} routes={routesConfig} />
			</Provider>
		);
  }
}

export default App;
