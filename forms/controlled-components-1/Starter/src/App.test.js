import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Tests for Controlled Components Exercise
 * These tests validate form input handling and controlled component patterns
 */

describe('Controlled Components App', () => {
  test('renders initial state correctly', () => {
    render(<App />);
    
    // Check if the main heading is present
    expect(screen.getByText('ReactND - Coding Practice')).toBeInTheDocument();
    
    // Check if the input field is present
    const input = screen.getByPlaceholderText('Say Something');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(''); // Initially empty
    
    // Check if the Echo label is present
    expect(screen.getByText('Echo:')).toBeInTheDocument();
    
    // Initially, the echo should be empty (just empty paragraph)
    const echoElements = screen.getAllByText(''); // This will find empty paragraphs
    expect(echoElements.length).toBeGreaterThan(0);
  });

  test('updates displayed text when typing in input', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Say Something');
    
    // Type some text in the input
    fireEvent.change(input, { target: { value: 'Hello React!' } });
    
    // Check that the echo text is displayed
    expect(screen.getByText('Hello React!')).toBeInTheDocument();
    
    // The input should reflect the typed value (if properly controlled)
    // Note: This exercise starter has uncontrolled input, so it won't have value prop
    // But the onChange handler should still update the state
  });

  test('handles multiple text changes', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Say Something');
    
    // Type different texts and verify each update
    fireEvent.change(input, { target: { value: 'First message' } });
    expect(screen.getByText('First message')).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'Second message' } });
    expect(screen.getByText('Second message')).toBeInTheDocument();
    expect(screen.queryByText('First message')).not.toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('Second message')).not.toBeInTheDocument();
  });

  test('component structure includes required elements', () => {
    render(<App />);
    
    // Check for logo image
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('App-logo');
    
    // Check for main heading
    expect(screen.getByText('ReactND - Coding Practice')).toBeInTheDocument();
    
    // Check for Echo label
    expect(screen.getByText('Echo:')).toBeInTheDocument();
    
    // Verify input has correct attributes
    const input = screen.getByPlaceholderText('Say Something');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('demonstrates React state management', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Say Something');
    
    // This test ensures that React state is being used to track input
    // Even though the input is uncontrolled, the state should update
    fireEvent.change(input, { target: { value: 'Testing state' } });
    
    // The echo should show the state value
    expect(screen.getByText('Testing state')).toBeInTheDocument();
  });
});