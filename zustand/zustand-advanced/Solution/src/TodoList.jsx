import React from 'react';
import useTodoStore from './store';

const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px', 
        margin: '5px 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ flex: 1, textAlign: 'left' }}>
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)}
        style={{ 
          backgroundColor: '#ff4444', 
          color: 'white', 
          border: 'none', 
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
};

const TodoList = () => {
  // Subscribe to todos and filter directly so the component re-renders on changes
  const todos = useTodoStore(state => state.todos);
  const filter = useTodoStore(state => state.filter);
  const getFilteredTodos = useTodoStore(state => state.getFilteredTodos);
  const filteredTodos = getFilteredTodos();

  return (
    <div style={{ textAlign: 'left', margin: '20px auto', maxWidth: '400px' }}>
      <h3>Todos:</h3>
      {filteredTodos.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#999' }}>No todos yet...</p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;