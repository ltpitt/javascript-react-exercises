import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Basic tests for JSX Expressions Exercise
 * These tests validate the core JSX functionality and React concepts
 */

describe('JSX Expressions App', () => {
  test('renders welcome message with React', () => {
    render(<App />);
    
    // Check if the main heading is rendered
    const welcomeHeading = screen.getByRole('heading', { level: 1 });
    expect(welcomeHeading).toHaveTextContent('Welcome to React!');
  });

  test('displays React facts correctly', () => {
    render(<App />);
    
    // Check if release date is displayed
    expect(screen.getByText(/Released in: May 2013/)).toBeInTheDocument();
    
    // Check if the facts string is rendered (contains all key information)
    expect(screen.getByText(/Release date: May 2013/)).toBeInTheDocument();
    expect(screen.getByText(/Language: JavaScript/)).toBeInTheDocument();
    expect(screen.getByText(/License: MIT/)).toBeInTheDocument();
  });

  test('renders React logo image', () => {
    render(<App />);
    
    // Check if the logo image is present
    const logoImage = screen.getByAltText('React Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('width', '100');
  });

  test('uses JSX expressions correctly', () => {
    render(<App />);
    
    // This test validates that JSX expressions are working by checking
    // that dynamic content (variables and function calls) are rendered
    // We can verify JSX expressions work by checking the content is rendered correctly
    expect(screen.getByText('Welcome to React!')).toBeInTheDocument();
    expect(screen.getByText(/Released in: May 2013/)).toBeInTheDocument();
    expect(screen.getByText(/Release date: May 2013/)).toBeInTheDocument();
    expect(screen.getByAltText('React Logo')).toBeInTheDocument();
  });
});