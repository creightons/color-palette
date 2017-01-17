import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/app';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
