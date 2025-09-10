# Redux Testing Demo

## What this exercise teaches

This exercise teaches you comprehensive Redux testing patterns using Jest and React Testing Library. You'll learn how to:

- Test Redux reducers and action creators
- Test React components connected to Redux store
- Mock Redux store for component testing
- Test async Redux actions with Redux Thunk
- Test complex state management scenarios
- Integration testing with Redux and React

## Key concepts used

- **Redux Testing**: Testing reducers, actions, and connected components
- **Store Mocking**: Creating test stores for component testing
- **Redux Toolkit Testing**: Testing with Redux Toolkit patterns
- **Async Action Testing**: Testing thunks and async operations
- **Connected Component Testing**: Testing components with Redux integration
- **State Management Testing**: Verifying Redux state updates

## How to run it

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Run the tests**:
   ```bash
   npm test
   ```
   Or for a single run without watch mode:
   ```bash
   npm test -- --watchAll=false
   ```

3. **Start the development server** (optional):
   ```bash
   npm start
   ```

4. **View the app**: 
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Expected behavior

When you run the tests, you should see:

- All tests passing including Redux-specific test cases
- Tests for reducers showing proper state updates
- Tests for action creators and their payloads
- Tests for components connected to Redux store
- Coverage reports showing tested Redux logic

When you run the app, you should see:

- A Redux-powered React application with state management
- Interactive features that demonstrate Redux patterns
- Redux DevTools integration (if browser extension is installed)

**🎯 Learning objectives**: This Redux testing demo demonstrates:
- How to test Redux logic in isolation (reducers, actions)
- Testing patterns for components connected to Redux
- Mocking Redux store for unit testing
- Testing async operations and side effects in Redux
- Integration testing strategies for Redux applications
- Best practices for maintaining testable Redux code
