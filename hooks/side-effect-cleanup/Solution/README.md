# Side Effect Cleanup - Solution

## What this exercise teaches

This exercise demonstrates proper side effect cleanup in React. You'll see how to:

- Implement proper cleanup for side effects to prevent memory leaks
- Use `useEffect` cleanup functions (return statements)
- Handle component unmounting gracefully
- Prevent state updates on unmounted components
- Debug and identify memory leak issues

## Key concepts used

- **useEffect Cleanup**: Returning cleanup functions from useEffect
- **Component Lifecycle**: Understanding mounting and unmounting
- **Memory Leaks**: Identifying and preventing common React memory leaks
- **State Updates**: Preventing updates on unmounted components
- **Side Effect Management**: Proper handling of timers, subscriptions, and async operations

## How to run it

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **View the app**: 
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Stop the server**: Press `Ctrl+C` in the terminal

## Expected behavior

When you run this solution, you should see:

- Instructions about clicking "Toggle" before text turns green
- A "Toggle" button
- A child component that changes color over time
- NO error in the console when you click "Toggle" (the cleanup prevents it)

**✅ Solution highlights**: This solution demonstrates proper cleanup patterns including:
- `useEffect` cleanup functions that cancel timers/async operations
- Proper handling of component unmounting
- Prevention of memory leaks by cleaning up side effects
- Component lifecycle management that prevents errors

The key pattern is returning a cleanup function from `useEffect` that cancels any ongoing operations when the component unmounts.
