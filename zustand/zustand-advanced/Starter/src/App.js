import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zustand Advanced Exercise</h1>
        <p>Build a todo app with persistence, middleware, and advanced patterns</p>
        
        <div style={{ margin: '20px', textAlign: 'center', maxWidth: '600px' }}>
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Add a new todo..."
              style={{ padding: '10px', fontSize: '16px', width: '300px', marginRight: '10px' }}
            />
            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
              Add Todo
            </button>
          </div>
          
          <div style={{ textAlign: 'left', margin: '20px auto', maxWidth: '400px' }}>
            <h3>Todos:</h3>
            <p style={{ fontStyle: 'italic', color: '#ccc' }}>No todos yet...</p>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <button style={{ margin: '5px', padding: '5px 15px' }}>All</button>
            <button style={{ margin: '5px', padding: '5px 15px' }}>Active</button>
            <button style={{ margin: '5px', padding: '5px 15px' }}>Completed</button>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <p>Advanced features to implement:</p>
          <ol style={{ textAlign: 'left', maxWidth: '500px' }}>
            <li>Create todos with id, text, and completed status</li>
            <li>Add, toggle, delete, and filter todos</li>
            <li>Use Zustand middleware for persistence (localStorage)</li>
            <li>Implement computed state (active/completed counts)</li>
            <li>Add async actions with loading states</li>
            <li>Use slices pattern for organizing large stores</li>
          </ol>
        </div>
      </header>
    </div>
  );
};

export default App;
