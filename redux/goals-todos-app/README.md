# Redux Goals & Todos App

## What this exercise teaches

This exercise teaches you comprehensive Redux state management in a React application. You'll learn how to:

- Set up Redux store with multiple reducers
- Use Redux actions and action creators
- Connect React components to Redux with react-redux
- Handle asynchronous operations with Redux Thunk middleware
- Manage complex application state with Redux patterns
- Implement CRUD operations in a Redux application

## Key concepts used

- **Redux Store**: Centralized application state management
- **Reducers**: Pure functions that handle state updates
- **Actions & Action Creators**: Dispatching state changes
- **React-Redux**: Connecting React components to Redux store
- **Redux Thunk**: Middleware for async actions
- **useEffect**: Side effects for data loading
- **Component Composition**: Building complex UI from smaller components

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

5. **Production build** (optional):
   ```bash
   CI=false npm run build
   ```
   *Note: Uses `CI=false` to bypass ESLint warnings in build process*

## Expected behavior

When you run this application, you should see:

- A "Loading" message initially while data is fetched
- Two main sections: "Todo List" and "Goals"
- **Todo List section**:
  - Input field to add new todos
  - List of existing todos with X buttons to remove them
  - Each todo can be toggled between completed/incomplete states
- **Goals section**:
  - Input field to add new goals  
  - List of goals with X buttons to remove them
- Real-time updates as you add/remove items
- Redux DevTools integration (if browser extension is installed)

**🎯 Learning objectives**: This complete Redux application demonstrates:
- How Redux manages complex application state across multiple features
- Integration patterns between React and Redux
- Async data loading with Redux Thunk
- Proper Redux architecture with actions, reducers, and store setup
- Real-world CRUD operations in a Redux context
