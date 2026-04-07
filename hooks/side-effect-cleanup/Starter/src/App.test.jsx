import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Side Effect Cleanup Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – add the cleanup return to useEffect in ChildComponent
 *          to prevent the setState-on-unmounted-component error.
 * Solution: tests are GREEN – useEffect cleanup is properly implemented.
 */

describe('Side Effect Cleanup', () => {
  test('renders the Toggle button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Toggle' })).toBeInTheDocument();
  });

  test('ChildComponent is visible on initial render', () => {
    render(<App />);
    // ChildComponent renders a <p> with its initial color text
    expect(screen.getByText('red')).toBeInTheDocument();
  });

  test('clicking Toggle hides the ChildComponent', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.queryByText('red')).not.toBeInTheDocument();
  });

  test('clicking Toggle twice shows the ChildComponent again', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }));
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(screen.getByText('red')).toBeInTheDocument();
  });
});
