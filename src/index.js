import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const store = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(reduxThunk))
//     );

const rootreducer = combineReducers({
  CounterReducer,
  ResultReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("[Middleware] Dispatching", action);
  const result = next(action);
  console.log("[Middleware] next state", store.getState());
  return result;
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
