import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/**
 * Controlled Components Exercise - Starter
 * This exercise demonstrates form input handling in React
 * 
 * 🎯 Goal: Make the input "controlled" by connecting it to React state
 * Currently the input is "uncontrolled" - React doesn't manage its value
 * 
 * 🔑 Modern React Concepts Demonstrated:
 * - useState Hook for state management (replacing class component state)
 * - Controlled components pattern (React manages form state)
 * - Event handling with modern function syntax
 * - Real-time UI updates through state changes
 */
const App = () => {
  // useState Hook: Modern way to manage state in functional components
  // Returns [currentValue, setterFunction] - uses array destructuring (ES6+)
  const [value, setValue] = useState("");

  // Event handler using ES6+ arrow function syntax
  // Extracts value from event target (modern event handling pattern)
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {/* ⚠️ UNCONTROLLED INPUT: Missing 'value' prop 
            React doesn't control what's displayed in this input */}
        <input
          type="text"
          placeholder="Say Something"
          onChange={handleChange}
        />
        <p className="echo">Echo:</p>
        {/* This will display the state value */}
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
