import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * State and Side Effects Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – add useState to track score, useEffect to generate
 *          the first question, and onClick handlers to make them GREEN.
 * Solution: tests are GREEN – hooks and event handlers are all implemented.
 */

describe('State and Side Effects', () => {
  test('displays the Mental Math heading', () => {
    render(<App />);
    expect(screen.getByText('Mental Math')).toBeInTheDocument();
  });

  test('shows a math equation in the format "A + B + C = D" on load', () => {
    render(<App />);
    // useEffect must run on mount and populate the equation with real numbers.
    expect(screen.getByText(/\d+ \+ \d+ \+ \d+ = \d+/)).toBeInTheDocument();
  });

  test('starts with a score of 0/0', () => {
    render(<App />);
    expect(screen.getByText('Your Score: 0/0')).toBeInTheDocument();
  });

  test('score updates to X/1 after clicking True', () => {
    render(<App />);
    // The True button must have an onClick that calls the answer handler and
    // increments numQuestions. The score must no longer be 0/0.
    fireEvent.click(screen.getByRole('button', { name: 'True' }));
    expect(screen.queryByText('Your Score: 0/0')).not.toBeInTheDocument();
    expect(screen.getByText(/Your Score: [01]\/1/)).toBeInTheDocument();
  });

  test('score updates to X/1 after clicking False', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'False' }));
    expect(screen.queryByText('Your Score: 0/0')).not.toBeInTheDocument();
    expect(screen.getByText(/Your Score: [01]\/1/)).toBeInTheDocument();
  });

  test('score accumulates across multiple answers', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'True' }));
    fireEvent.click(screen.getByRole('button', { name: 'False' }));
    expect(screen.getByText(/Your Score: \d+\/2/)).toBeInTheDocument();
  });
});
