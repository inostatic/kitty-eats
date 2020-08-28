import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'babel-polyfill';
import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux/createStore";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

