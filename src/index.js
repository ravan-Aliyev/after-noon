import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/sass/utility.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
