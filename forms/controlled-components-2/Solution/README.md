# Controlled Components II - Solution

## What this exercise teaches

This exercise demonstrates advanced controlled component patterns with dynamic lists. You'll learn how to:

- Manage complex state with arrays using useState
- Create controlled form inputs for adding items
- Implement add and delete functionality with immutable state updates
- Use component composition to build modular React applications

## Key concepts used

- **useState Hook**: Managing array state in functional components
- **Controlled Components**: Form inputs controlled by React state
- **Component Composition**: Breaking UI into reusable components
- **Immutable State Updates**: Using spread operator and array methods
- **Props Passing**: Communication between parent and child components
- **Event Handling**: Managing form submissions and button clicks

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

- A "Shopping List" heading
- An input field to add new items
- An "Add" button to submit new items 
- A "Delete Last Item" button (disabled when no items exist)
- A list of items that updates as you add/remove items

**✅ Solution highlights**: This complete shopping list app demonstrates advanced controlled component patterns including:
- Array state management with `useState([])` 
- Immutable updates with spread operator `[...items, item]`
- Component composition with separate components for different features
- Proper event handling and state flow between components
