# Controlled Components I - Starter

## What this exercise teaches

This exercise teaches you about controlled components in React forms. You'll learn how to:

- Transform uncontrolled inputs into controlled components
- Use React state to manage form input values  
- Connect input values to component state using the `value` prop
- Handle real-time input changes with event handlers

## Key concepts used

- **useState Hook**: Modern state management in functional components
- **Controlled Components**: React manages the form input state via props
- **Event Handling**: Capturing and responding to user input changes
- **One-way Data Flow**: State flows down, events flow up
- **ES6+ Features**: Arrow functions, destructuring assignment

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

- A text input with placeholder "Say Something"
- An "Echo:" label below the input
- The input's value displayed in real-time as you type

**🎯 Your task**: Currently the input is "uncontrolled" - it's missing the `value` prop. Add the `value={value}` prop to make it a controlled component so React fully manages the input's state.

**Current state**: The input works and displays the echo, but it's not following React's controlled component pattern.
