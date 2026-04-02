import React, { useState, useEffect } from "react";

/**
 * Side Effect Cleanup Exercise - Starter
 * This component has a problem: the setTimeout will cause a memory leak
 * if the component unmounts before the timeout completes.
 */
function ChildComponent() {
  const [color, setColor] = useState("red");

  // ⚠️ PROBLEM: This useEffect has no dependency array and no cleanup
  // This will create a new timeout on every render and may cause memory leaks
  useEffect(() => {
    setTimeout(() => setColor("green"), 3000);
  });

  return <p style={{ color }}>{color}</p>;
}

export default ChildComponent;
