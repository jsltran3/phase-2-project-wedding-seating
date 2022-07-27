import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FontStyles from "./JS/fontStyles";
// import 'typeface-roboto';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    {/* <FontStyles /> */}
  </BrowserRouter>
);
