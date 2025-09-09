import { useState, useEffect } from "react";

/**
 * Game Component - Solution
 * Demonstrates useState and useEffect hooks working together
 * 
 * ✅ SOLUTIONS IMPLEMENTED:
 * - useState for managing question values and state
 * - useEffect for generating initial question on mount
 * - Event handlers for user interaction
 * - Proper state updates and re-renders
 */
const Game = (props) => {
  // State hooks for managing the math question
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  // useEffect Hook: Runs side effects after component mounts
  // Empty dependency array [] means this runs only once on mount
  useEffect(() => {
    let valuesArray = makeNewQuestion();
    setValue1(valuesArray[0]);
    setValue2(valuesArray[1]);
    setValue3(valuesArray[2]);
    setProposedAnswer(valuesArray[3]);
  }, []); // Dependencies: empty array = run once on mount

  // Pure function to generate new question data
  const makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);

    // Sometimes the proposed answer is wrong (adds 1-3 to correct answer)
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);

    return [value1, value2, value3, proposedAnswer];
  };

  // Helper function to update all state values at once
  const refresh = (newValuesArray) => {
    setValue1(newValuesArray[0]);
    setValue2(newValuesArray[1]);
    setValue3(newValuesArray[2]);
    setProposedAnswer(newValuesArray[3]);
  };

  // Event handler for True/False button clicks
  const handleAnswer = (event) => {
    const newValuesArray = makeNewQuestion();
    refresh(newValuesArray);
    const answerWasCorrect = evaluateAnswer(event.target.name);
    
    // Call parent component's handler with the result
    props.handleAnswer(answerWasCorrect);
  };

  // Logic to determine if the user's answer was correct
  const evaluateAnswer = (givenAnswer) => {
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === "true") ||
      (corrAnswer !== proposedAnswer && givenAnswer === "false")
    );
  };

  return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      {/* Button elements with event handlers and name attributes for identification */}
      <button onClick={handleAnswer} name="true">
        True
      </button>
      <button name="false" onClick={handleAnswer}>
        False
      </button>
    </div>
  );
};

export default Game;
