import React from "react";
import ReactDOM from "react-dom";
import "./App.css"; // Your custom styles
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Dynamically adding the Google Fonts link to the head
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link); // Append the link tag to head

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
