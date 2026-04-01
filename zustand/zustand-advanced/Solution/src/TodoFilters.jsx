import React from 'react';
import useTodoStore from './store';

const TodoFilters = () => {
  const { filter, setFilter, getActiveCount, getCompletedCount, clearCompleted, isLoading } = useTodoStore(state => ({
    filter: state.filter,
    setFilter: state.setFilter,
    getActiveCount: state.getActiveCount,
    getCompletedCount: state.getCompletedCount,
    clearCompleted: state.clearCompleted,
    isLoading: state.isLoading,
  }));

  const activeCount = getActiveCount();
  const completedCount = getCompletedCount();

  const filterButtons = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        {filterButtons.map(({ key, label }) => (
          <button 
            key={key}
            onClick={() => setFilter(key)}
            style={{ 
              margin: '5px', 
              padding: '5px 15px',
              backgroundColor: filter === key ? '#007bff' : '#f8f9fa',
              color: filter === key ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {label}
          </button>
        ))}
      </div>
      
      <div style={{ fontSize: '14px', marginBottom: '10px' }}>
        <span>Active: {activeCount} | Completed: {completedCount}</span>
      </div>
      
      {completedCount > 0 && (
        <button 
          onClick={clearCompleted}
          disabled={isLoading}
          style={{ 
            padding: '5px 15px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          {isLoading ? 'Clearing...' : 'Clear Completed'}
        </button>
      )}
    </div>
  );
};

export default TodoFilters;