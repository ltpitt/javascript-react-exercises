import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * All Together Exercise Tests
 *
 * These tests define the goal of the exercise.
 * Starter: tests are RED  – implement the AddUser form and UserList components
 *          to make the tests GREEN.
 * Solution: tests are GREEN – AddUser and UserList are fully implemented.
 */

describe('All Together - User Management', () => {
  test('renders the New User form heading', () => {
    render(<App />);
    expect(screen.getByText('New User')).toBeInTheDocument();
  });

  test('Add button is disabled when all fields are empty', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Add' })).toBeDisabled();
  });

  test('Add button is disabled when only some fields are filled', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Enter First Name'), {
      target: { value: 'Jane' },
    });
    expect(screen.getByRole('button', { name: 'Add' })).toBeDisabled();
  });

  test('Add button is enabled when all fields are filled', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Enter First Name'), {
      target: { value: 'Jane' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter username'), {
      target: { value: 'janedoe' },
    });
    expect(screen.getByRole('button', { name: 'Add' })).not.toBeDisabled();
  });

  test('submitting the form adds the user to the list', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Enter First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Last Name'), {
      target: { value: 'Smith' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter username'), {
      target: { value: 'jsmith' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByText(/jsmith/)).toBeInTheDocument();
  });

  test('shows an error when a duplicate username is submitted', () => {
    render(<App />);
    const fillAndSubmit = () => {
      fireEvent.change(screen.getByPlaceholderText('Enter First Name'), {
        target: { value: 'Alice' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter Last Name'), {
        target: { value: 'Smith' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter username'), {
        target: { value: 'alice' },
      });
      fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    };
    fillAndSubmit();
    fillAndSubmit();
    expect(
      screen.getByText('You cannot add a user that already exists.')
    ).toBeInTheDocument();
  });
});
