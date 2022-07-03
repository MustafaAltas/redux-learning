import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import combinedStore from "./redux/store/store";

// const store = combinedStore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={combinedStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
