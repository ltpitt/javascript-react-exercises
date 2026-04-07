import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Zustand Advanced - Todo App Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – create a Zustand store with persist middleware and
 *          wire up add, toggle, and filter actions to make the tests GREEN.
 * Solution: tests are GREEN – the store and all todo features are implemented.
 */

describe('Zustand Advanced - Todo App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders the todo input and Add Todo button', () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText('Add a new todo...')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Todo' })).toBeInTheDocument();
  });

  test('renders All, Active, and Completed filter buttons', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument();
  });

  test('adding a todo displays it in the list', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }));
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  test('toggling a todo marks it as completed', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Exercise Daily' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }));
    // Find the checkbox belonging to this specific todo item
    const todoEl = screen.getByText('Exercise Daily');
    const todoContainer = todoEl.closest('div');
    const checkbox = todoContainer.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('Completed filter hides active todos', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Active Task XYZ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }));
    // Switch to Completed filter – the active todo should not be visible
    fireEvent.click(screen.getByRole('button', { name: 'Completed' }));
    expect(screen.queryByText('Active Task XYZ')).not.toBeInTheDocument();
  });

  test('Active filter hides completed todos', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Completed Task ABC' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }));
    // Toggle the newly added todo to mark it completed
    const todoEl = screen.getByText('Completed Task ABC');
    const todoContainer = todoEl.closest('div');
    const checkbox = todoContainer.querySelector('input[type="checkbox"]');
    fireEvent.click(checkbox);
    // Switch to Active filter – the completed todo should not be visible
    fireEvent.click(screen.getByRole('button', { name: 'Active' }));
    expect(screen.queryByText('Completed Task ABC')).not.toBeInTheDocument();
  });
});
