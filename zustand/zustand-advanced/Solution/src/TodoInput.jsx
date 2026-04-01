import React, { useState } from 'react';
import useTodoStore from './store';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        style={{ padding: '10px', fontSize: '16px', width: '300px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;