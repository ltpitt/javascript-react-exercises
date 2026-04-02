import { connect } from "react-redux";
import { useRef } from "react";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";

/**
 * Goals Component - Modern React + Redux Implementation
 * Demonstrates modern React patterns combined with Redux state management
 * 
 * 🔑 Modern React + Redux Concepts Used:
 * - Functional Component (instead of class component)
 * - useRef Hook for direct DOM access (modern alternative to createRef)
 * - React-Redux connect HOC for accessing Redux state
 * - ES6+ arrow function syntax and destructuring
 * - Async Redux action creators (thunks)
 */
const Goals = (props) => {
  // useRef Hook: Modern way to access DOM elements directly
  // Replaces createRef from class components
  const inputRef = useRef();

  // Event handler using modern ES6+ syntax
  // Dispatches Redux action with callback for input clearing
  const addItem = (e) => {
    e.preventDefault(); // Prevent form submission
    props.dispatch(
      handleAddGoal(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  // Redux action dispatcher for removing items
  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals</h1>
      <input type="text" placeholder="Add Goal" ref={inputRef} />
      <button onClick={addItem}>Add Goal</button>

      <List items={props.goals} remove={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
