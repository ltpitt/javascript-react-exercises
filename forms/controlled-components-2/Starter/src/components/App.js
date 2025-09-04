import logo from "../svg/logo.svg";
import "../css/App.css";
import { useState } from "react";
import CreateNewItem from "./CreateNewItem";
import ItemList from "./ItemList";
import DeleteLastItem from "./DeleteLastItem";

/**
 * Shopping List App - Modern React Implementation
 * Demonstrates modern React patterns with functional components and hooks
 * 
 * 🔑 Modern React Concepts Used:
 * - Functional Components (instead of class components)
 * - useState Hook for state management
 * - ES6+ Spread Operator for immutable state updates
 * - Component composition and props passing
 */
const App = () => {
  // useState Hook: Modern way to manage state in functional components
  // Replaces this.state and this.setState from class components
  const [items, setItems] = useState([]);

  // Event handler using ES6+ arrow function syntax
  // Uses spread operator (...) for immutable array updates - modern React best practice
  const handleAddItem = (item) => {
    setItems([...items, item]); // Creates new array instead of mutating existing one
  };

  // Modern Array.prototype.slice() for immutable state updates
  // Removes last item without mutating the original array
  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  // Helper function using modern ES6+ arrow function syntax
  // Demonstrates computed properties based on state
  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <CreateNewItem onAddItem={handleAddItem} />
      <DeleteLastItem
        onDeleteLastItem={handleDeleteLastItem}
        buttonDisabled={noItemsFound()}
      />
      <ItemList items={items} />
    </div>
  );
};

export default App;
