import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/**
 * Controlled Components Exercise - Starter
 * This exercise demonstrates form input handling in React
 * 
 * 🎯 Goal: Make the input "controlled" by connecting it to React state
 * Currently the input is "uncontrolled" - React doesn't manage its value
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

export default App;
