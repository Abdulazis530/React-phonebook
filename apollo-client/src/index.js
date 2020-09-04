import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PhoneBox from './containers/PhoneBox';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <PhoneBox />
  </Provider>
  , document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
