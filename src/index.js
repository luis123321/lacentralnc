import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { history, store } from './store';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import {googleAnalyticsTrackId} from './constants';

const MyComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
ReactGA.initialize(googleAnalyticsTrackId);
ReactGA.pageview(window.location.pathname + window.location.search);


serviceWorker.unregister();
