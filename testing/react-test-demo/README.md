# React Testing Demo

## What this exercise teaches

This exercise teaches you comprehensive React testing patterns using Jest and React Testing Library. You'll learn how to:

- Write unit tests for React components
- Test component rendering and behavior
- Use React Testing Library for user-centric testing
- Test user interactions like clicks and form submissions
- Mock functions and external dependencies
- Test component props and state changes

## Key concepts used

- **Jest**: JavaScript testing framework with assertions and test runners
- **React Testing Library**: Testing utilities focused on user behavior
- **Component Testing**: Testing React components in isolation
- **User Event Testing**: Simulating user interactions (clicks, typing, etc.)
- **Snapshot Testing**: Capturing component output for regression testing
- **Mock Functions**: Testing function calls and behavior

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

- All tests passing with green checkmarks
- Test coverage information showing which components are tested
- Detailed test results for each test case

When you run the app, you should see:

- A basic React application with the standard Create React App interface
- Components that demonstrate various React patterns for testing

**🎯 Learning objectives**: This testing demo demonstrates:
- Best practices for testing React components
- How to write tests that focus on user behavior rather than implementation details
- Testing patterns for different types of components (functional, with hooks, with props)
- Integration between Jest and React Testing Library
- How to test both synchronous and asynchronous component behavior
