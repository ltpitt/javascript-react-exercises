# Zustand Advanced

This exercise explores advanced Zustand patterns and features for building more complex applications. You'll create a feature-rich todo application that demonstrates persistence, middleware, computed values, and advanced state management patterns.

## Task

Build a comprehensive todo application with the following features:

- Add, toggle, and delete todos
- Filter todos by status (all, active, completed)
- Persist todos to localStorage
- Display active and completed counts
- Clear all completed todos with loading state
- Demonstrate optimized re-renders

## Learning Objectives

By completing this exercise, you will learn:

- How to use Zustand middleware (persist, subscribeWithSelector)
- How to implement computed values and selectors
- How to handle async actions with loading states
- How to optimize component re-renders
- How to organize complex stores
- How to persist state to localStorage

## Advanced Features to Implement

### 1. Persistence with Middleware

Use the `persist` middleware to automatically save todos to localStorage:

```javascript
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      todos: [],
      // ... other state and actions
    }),
    {
      name: 'todo-storage',
      partialize: (state) => ({ todos: state.todos }),
    }
  )
);
```

### 2. Computed Values (Selectors)

Implement computed properties that derive from the base state:

```javascript
const useStore = create((set, get) => ({
  todos: [],
  filter: 'all',
  
  get filteredTodos() {
    const { todos, filter } = get();
    switch (filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      default: return todos;
    }
  },
  
  get activeCount() {
    return get().todos.filter(todo => !todo.completed).length;
  },
}));
```

### 3. Async Actions with Loading States

Implement async operations with proper loading state management:

```javascript
clearCompleted: async () => {
  set({ isLoading: true });
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
  set((state) => ({
    todos: state.todos.filter(todo => !todo.completed),
    isLoading: false
  }));
},
```

### 4. Selective Subscriptions

Optimize component re-renders by subscribing only to specific state slices:

```javascript
// Only re-render when filter changes
const filter = useTodoStore(state => state.filter);

// Subscribe to multiple specific properties
const { activeCount, completedCount } = useTodoStore(state => ({
  activeCount: state.activeCount,
  completedCount: state.completedCount,
}));
```

## Component Architecture

Organize your app into focused components:

- **App.js**: Main container component
- **TodoInput.js**: Component for adding new todos
- **TodoList.js**: Component for displaying filtered todos
- **TodoItem.js**: Individual todo item component
- **TodoFilters.js**: Filter buttons and statistics
- **store.js**: Zustand store with all state and actions

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Implementation Steps

### Step 1: Create the Store

Set up a comprehensive store with middleware:

```javascript
import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';

const useTodoStore = create(
  persist(
    subscribeWithSelector((set, get) => ({
      // State
      todos: [],
      filter: 'all',
      isLoading: false,
      
      // Actions
      addTodo: (text) => {
        const newTodo = {
          id: Date.now(),
          text: text.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ todos: [...state.todos, newTodo] }));
      },
      
      // ... other actions and computed values
    })),
    {
      name: 'todo-storage',
      partialize: (state) => ({ todos: state.todos }),
    }
  )
);
```

### Step 2: Create Component Architecture

Build focused components that subscribe to specific state slices:

```javascript
// TodoInput.js - Only needs addTodo action
const addTodo = useTodoStore(state => state.addTodo);

// TodoFilters.js - Needs filter state and statistics
const { filter, setFilter, activeCount, completedCount } = useTodoStore(state => ({
  filter: state.filter,
  setFilter: state.setFilter,
  activeCount: state.activeCount,
  completedCount: state.completedCount,
}));
```

### Step 3: Implement Advanced Features

Add persistence, async actions, and computed values as shown in the examples above.

## Key Concepts

### Middleware Composition

```javascript
const useStore = create(
  middleware1(
    middleware2(
      (set, get) => ({
        // Your store logic
      })
    )
  )
);
```

### Computed Properties with Getters

```javascript
get computedValue() {
  return someCalculationBasedOnState(get());
}
```

### Selective Subscriptions

```javascript
// Re-renders only when specific properties change
const specificData = useStore(state => ({
  prop1: state.prop1,
  prop2: state.prop2,
}));
```

### State Partitioning for Persistence

```javascript
persist(
  // store logic,
  {
    name: 'storage-key',
    partialize: (state) => ({ onlyThis: state.onlyThis }), // Only persist specific parts
  }
)
```

## Advanced Patterns

- **Store Slices**: Break large stores into focused slices
- **Derived State**: Use computed properties instead of duplicating state
- **Optimistic Updates**: Update UI immediately, handle errors later
- **State Normalization**: Keep state flat and normalized for complex data

## Resources

- [Zustand Middleware Documentation](https://github.com/pmndrs/zustand#middleware)
- [Persist Middleware](https://github.com/pmndrs/zustand#persist-middleware)
- [Zustand Best Practices](https://github.com/pmndrs/zustand/blob/main/docs/guides/practice-with-no-store-actions.md)
- [Zustand vs Redux Comparison](https://github.com/pmndrs/zustand#comparison)