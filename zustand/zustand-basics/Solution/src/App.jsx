import "./App.css";
import useCounterStore from './store';

const App = () => {
  // Subscribe to the store using the hook
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zustand Basics Exercise - Solution</h1>
        <p>A simple counter app using Zustand for state management</p>
        
        <div style={{ margin: '20px', textAlign: 'center' }}>
          <h2>Counter: {count}</h2>
          <button 
            style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            onClick={increment}
          >
            Increment
          </button>
          <button 
            style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            onClick={decrement}
          >
            Decrement
          </button>
          <button 
            style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <p>✅ Features demonstrated:</p>
          <ul style={{ textAlign: 'left', maxWidth: '500px' }}>
            <li>Creating a Zustand store with <code>create()</code></li>
            <li>Managing state with actions (increment, decrement, reset)</li>
            <li>Using the store hook in React components</li>
            <li>Automatic re-renders when state changes</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
