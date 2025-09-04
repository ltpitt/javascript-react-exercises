import { connect } from "react-redux";
import { useRef } from "react";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";

/**
 * Todos Component - Modern React + Redux Implementation
 * Demonstrates functional component with Redux integration and modern React patterns
 * 
 * 🔑 Modern React + Redux Concepts Used:
 * - Functional Component with hooks
 * - useRef Hook for uncontrolled input access
 * - Redux connect HOC for state management
 * - Modern ES6+ destructuring and arrow functions
 * - Component composition with props passing
 */
const Todos = (props) => {
  // useRef Hook: Direct DOM access for form input
  // Modern alternative to class component refs
  const inputRef = useRef();

  // Event handlers using modern ES6+ arrow function syntax
  const addItem = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Dispatch Redux action with callback for input cleanup
    props.dispatch(
      handleAddTodo(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggle(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>

      <List toggle={toggleItem} items={props.todos} remove={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
