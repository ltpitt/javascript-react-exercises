# State Management Recap - Solution

## What this exercise teaches

This exercise demonstrates comprehensive React state management using hooks. You'll see how to implement:

- Complex state management for multiple UI elements
- Controlled form components with validation
- Dynamic list rendering with user interactions
- Event handling patterns with modern React

## Key concepts used

- **useState Hook**: Managing multiple pieces of state (input text, message list)
- **Controlled Components**: Form inputs controlled by React state
- **Event Handlers**: Functions for form submissions and input changes
- **Conditional Rendering**: Dynamic UI based on state conditions
- **Immutable State Updates**: Using spread operator for array updates
- **Form Validation**: Disabling buttons based on input state

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
- A fully functional chat application with two chat windows
- Working input fields that accept user messages
- Submit buttons that are properly enabled/disabled based on input
- Messages being added to the chat when submitted

**✅ Solution highlights**: This complete solution demonstrates:
- Proper `useState` implementation for both input text and message arrays
- Event handlers that properly update state with immutable patterns
- Form validation that disables submit when input is empty or whitespace only
- Clean component structure with proper event handling
