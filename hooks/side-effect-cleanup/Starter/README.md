# Side Effect Cleanup - Starter

## What this exercise teaches

This exercise teaches you about side effect cleanup in React. You'll learn how to:

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

When you run this starter exercise, you should see:

- Instructions about clicking "Toggle" before text turns green
- A "Toggle" button
- A child component that changes color over time
- An error in the console when you click "Toggle" too early

**🎯 Your task**: This exercise demonstrates a common React problem - side effects that aren't cleaned up properly. When you click the "Toggle" button before the text turns green, you'll see a console error because:

1. The child component starts a side effect (like a timer or async operation)
2. The component gets unmounted when "Toggle" is clicked
3. The side effect tries to update state on the unmounted component
4. This causes a memory leak warning/error

Study the code to understand how this happens and what cleanup is needed.
