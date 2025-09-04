import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

/**
 * Managing State Exercise
 * Demonstrates the useState hook for managing component state
 */
const App = () => {
  // useState Hook: Manages local component state
  // Returns an array with [currentValue, setterFunction]
  const [likes, setLikes] = useState(0);
  
  // Event handler function using ES6+ arrow syntax
  // Note: The parameter 'like' is not used, but shows function syntax
  const addLike = () => {
    // State updates trigger re-renders
    setLikes(likes + 1);
  };

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      {/* Self-closing img tag (React/JSX requirement) */}
      <img src={corgi} alt="Corgi" />
      
      {/* JSX Expression: Displaying state value */}
      <p>Amount of likes: {likes}</p>
      
      {/* Event Handler: onClick triggers state update */}
      <button onClick={addLike}>Like</button>
    </div>
  );
};

export default App;

export default App;
