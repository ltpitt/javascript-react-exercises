import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * State Management Recap - Chat App Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – implement useState for messages, make the input a
 *          controlled component, and disable SEND when the input is empty.
 * Solution: tests are GREEN – state, controlled input, and SEND disable are implemented.
 */

describe('State Management Recap - Chat App', () => {
  test('renders at least one Super Awesome Chat window', () => {
    render(<App />);
    const headings = screen.getAllByText('Super Awesome Chat');
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  test('SEND button is disabled when the input is empty', () => {
    render(<App />);
    const sendButtons = screen.getAllByRole('button', { name: 'SEND' });
    sendButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  test('SEND button becomes enabled when text is typed', () => {
    render(<App />);
    const inputs = screen.getAllByPlaceholderText('Enter your message...');
    fireEvent.change(inputs[0], { target: { value: 'Hello!' } });
    const sendButtons = screen.getAllByRole('button', { name: 'SEND' });
    expect(sendButtons[0]).not.toBeDisabled();
  });

  test('sending a message displays it in the chat', () => {
    render(<App />);
    const inputs = screen.getAllByPlaceholderText('Enter your message...');
    fireEvent.change(inputs[0], { target: { value: 'Hello World' } });
    const sendButtons = screen.getAllByRole('button', { name: 'SEND' });
    fireEvent.click(sendButtons[0]);
    // The message appears in one or more chat windows
    expect(screen.getAllByText(/Hello World/).length).toBeGreaterThanOrEqual(1);
  });

  test('input is cleared after sending a message', () => {
    render(<App />);
    const inputs = screen.getAllByPlaceholderText('Enter your message...');
    fireEvent.change(inputs[0], { target: { value: 'Test message' } });
    const sendButtons = screen.getAllByRole('button', { name: 'SEND' });
    fireEvent.click(sendButtons[0]);
    expect(inputs[0].value).toBe('');
  });
});
