import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

/**
 * Managing State Exercise - Solution
 * Demonstrates the useState hook with inline event handler
 */
const App = () => {
  // useState Hook: Manages local component state
  const [likes, setLikes] = useState(0);

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      {/* Self-closing img tag (React/JSX requirement) */}
      <img src={corgi} alt="Corgi" />
      
      {/* JSX Expression: Displaying state value */}
      <p>Amount of likes: {likes}</p>
      
      {/* Inline arrow function event handler (modern pattern) */}
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
};

export default App;
