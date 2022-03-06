import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ReduxProvider from "./setup/ReduxProvider";
import RouterProvider from "./setup/RouterProvider";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
