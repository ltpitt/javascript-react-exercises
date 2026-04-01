import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Tests for State and Side Effects Exercise - Starter
 * These tests validate the initial state before useState and useEffect are implemented
 * 
 * Note: This is the STARTER version, so many features are not yet implemented.
 * These tests validate the current static state and structure.
 */

describe('State and Side Effects App - Starter', () => {
  test('renders main UI elements correctly', () => {
    render(<App />);
    
    // Check if the main heading is present
    expect(screen.getByText('ReactND - Coding Practice')).toBeInTheDocument();
    
    // Check if the game heading is present
    expect(screen.getByText('Mental Math')).toBeInTheDocument();
    
    // Check if True and False buttons are present
    expect(screen.getByRole('button', { name: 'True' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'False' })).toBeInTheDocument();
    
    // Check if logo is present
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('App-logo');
  });

  test('displays static math equation', () => {
    render(<App />);
    
    // The equation should be displayed and contain the expected format
    // We can find it by looking for text that matches the math pattern
    const mathEquation = screen.getByText(/\d+ \+ \d+ \+ \d+ = \d+/);
    expect(mathEquation).toBeInTheDocument();
  });

  test('displays initial score of 0/0', () => {
    render(<App />);
    
    // Check for the score display - should initially be 0/0 in starter
    expect(screen.getByText('Your Score: 0/0')).toBeInTheDocument();
  });

  test('has correct component structure', () => {
    render(<App />);
    
    // Check for main headings and elements using screen queries
    expect(screen.getByText('ReactND - Coding Practice')).toBeInTheDocument();
    expect(screen.getByText('Mental Math')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'True' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'False' })).toBeInTheDocument();
  });

  test('buttons are present but non-functional in starter', () => {
    render(<App />);
    
    const trueButton = screen.getByRole('button', { name: 'True' });
    const falseButton = screen.getByRole('button', { name: 'False' });
    
    expect(trueButton).toBeInTheDocument();
    expect(falseButton).toBeInTheDocument();
    
    // In the starter version, buttons don't have onClick handlers
    // so they should be present but not functional
    // We can't easily test the lack of onClick handlers, but we can ensure
    // they exist and are clickable elements
    expect(trueButton.tagName).toBe('BUTTON');
    expect(falseButton.tagName).toBe('BUTTON');
  });

  test('equation uses random values consistently during render', () => {
    // Since the values are generated once at module load,
    // they should be consistent within a single test run
    const { unmount } = render(<App />);
    
    const firstMathText = screen.getByText(/\d+ \+ \d+ \+ \d+ = \d+/).textContent;
    
    // Unmount and re-render the same component
    unmount();
    render(<App />);
    const secondMathText = screen.getByText(/\d+ \+ \d+ \+ \d+ = \d+/).textContent;
    
    // The equation should be the same since values are static in starter
    expect(firstMathText).toBe(secondMathText);
  });
});