import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-dedux";
import store from "./store";
import App from "./components/app";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
