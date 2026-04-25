import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Shopping List Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – implement state management, form handling, and
 *          the Add/Delete buttons to make the tests GREEN.
 * Solution: tests are GREEN – all features are fully implemented.
 */

describe('Shopping List', () => {
  test('renders the Shopping List heading', () => {
    render(<App />);
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
  });

  test('Add button is disabled when the input is empty', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Add' })).toBeDisabled();
  });

  test('Delete Last Item button is disabled when the list is empty', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Delete Last Item' })).toBeDisabled();
  });

  test('typing in the input enables the Add button', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter New Item');
    fireEvent.change(input, { target: { value: 'Apples' } });
    expect(screen.getByRole('button', { name: 'Add' })).not.toBeDisabled();
  });

  test('submitting the form adds the item to the list', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter New Item');
    fireEvent.change(input, { target: { value: 'Bananas' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByText('Bananas')).toBeInTheDocument();
  });

  test('Delete Last Item button is enabled after adding an item', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter New Item');
    fireEvent.change(input, { target: { value: 'Milk' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByRole('button', { name: 'Delete Last Item' })).not.toBeDisabled();
  });

  test('clicking Delete Last Item removes the last item', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter New Item');
    fireEvent.change(input, { target: { value: 'Eggs' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByText('Eggs')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Delete Last Item' }));
    expect(screen.queryByText('Eggs')).not.toBeInTheDocument();
  });
});
