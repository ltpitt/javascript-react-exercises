import logo from "./logo192.png";
import "./App.css";

/**
 * Functional Component using modern React practices
 * Demonstrates JSX expressions and ES6+ syntax
 */
const App = () => {
  // Variables can be used in JSX expressions
  const name = "React";

  // Object using ES6+ syntax
  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  // Arrow function with template literals (ES6+)
  // Fixed bug: was using facts.releaseDate twice instead of facts.language
  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.language}. License: ${facts.license}.`;

  return (
    <div className="container">
      {/* JSX Expression: Image element */}
      <img src={logo} alt="React logo" />
      
      {/* JSX Expression: Using variables in curly braces */}
      <h1>{name}</h1>
      
      {/* JSX Expression: Function call result */}
      <p>{aboutReact(facts)}</p>
    </div>
  );
};

export default App;
