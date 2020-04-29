import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";

const rootreducer = combineReducers({
  CounterReducer,
  ResultReducer,
});

const store = createStore(rootreducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
