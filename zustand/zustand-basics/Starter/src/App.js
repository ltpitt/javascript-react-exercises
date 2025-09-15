import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zustand Basics Exercise</h1>
        <p>Your task: Create a counter app using Zustand for state management</p>
        
        <div style={{ margin: '20px', textAlign: 'center' }}>
          <h2>Counter: 0</h2>
          <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>
            Increment
          </button>
          <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>
            Decrement
          </button>
          <button style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>
            Reset
          </button>
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <p>Instructions:</p>
          <ol style={{ textAlign: 'left', maxWidth: '500px' }}>
            <li>Create a Zustand store for managing counter state</li>
            <li>Add actions for increment, decrement, and reset</li>
            <li>Connect the buttons to the store actions</li>
            <li>Display the current count from the store</li>
          </ol>
        </div>
      </header>
    </div>
  );
};

export default App;
