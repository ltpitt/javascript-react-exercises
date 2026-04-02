import "./App.css";
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zustand Advanced Exercise - Solution</h1>
        <p>A feature-rich todo app demonstrating advanced Zustand patterns</p>
        
        <div style={{ margin: '20px', textAlign: 'center', maxWidth: '600px' }}>
          <TodoInput />
          <TodoList />
          <TodoFilters />
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <p>✅ Advanced features demonstrated:</p>
          <ul style={{ textAlign: 'left', maxWidth: '500px' }}>
            <li><strong>Persistence:</strong> Todos saved to localStorage automatically</li>
            <li><strong>Middleware:</strong> Using persist and subscribeWithSelector</li>
            <li><strong>Computed values:</strong> Filtered todos and counts</li>
            <li><strong>Async actions:</strong> Clear completed with loading state</li>
            <li><strong>Selective subscriptions:</strong> Components only re-render when needed</li>
            <li><strong>Component architecture:</strong> Separated concerns with multiple components</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
