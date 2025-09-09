# State and Side Effects - Solution

## What this exercise teaches

This exercise demonstrates state management and side effects in React. You'll see how to:

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

When you run this solution, you should see:

- "ReactND - Coding Practice" header with React logo
- A "Mental Math" game showing a math equation
- Interactive "True" and "False" buttons
- A score display that updates as you play: "Your Score: X/Y"
- New questions generated automatically after each answer

**✅ Solution highlights**: This complete solution demonstrates:
- Proper `useState` implementation for managing question values and scores
- `useEffect` hook for generating new questions when the component mounts
- Event handlers that evaluate answers and update scores
- Dynamic state updates that trigger re-renders with new questions
- Clean separation between state logic and side effects
