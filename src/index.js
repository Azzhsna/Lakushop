// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Pastikan import App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Pastikan elemen ini ada di index.html
);
