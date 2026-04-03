import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * JSX Expressions Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – implement JSX expressions to make them GREEN.
 * Solution: tests are GREEN – all expressions are correctly implemented.
 */

describe('JSX Expressions', () => {
  test('renders the name variable as the exact heading text', () => {
    render(<App />);
    // The heading must output the value of the `name` variable directly,
    // not a hardcoded string like "Welcome to React!".
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('React');
  });

  test('renders the aboutReact function result with all three facts', () => {
    render(<App />);
    // The paragraph must be the return value of calling aboutReact(facts).
    // It must include the language fact, not duplicate the release date.
    expect(
      screen.getByText(
        'Release date: May 2013. Language: JavaScript. License: MIT.'
      )
    ).toBeInTheDocument();
  });

  test('renders the React logo image', () => {
    render(<App />);
    // The img alt text must match the solution exactly (case-sensitive).
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });
});
