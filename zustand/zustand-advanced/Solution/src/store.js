import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';

// Create the main todo store with middleware
const useTodoStore = create(
  persist(
    subscribeWithSelector((set, get) => ({
      // State
      todos: [],
      filter: 'all', // 'all', 'active', 'completed'
      isLoading: false,
      
      // Basic actions
      addTodo: (text) => {
        const newTodo = {
          id: Date.now(),
          text: text.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          todos: [...state.todos, newTodo]
        }));
      },
      
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        }));
      },
      
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      },
      
      setFilter: (filter) => set({ filter }),
      
      // Advanced async action with loading state
      clearCompleted: async () => {
        set({ isLoading: true });
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 500));
        set((state) => ({
          todos: state.todos.filter(todo => !todo.completed),
          isLoading: false
        }));
      },
      
      // Computed values (selectors) - using functions instead of getters
      getFilteredTodos: () => {
        const { todos, filter } = get();
        switch (filter) {
          case 'active':
            return todos.filter(todo => !todo.completed);
          case 'completed':
            return todos.filter(todo => todo.completed);
          default:
            return todos;
        }
      },
      
      getActiveCount: () => {
        return get().todos.filter(todo => !todo.completed).length;
      },
      
      getCompletedCount: () => {
        return get().todos.filter(todo => todo.completed).length;
      },
    })),
    {
      name: 'todo-storage', // name of item in localStorage
      partialize: (state) => ({ todos: state.todos }), // only persist todos
    }
  )
);

export default useTodoStore;