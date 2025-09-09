import logo from './logo.svg';
import './App.css';

/**
 * React Testing Demo App
 * Demonstrates modern React component with functional component syntax
 * 
 * 🔑 Modern React Concepts Used:
 * - Functional Component (ES6+ arrow function syntax)
 * - JSX with modern practices
 * - Semantic HTML structure
 */
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
