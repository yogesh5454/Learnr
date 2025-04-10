import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Clock from "./Clock.jsx";
import Events from "./Events.jsx";
import Forms from "./Forms.jsx";
import Todo from "./Todo.jsx";
import Effect from "./Effect.jsx";
import Fetchapi from "./Fetchapi.jsx";
import Simproject from "./simproject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Clock />
    <Events />
    <Forms />
    <Todo />
    <Effect />
    <br />
    <Fetchapi />
    <Simproject />
  </StrictMode>
);
