import "./App.css";
import logo from "./logo.svg";

/**
 * Data Display Exercise - Modern React Implementation
 * Demonstrates modern data processing and rendering patterns
 * 
 * 🔑 Modern React Concepts Used:
 * - Functional Components with arrow function syntax
 * - ES6+ Destructuring and object lookups
 * - Array.map() for rendering lists (React best practice)
 * - Template literals for string interpolation
 * - Modern JSX patterns with proper key props
 */

// Use React and the data below to display a list of users alongside their favorite movies.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <ul>
        <h2>Favorite movie</h2>
        {/* Modern React List Rendering Pattern:
            - Using Array.map() to transform data into JSX elements
            - Each element has a unique key prop (required for React performance)
            - Object property access using bracket notation
            - Template literals (ES6+) for string interpolation */}
        {profiles.map((profile) => {
          // ES6+ const declarations in block scope
          const userName = users[profile.userID].name;
          const favMovieName = movies[profile.favoriteMovieID].name;
          
          return (
            <div key={profile.id}>{/* key prop is essential for React's reconciliation */}
              <p>{`${userName} loves the movie "${favMovieName}"`}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
