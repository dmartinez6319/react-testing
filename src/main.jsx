import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";

// We have to import the components (dom elements in js (jsx) ) to render here
// Add components with <name /> to a root element using createRoot from react-dom library in strictmode from react lib
const myList = ["Frog", "Cow", "Dog", "Parrot"]; // I passed this through the Greeting comp

createRoot(document.getElementById("root")).render( 
  <StrictMode>
    <App /> 
    <Greeting myList = {myList}/> 
  </StrictMode>
);
