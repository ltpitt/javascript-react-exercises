import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Passing Data 1 - Favorite Movies Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – render the profiles list with the correct heading
 *          and the exact format for each entry to make the tests GREEN.
 * Solution: tests are GREEN – all profiles are rendered with the correct format.
 */

describe('Passing Data 1 - Favorite Movies', () => {
  test('renders the Favorite Movies heading', () => {
    render(<App />);
    expect(screen.getByText('Favorite Movies')).toBeInTheDocument();
  });

  test('displays Jane Cruz\'s favorite movie in the correct format', () => {
    render(<App />);
    expect(
      screen.getByText(`Jane Cruz's favorite movie is "Planet Earth 1."`)
    ).toBeInTheDocument();
  });

  test('displays Matthew Johnson\'s favorite movie in the correct format', () => {
    render(<App />);
    expect(
      screen.getByText(`Matthew Johnson's favorite movie is "Planet Earth 1."`)
    ).toBeInTheDocument();
  });

  test('displays Lauren Carlson\'s favorite movie in the correct format', () => {
    render(<App />);
    expect(
      screen.getByText(`Lauren Carlson's favorite movie is "Selma."`)
    ).toBeInTheDocument();
  });

  test('displays Nicholas Lain\'s favorite movie in the correct format', () => {
    render(<App />);
    expect(
      screen.getByText(`Nicholas Lain's favorite movie is "Forrest Gump."`)
    ).toBeInTheDocument();
  });

  test('renders all 6 user-movie entries', () => {
    render(<App />);
    // Each entry is a <li> element in the profiles list
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBeGreaterThanOrEqual(6);
  });
});
