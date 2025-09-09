# Passing Data II - Solution A

## What this exercise teaches

This exercise demonstrates advanced data processing and component composition in React. You'll learn how to:

- Organize data by grouping related items together
- Pass complex data structures between components using props
- Create reusable child components that receive and display data
- Invert data relationships (group users by movies instead of movies by users)

## Key concepts used

- **Component Composition**: Breaking functionality into multiple components
- **Props Passing**: Sending data from parent to child components
- **Data Transformation**: Using loops to reorganize data structures
- **Object Manipulation**: Building objects dynamically with bracket notation
- **Child Components**: Creating specialized components for specific display logic

## How to run it

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **View the app**: 
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Stop the server**: Press `Ctrl+C` in the terminal

## Expected behavior

When you run this solution, you should see:

- "ReactND - Coding Practice" header with React logo
- A "How Popular is Your Favorite Movie?" section
- A list showing movies grouped by popularity, displaying which users favorited each movie

**✅ Solution A highlights**: This solution demonstrates one approach to component composition and data transformation. It shows how to:
- Transform arrays into grouped object structures
- Pass multiple props to child components
- Separate presentation logic into dedicated components
