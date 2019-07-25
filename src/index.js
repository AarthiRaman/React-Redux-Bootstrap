import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";

import "./styles.css";

const Widget = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

ReactDOM.render(<Widget />, document.getElementById("root"));
