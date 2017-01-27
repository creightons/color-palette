import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import AppContainer from './containers/app-container';
import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
polyfill();

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
