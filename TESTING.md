# Testing and Linting

## Overview

Selected exercises now include basic unit tests to validate core functionality and demonstrate testing best practices with React Testing Library and Jest.

## Exercises with Tests

The following key exercises have comprehensive test suites:

- **fundamentals/jsx-expressions/Starter** - Tests JSX rendering and expressions
- **state-management/managing-state/Starter** - Tests useState hook functionality
- **forms/controlled-components-1/Starter** - Tests form handling and controlled components
- **hooks/state-and-side-effects/Starter** - Tests initial UI state before implementing hooks

## Running Tests

### Individual Exercise
```bash
cd "fundamentals/jsx-expressions/Starter"
npm install
npm test
```

### All Exercises with Tests
```bash
# Run the test runner script (from repository root)
./test-exercises.sh
```

## ESLint Configuration

All exercises use Create React App's built-in ESLint configuration with:
- React-specific rules
- React Testing Library rules
- Modern ES6+ syntax support

### Running ESLint
```bash
cd "exercise-directory"
npx eslint src/ --ext .js,.jsx
```

## Test Structure

Tests follow React Testing Library best practices:
- Use semantic queries (`getByRole`, `getByText`, etc.)
- Test user interactions and behaviors
- Avoid implementation details
- Focus on what users see and do

## Testing Dependencies

All exercises include:
- **Jest** - Test runner (via react-scripts)
- **@testing-library/react** - React Testing Library
- **@testing-library/jest-dom** - Custom Jest matchers
- **@testing-library/user-event** - User interaction utilities