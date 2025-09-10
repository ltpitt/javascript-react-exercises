import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Tests for Managing State Exercise
 * These tests validate useState hook functionality and state updates
 */

describe('Managing State App', () => {
  test('renders initial state correctly', () => {
    render(<App />);
    
    // Check if the main heading is present
    expect(screen.getByText('Like this photo!')).toBeInTheDocument();
    
    // Check if the initial likes count is 0
    expect(screen.getByText('Amount of likes: 0')).toBeInTheDocument();
    
    // Check if the like button is present
    expect(screen.getByRole('button', { name: 'Like' })).toBeInTheDocument();
    
    // Check if the corgi image is present
    const corgiImage = screen.getByAltText('Corgi');
    expect(corgiImage).toBeInTheDocument();
  });

  test('increments likes when button is clicked', () => {
    render(<App />);
    
    const likeButton = screen.getByRole('button', { name: 'Like' });
    
    // Initially should show 0 likes
    expect(screen.getByText('Amount of likes: 0')).toBeInTheDocument();
    
    // Click the like button once
    fireEvent.click(likeButton);
    
    // Should now show 1 like
    expect(screen.getByText('Amount of likes: 1')).toBeInTheDocument();
    
    // Click the like button again
    fireEvent.click(likeButton);
    
    // Should now show 2 likes
    expect(screen.getByText('Amount of likes: 2')).toBeInTheDocument();
  });

  test('multiple clicks update state correctly', () => {
    render(<App />);
    
    const likeButton = screen.getByRole('button', { name: 'Like' });
    
    // Click the button 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(likeButton);
    }
    
    // Should show 5 likes
    expect(screen.getByText('Amount of likes: 5')).toBeInTheDocument();
  });

  test('component structure is correct', () => {
    render(<App />);
    
    // Validate the presence of key elements using recommended testing-library methods
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Like this photo!')).toBeInTheDocument();
    expect(screen.getByText(/Amount of likes:/)).toBeInTheDocument();
  });
});