# Zustand Exercises

Learn **Zustand**, a small, fast, and scalable state management solution for React applications. Zustand provides a simpler alternative to Redux with minimal boilerplate and excellent TypeScript support.

## What is Zustand?

Zustand (German for "state") is a modern state management library that offers:

- **Minimal boilerplate** - No providers, actions, or reducers required
- **Small bundle size** - ~2.9kb gzipped
- **Framework agnostic** - Works with React, Vue, and vanilla JavaScript
- **TypeScript ready** - Built with TypeScript from the ground up
- **Developer friendly** - Simple API with powerful features

## Exercises

### 🚀 [zustand-basics/](./zustand-basics/)
**Learn the fundamentals of Zustand state management**

Build a simple counter application that demonstrates:
- Creating a Zustand store with `create()`
- Defining state and actions
- Using store hooks in React components
- Automatic re-renders when state changes

**What you'll build:** A counter app with increment, decrement, and reset functionality.

### 🔥 [zustand-advanced/](./zustand-advanced/)
**Master advanced Zustand patterns and middleware**

Create a feature-rich todo application showcasing:
- Persistence with localStorage using middleware
- Computed values and selectors
- Async actions with loading states
- Component architecture and selective subscriptions
- Filtering and state normalization

**What you'll build:** A complete todo app with persistence, filtering, and advanced state patterns.

## Key Concepts

### Basic Store Creation
```javascript
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

### Using in Components
```javascript
function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### Advanced Patterns
- **Middleware:** `persist`, `subscribeWithSelector`, `devtools`
- **Computed values:** Derived state using getters or selector functions
- **Selective subscriptions:** Only re-render when specific state changes
- **Async actions:** Handle loading states and side effects

## Zustand vs Redux

| Feature | Zustand | Redux |
|---------|---------|-------|
| Bundle size | ~2.9kb | ~20kb+ |
| Boilerplate | Minimal | Extensive |
| TypeScript | Built-in | Requires setup |
| Learning curve | Gentle | Steep |
| DevTools | Optional | Extensive |
| Middleware | Simple | Complex |

## When to Use Zustand

✅ **Good for:**
- Small to medium applications
- Teams wanting minimal boilerplate
- Projects prioritizing bundle size
- Gradual migration from useState
- TypeScript projects

❓ **Consider alternatives for:**
- Very large applications with complex state
- Teams requiring extensive DevTools
- Projects with strict Redux patterns

## Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Zustand Recipes](https://github.com/pmndrs/zustand/blob/main/docs/recipes/recipes.md)
- [State Management Comparison](https://github.com/pmndrs/zustand#comparison)
- [Zustand TypeScript Guide](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md)

## Getting Started

Each exercise contains:
- **Starter/** - Initial code template to begin the exercise
- **Solution/** - Complete working implementation
- **Instructions.md** - Detailed step-by-step guide

Choose your exercise and dive into modern state management with Zustand!