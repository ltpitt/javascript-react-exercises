import React, { useState, useEffect } from "react";

/**
 * Side Effect Cleanup Exercise - Solution
 * Demonstrates proper cleanup of side effects to prevent memory leaks
 */
function ChildComponent() {
  const [color, setColor] = useState("red");

  // Alternative solution: move `color` state to the parent component
  // and pass down that data as a prop to <ChildComponent />.
  // Since <App /> (in this example) is always mounted to the DOM,
  // no side effect cleanup would be necessary.

  useEffect(() => {
    // Flag to track if component is still mounted
    let unmounted = false;

    // Set up the side effect
    setTimeout(() => {
      // Only update state if component is still mounted
      if (!unmounted) {
        setColor("green");
      }
    }, 3000);

    // Cleanup function: runs when component unmounts or dependencies change
    return () => {
      unmounted = true;
    };
  }, []); // Empty dependency array: effect runs only once on mount

  return <p style={{ color }}>{color}</p>;
}

export default ChildComponent;
