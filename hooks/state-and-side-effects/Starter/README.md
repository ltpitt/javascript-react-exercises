# State and Side Effects - Starter

## What this exercise teaches

This exercise teaches you about state management and side effects in React. You'll learn how to:

- Use `useState` to manage dynamic values that change over time
- Use `useEffect` to handle side effects like generating new data
- Convert static values into reactive state
- Handle user interactions with proper event handlers
- Implement score tracking with state updates

## Key concepts used

- **useState Hook**: Managing dynamic values (math questions, scores)
- **useEffect Hook**: Handling side effects (generating new questions)
- **Event Handlers**: Responding to button clicks and user actions
- **State Updates**: Properly updating state to trigger re-renders
- **Side Effects**: Operations that happen outside of rendering (like random number generation)

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

- "ReactND - Coding Practice" header with React logo
- A "Mental Math" game showing a math equation
- "True" and "False" buttons (currently non-functional)
- A score display showing "Your Score: 0/0"

**🎯 Your task**: The current implementation has several problems:
1. Values are generated only once when the module loads (not reactive)
2. No state management for tracking scores
3. Buttons don't have click handlers
4. No way to generate new questions

You need to implement:
- `useState` for managing question values and scores
- `useEffect` for generating new questions
- Event handlers for the True/False buttons
- State updates that track correct/incorrect answers
