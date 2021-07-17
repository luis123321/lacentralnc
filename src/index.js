import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { history, store } from './store';
import './index.css';
import App from './App';

const MyComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));

serviceWorker.unregister();
