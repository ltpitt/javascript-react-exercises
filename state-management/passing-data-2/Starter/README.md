# Passing Data II - Starter

## What this exercise teaches

This exercise teaches you advanced data processing and component composition in React. You'll learn how to:

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

When you run this starter exercise, you should see:

- "ReactND - Coding Practice" header with React logo
- A "How Popular is Your Favorite Movie?" section
- A list showing movies grouped by popularity, displaying which users favorited each movie

**🎯 Your task**: This exercise demonstrates data transformation and component composition. The app takes user-movie relationships and inverts them to show movies with their fans. Study how:
- The `usersByMovie` object is built by processing the profiles array
- Data is passed to the `Dashboard` child component via props
- Multiple data sources (users, movies, usersByMovie) are combined
