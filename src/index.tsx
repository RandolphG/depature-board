import React from "react";
import ReactDOM from "react-dom";
import DepartureBoard from "./DepartureBoard";

const words = [
  "R",
  "A",
  "N",
  "D",
  "I",
  " ",
  "R",
  "A",
  "Y",
  "B",
  "U",
  "R",
  "N",
  " ",
  "G",
  "O",
  "R",
  "D",
  "O",
  "N",
];

ReactDOM.render(
  <React.StrictMode>
    <DepartureBoard words={words} />
  </React.StrictMode>,
  document.getElementById("root")
);
