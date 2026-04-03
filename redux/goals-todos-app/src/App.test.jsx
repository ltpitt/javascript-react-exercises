import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import goalsReducer from './reducers/goals';
import todosReducer from './reducers/todos';
import loadingReducer from './reducers/loading';
import { ADD_GOAL, REMOVE_GOAL } from './actions/goals';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions/todos';
import { RECEIVE_DATA } from './actions/shared';
import checker from './middleware/checker';
import List from './components/List';

/**
 * Redux Goals & Todos App Tests
 *
 * Reducers are pure functions – easy to test in isolation.
 * The List component and checker middleware are also tested here.
 */

// ─── Goals Reducer ────────────────────────────────────────────────────────────

describe('Goals Reducer', () => {
  test('returns an empty array as the initial state', () => {
    expect(goalsReducer(undefined, {})).toEqual([]);
  });

  test('adds a goal on ADD_GOAL', () => {
    const goal = { id: '1', name: 'Learn Redux' };
    const state = goalsReducer([], { type: ADD_GOAL, goal });
    expect(state).toEqual([goal]);
  });

  test('removes a goal by id on REMOVE_GOAL', () => {
    const goal = { id: '1', name: 'Learn Redux' };
    const state = goalsReducer([goal], { type: REMOVE_GOAL, id: '1' });
    expect(state).toEqual([]);
  });

  test('replaces the entire list on RECEIVE_DATA', () => {
    const goals = [{ id: '1', name: 'Goal A' }];
    const state = goalsReducer([], { type: RECEIVE_DATA, todos: [], goals });
    expect(state).toEqual(goals);
  });
});

// ─── Todos Reducer ────────────────────────────────────────────────────────────

describe('Todos Reducer', () => {
  test('returns an empty array as the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  test('adds a todo on ADD_TODO', () => {
    const todo = { id: '1', name: 'Write tests', complete: false };
    const state = todosReducer([], { type: ADD_TODO, todo });
    expect(state).toEqual([todo]);
  });

  test('removes a todo by id on REMOVE_TODO', () => {
    const todo = { id: '1', name: 'Write tests', complete: false };
    const state = todosReducer([todo], { type: REMOVE_TODO, id: '1' });
    expect(state).toEqual([]);
  });

  test('flips the complete flag on TOGGLE_TODO', () => {
    const todo = { id: '1', name: 'Write tests', complete: false };
    const toggled = todosReducer([todo], { type: TOGGLE_TODO, id: '1' });
    expect(toggled[0].complete).toBe(true);

    const toggledBack = todosReducer(toggled, { type: TOGGLE_TODO, id: '1' });
    expect(toggledBack[0].complete).toBe(false);
  });

  test('replaces the entire list on RECEIVE_DATA', () => {
    const todos = [{ id: '1', name: 'Todo A', complete: false }];
    const state = todosReducer([], { type: RECEIVE_DATA, todos, goals: [] });
    expect(state).toEqual(todos);
  });
});

// ─── Loading Reducer ──────────────────────────────────────────────────────────

describe('Loading Reducer', () => {
  test('defaults to true (loading)', () => {
    expect(loadingReducer(undefined, {})).toBe(true);
  });

  test('becomes false when RECEIVE_DATA is dispatched', () => {
    const state = loadingReducer(true, {
      type: RECEIVE_DATA,
      todos: [],
      goals: [],
    });
    expect(state).toBe(false);
  });
});

// ─── Checker Middleware ───────────────────────────────────────────────────────

describe('Checker Middleware', () => {
  test('blocks a todo whose name contains "bitcoin"', () => {
    const next = vi.fn();
    window.alert = vi.fn();
    checker({})(next)({ type: ADD_TODO, todo: { name: 'buy bitcoin' } });
    expect(window.alert).toHaveBeenCalledWith("Nope. That's a bad idea.");
    expect(next).not.toHaveBeenCalled();
  });

  test('blocks a goal whose name contains "bitcoin"', () => {
    const next = vi.fn();
    window.alert = vi.fn();
    checker({})(next)({ type: ADD_GOAL, goal: { name: 'invest in bitcoin' } });
    expect(window.alert).toHaveBeenCalledWith("Nope. That's a bad idea.");
    expect(next).not.toHaveBeenCalled();
  });

  test('passes normal todos through to next', () => {
    const next = vi.fn();
    const action = { type: ADD_TODO, todo: { name: 'buy groceries' } };
    checker({})(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  test('passes normal goals through to next', () => {
    const next = vi.fn();
    const action = { type: ADD_GOAL, goal: { name: 'learn Redux' } };
    checker({})(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});

// ─── List Component ───────────────────────────────────────────────────────────

describe('List Component', () => {
  test('renders an empty list when given no items', () => {
    const { container } = render(<List items={[]} remove={() => {}} />);
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(0);
  });

  test('renders each item by name', () => {
    const items = [
      { id: '1', name: 'Learn Redux', complete: false },
      { id: '2', name: 'Write tests', complete: false },
    ];
    render(<List items={items} remove={() => {}} />);
    expect(screen.getByText('Learn Redux')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('calls the remove handler with the correct item when X is clicked', () => {
    const remove = vi.fn();
    const items = [{ id: '1', name: 'Learn Redux', complete: false }];
    render(<List items={items} remove={remove} />);
    fireEvent.click(screen.getByRole('button', { name: 'X' }));
    expect(remove).toHaveBeenCalledWith(items[0]);
  });

  test('renders completed items with a strikethrough style', () => {
    const items = [{ id: '1', name: 'Done task', complete: true }];
    render(<List items={items} remove={() => {}} />);
    const span = screen.getByText('Done task');
    expect(span.style.textDecoration).toBe('line-through');
  });

  test('renders incomplete items without a strikethrough', () => {
    const items = [{ id: '1', name: 'Pending task', complete: false }];
    render(<List items={items} remove={() => {}} />);
    const span = screen.getByText('Pending task');
    expect(span.style.textDecoration).toBe('none');
  });
});
