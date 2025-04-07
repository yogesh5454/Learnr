import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Clock from "./Clock.jsx";
import Events from "./Events.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Clock />
    <Events />
  </StrictMode>
);
