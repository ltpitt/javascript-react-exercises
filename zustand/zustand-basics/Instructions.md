# Zustand Basics

This exercise will introduce you to **Zustand**, a small, fast, and scalable state management solution for React applications. Zustand provides a simpler alternative to Redux with minimal boilerplate and excellent TypeScript support.

## Task

Create a simple counter application using Zustand for state management. The app should display a counter value and provide buttons to increment, decrement, and reset the counter.

## Learning Objectives

By completing this exercise, you will learn:

- How to create a Zustand store using the `create` function
- How to define state and actions in a Zustand store
- How to use the store hook in React components
- How Zustand automatically triggers re-renders when state changes

## Requirements

Your counter app should include:

1. **Display**: Show the current counter value
2. **Increment Button**: Increases the counter by 1
3. **Decrement Button**: Decreases the counter by 1
4. **Reset Button**: Sets the counter back to 0

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

## Step-by-Step Guide

### Step 1: Create a Zustand Store

Create a new file `src/store.js` and define your store:

```javascript
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  // State
  count: 0,
  
  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
```

### Step 2: Use the Store in Your Component

Import and use the store in your `App.js`:

```javascript
import useCounterStore from './store';

const App = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

## Key Concepts

### Zustand Store Creation

```javascript
const useStore = create((set, get) => ({
  // State properties
  count: 0,
  
  // Actions that modify state
  increment: () => set(state => ({ count: state.count + 1 })),
}));
```

- `set`: Function to update state
- `get`: Function to read current state (useful for complex actions)
- Return an object with state properties and action functions

### State Updates

Zustand provides two ways to update state:

1. **Object merge**: `set({ count: 5 })` - merges new values with existing state
2. **Function update**: `set(state => ({ count: state.count + 1 }))` - uses current state to compute new state

### Automatic Re-renders

- Components automatically re-render when subscribed state changes
- Zustand uses shallow comparison to determine if re-render is needed
- Only components that use the changed state will re-render

## Tips

- Keep your store simple and focused on a single concern
- Use descriptive names for your actions
- Consider separating complex logic into helper functions
- Zustand works great for both simple and complex state management

## Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Zustand Patterns and Recipes](https://github.com/pmndrs/zustand/blob/main/docs/recipes/recipes.md)
- [React State Management Comparison](https://github.com/pmndrs/zustand#comparison)