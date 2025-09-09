# Managing State - Starter

## What this exercise teaches

This exercise teaches you the fundamentals of state management in React using hooks. You'll learn how to:

- Use the `useState` hook to manage component state
- Handle user interactions that trigger state updates
- Create event handlers for button clicks
- Understand how state changes trigger re-renders

## Key concepts used

- **useState Hook**: Managing local component state in functional components
- **Event Handlers**: Functions that respond to user interactions
- **State Updates**: How changing state triggers component re-renders
- **JSX Expressions**: Displaying dynamic values from state
- **Component Re-rendering**: Understanding React's render cycle

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

- A heading "Like this photo!"
- A photo of a cute corgi
- Text showing "Amount of likes: 0" (initially)
- A "Like" button that you can click
- The like counter increases each time you click the button

**🎯 Your task**: This exercise demonstrates basic state management in React. Study how:
- `useState(0)` initializes state with a value of 0
- `setLikes(likes + 1)` updates the state when the button is clicked
- The component re-renders automatically when state changes
- The new like count is displayed immediately
