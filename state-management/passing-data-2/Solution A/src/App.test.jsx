import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Passing Data 2 - Movie Popularity Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – build the Dashboard that groups users by movie
 *          and renders a card per movie to make the tests GREEN.
 * Solution A / Solution B: tests are GREEN – the movies are rendered with
 *          their lists of fans.
 */

describe('Passing Data 2 - Movie Popularity', () => {
  test('renders the How Popular is Your Favorite Movie? heading', () => {
    render(<App />);
    expect(
      screen.getByText('How Popular is Your Favorite Movie?')
    ).toBeInTheDocument();
  });

  test('renders a card for Planet Earth 1', () => {
    render(<App />);
    expect(screen.getByText('Planet Earth 1')).toBeInTheDocument();
  });

  test('renders a card for Get Out', () => {
    render(<App />);
    expect(screen.getByText('Get Out')).toBeInTheDocument();
  });

  test('renders a card for Selma', () => {
    render(<App />);
    expect(screen.getByText('Selma')).toBeInTheDocument();
  });

  test('renders a card for Forrest Gump', () => {
    render(<App />);
    expect(screen.getByText('Forrest Gump')).toBeInTheDocument();
  });

  test('shows Jane Cruz as a fan of Planet Earth 1', () => {
    render(<App />);
    expect(screen.getByText('Jane Cruz')).toBeInTheDocument();
  });

  test('shows Lauren Carlson as a fan of Selma', () => {
    render(<App />);
    expect(screen.getByText('Lauren Carlson')).toBeInTheDocument();
  });

  test('shows a "Liked By:" label for each movie card', () => {
    render(<App />);
    const likedByLabels = screen.getAllByText('Liked By:');
    expect(likedByLabels.length).toBeGreaterThanOrEqual(4);
  });
});
