import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoalProvider } from "./context/GoalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoalProvider>
        <App />
      </GoalProvider>
    </BrowserRouter>
  </StrictMode>,
);
