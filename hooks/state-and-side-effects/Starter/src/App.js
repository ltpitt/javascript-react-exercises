import logo from "./logo.svg";
import "./App.css";

/**
 * State and Side Effects Exercise - Starter
 * 
 * 🎯 PROBLEMS TO SOLVE:
 * 1. Values are generated only once (not reactive)
 * 2. No state management for score tracking
 * 3. No event handlers for button clicks
 * 4. No way to generate new questions
 * 
 * 💡 CONCEPTS TO LEARN:
 * - useState for managing component state
 * - useEffect for side effects (like generating new questions)
 * - Event handling in React
 */

// ⚠️ PROBLEM: These values are calculated only once when the module loads
// They won't change when the component re-renders
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

// ⚠️ PROBLEM: These are just constants, not reactive state
const numQuestions = 0;
const numCorrect = 0;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        {/* ⚠️ PROBLEM: These buttons don't have onClick handlers */}
        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;

export default App;
