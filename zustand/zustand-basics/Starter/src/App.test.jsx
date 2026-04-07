import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Zustand Basics - Counter Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – create a Zustand store and wire the buttons to
 *          increment, decrement, and reset the counter to make the tests GREEN.
 * Solution: tests are GREEN – the store and all button actions are implemented.
 */

describe('Zustand Basics - Counter', () => {
  test('renders all three control buttons', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  test('Reset sets the counter to 0', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
  });

  test('Increment increases the counter by 1', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  test('Decrement decreases the counter by 1', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  test('multiple Increments accumulate correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText(/Counter: 3/)).toBeInTheDocument();
  });
});
