import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Controlled Components Exercise - Solution
 * Demonstrates a fully controlled input component
 * 
 * ✅ The input is now "controlled" because:
 * 1. Its value is controlled by React state
 * 2. Changes are handled by React event handlers
 * 3. React has full control over what's displayed
 */
const App = () => {
  // State to store the input value
  const [value, setValue] = useState("");

  // Event handler for input changes
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
        {/* ✅ CONTROLLED INPUT: Has both 'value' and 'onChange' props 
            React controls exactly what's displayed in this input */}
        <input
          type="text"
          placeholder="Say Something"
          value={value}
          onChange={handleChange}
        />
        <p className="echo">Echo:</p>
        {/* This displays the same value as the input */}
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
