import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// We have to import the components (dom elements in js (jsx) ) to render here
// Add components with <name /> to a root element using createRoot from react-dom library in strictmode from react lib

createRoot(document.getElementById("root")).render( 
  <StrictMode>
    <App></App>
  </StrictMode>
);
