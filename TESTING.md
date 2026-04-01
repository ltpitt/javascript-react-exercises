# Testing and Linting

## Overview

Selected exercises now include basic unit tests to validate core functionality and demonstrate testing best practices with React Testing Library and Vitest.

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

## Linting

All exercises support ESLint. To run linting on an exercise:
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
- **Vitest** - Test runner (replaces Jest, works seamlessly with Vite)
- **@testing-library/react** - React Testing Library
- **@testing-library/jest-dom** - Custom matchers (compatible with Vitest)
- **@testing-library/user-event** - User interaction utilities