import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./redux/reducers";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

// Development:
// const store = createStore(rootReducer, composeWithDevTools());

// Production:
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
