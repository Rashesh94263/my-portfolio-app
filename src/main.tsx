import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/about/about.css";
import "./pages/contact/contact.css";
import "./pages/landing/landing.css";
import "./pages/portfolio/portfolio.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
