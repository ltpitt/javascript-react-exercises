import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Controlled Components Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – add the `value` prop to the input to make it a
 *          controlled component and make the tests GREEN.
 * Solution: tests are GREEN – the input is fully controlled by React state.
 */

describe('Controlled Components', () => {
  test('renders the input with the correct placeholder', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Say Something')).toBeInTheDocument();
  });

  test('input starts empty and the echo area is blank', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Say Something');
    // A controlled input with initial state "" must show an empty value.
    expect(input.value).toBe('');
    expect(screen.getByText('Echo:')).toBeInTheDocument();
  });

  test('echo mirrors every character typed in the input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Say Something');
    fireEvent.change(input, { target: { value: 'Hello React!' } });
    expect(screen.getByText('Hello React!')).toBeInTheDocument();
  });

  test('echo updates as the input value changes', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Say Something');

    fireEvent.change(input, { target: { value: 'first' } });
    expect(screen.getByText('first')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'second' } });
    expect(screen.getByText('second')).toBeInTheDocument();
    expect(screen.queryByText('first')).not.toBeInTheDocument();
  });

  test('clearing the input also clears the echo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Say Something');

    fireEvent.change(input, { target: { value: 'something' } });
    expect(screen.getByText('something')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '' } });
    // The controlled input feeds state back into the value prop, so clearing
    // state must also clear the displayed input value.
    expect(input.value).toBe('');
    expect(screen.queryByText('something')).not.toBeInTheDocument();
  });
});
