import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Managing State Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – add useState and wire up the Like button to make them GREEN.
 * Solution: tests are GREEN – state is managed correctly with useState.
 */

describe('Managing State', () => {
  test('displays an initial like count of 0', () => {
    render(<App />);
    expect(screen.getByText('Amount of likes: 0')).toBeInTheDocument();
  });

  test('increments the like count by 1 when the Like button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Like' }));
    expect(screen.getByText('Amount of likes: 1')).toBeInTheDocument();
  });

  test('accumulates multiple clicks correctly', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Like' });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText('Amount of likes: 3')).toBeInTheDocument();
  });

  test('renders the corgi photo', () => {
    render(<App />);
    expect(screen.getByAltText('Corgi')).toBeInTheDocument();
  });
});
