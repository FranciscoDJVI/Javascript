import { SpeedInsights } from "@vercel/speed-insights/next";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
