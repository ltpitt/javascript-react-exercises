# Passing Data I - Solution

## What this exercise teaches

This exercise demonstrates how to work with data structures and display information in React. You'll learn how to:

- Process and display complex nested data structures
- Use JavaScript objects and arrays in React components
- Render dynamic lists using `.map()`
- Access object properties with bracket notation
- Combine multiple data sources to display meaningful information

## Key concepts used

- **Functional Components**: Modern React component syntax
- **Data Processing**: Working with arrays of objects and object lookups
- **List Rendering**: Using `.map()` to render arrays as JSX elements  
- **Key Props**: Providing unique identifiers for list items
- **Object Property Access**: Using bracket notation for dynamic property access
- **Template Literals**: ES6+ string interpolation with `${}`

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
- A "Favorite movie" section
- A list showing each user paired with their favorite movie, formatted as: "Jane Cruz loves the movie 'Planet Earth 1'"

**✅ Solution highlights**: This solution demonstrates effective data processing patterns including:
- Using `.map()` to transform arrays into JSX elements
- Proper use of `key` props for React performance
- Object lookups with bracket notation for dynamic data access
- Template literals for clean string formatting
