import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./components/eventsIndex";
import EventsNew from "./components/events_new";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./serviceWorker";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route eact path="/events/new" component={EventsNew}></Route>
        <Route eact path="/" component={EventsIndex}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
