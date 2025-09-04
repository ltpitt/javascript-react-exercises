# JavaScript React Exercises Repository

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This repository contains React fundamentals training exercises organized in lessons (L2-L6). Each lesson contains exercises with Starter and Solution folders, each being an independent React application built with Create React App.

## Repository Structure

```
├── L2. Rendering UI with React/
│   └── 1. JavaScript Expressions with JSX/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── L3. State Management/
│   ├── 1. Passing Data I/
│   ├── 2. Passing Data II/
│   ├── 3. Managing State/
│   ├── 4. Controlled Components I/
│   ├── 5. Controlled Components II/
│   └── 6. All Together/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── L4. Hooks/
│   ├── 1. State Management Recap/
│   ├── 2. State and Side Effects/
│   └── 3. Side Effect Cleanup/
├── L5. Redux/
│   └── udacity-goals-todos/  (Redux + React app)
└── L6. Jest/
    ├── react-test-demo/      (React app with comprehensive tests)
    └── redux-test-demo/      (Redux app with tests)
```

## Working Effectively

### Bootstrap and Build Process
Each exercise folder is an independent React application. To work with any exercise:

1. **Navigate to the specific exercise directory**:
   ```bash
   cd "L3. State Management/1. Passing Data I/Starter"
   ```

2. **Install dependencies** (takes 10-60 seconds):
   ```bash
   npm install
   ```
   - NEVER CANCEL: Installation takes 10-60 seconds depending on package cache. Set timeout to 120+ seconds.
   - Expect deprecation warnings for svgo and stable packages - these are normal.
   - Security vulnerabilities are expected in educational repositories.

3. **Start development server** (takes 3-4 seconds):
   ```bash
   npm start
   ```
   - NEVER CANCEL: Server starts in 3-4 seconds. Set timeout to 30+ seconds.
   - Opens http://localhost:3000 automatically
   - Expect browserslist and webpack deprecation warnings - these are normal.

4. **Build for production** (takes 6 seconds):
   ```bash
   npm run build
   ```
   - NEVER CANCEL: Build takes 6 seconds. Set timeout to 30+ seconds.
   - Some Redux exercises fail CI builds due to ESLint warnings but work fine in development.

5. **Run tests** (takes 3 seconds):
   ```bash
   npm test -- --watchAll=false
   ```
   - NEVER CANCEL: Tests complete in 3 seconds. Set timeout to 30+ seconds.
   - Many Starter exercises have no tests and will exit with code 1 - this is normal.
   - Jest lesson apps have comprehensive working tests.

### Timing Expectations
- npm install: 10-60 seconds (NEVER CANCEL - set timeout 120+ seconds)
- npm start: 3-4 seconds (NEVER CANCEL - set timeout 30+ seconds)  
- npm run build: 6 seconds (NEVER CANCEL - set timeout 30+ seconds)
- npm test: 3 seconds (NEVER CANCEL - set timeout 30+ seconds)

## Lesson-Specific Information

### L2: Rendering UI with React
- Basic React components and JSX
- Single exercise with Starter/Solution folders

### L3: State Management  
- Six exercises covering useState, props passing, controlled components
- Each exercise has Starter/Solution folders
- Most Starter exercises have no tests

### L4: Hooks
- Three exercises covering useState, useEffect, cleanup
- Each exercise has Starter/Solution folders

### L5: Redux
- Single complex application: udacity-goals-todos
- Features: Todo list and Goals list with full CRUD operations
- **IMPORTANT**: Contains ESLint warning that causes CI builds to fail
- Runs perfectly in development mode with `npm start`

### L6: Jest
- Two demonstration apps with comprehensive test suites
- react-test-demo: React testing examples
- redux-test-demo: Redux testing examples
- Both have working test suites that pass

## Validation Scenarios

### ALWAYS validate changes by running complete user scenarios:

#### Basic React Exercise Validation:
1. Navigate to exercise directory
2. Run `npm install && npm start` 
3. Open http://localhost:3000
4. Verify the React app displays correctly with expected content
5. Example: L3 exercises show "ReactND - Coding Practice" with favorite movies list

#### Redux Exercise Validation:
1. Navigate to `L5. Redux/udacity-goals-todos`
2. Run `npm install && npm start`
3. Open http://localhost:3000
4. Wait for "Loading" to disappear and app to fully load
5. Test adding a new todo item in the Todo List section
6. Test adding a new goal in the Goals section  
7. Verify items appear in lists and can be removed with X buttons
8. Check browser console for Redux action logging

#### Jest Exercise Validation:
1. Navigate to `L6. Jest/react-test-demo` or `L6. Jest/redux-test-demo`
2. Run `npm install && npm test -- --watchAll=false`
3. Verify all tests pass (expect some console warnings in test output)
4. Run `npm start` to verify the app also runs correctly

## Important Notes

- **NO global package.json**: Each exercise is completely independent
- **NO global build scripts**: Work within individual exercise directories
- **ESLint Issues**: L5 Redux app has warnings that fail CI builds but work in development
- **Missing Tests**: Many Starter exercises intentionally have no tests
- **Port Usage**: Only one `npm start` can run at a time (all use port 3000)
- **Deprecation Warnings**: Normal and expected - do not attempt to fix
- **Security Vulnerabilities**: Expected in educational repositories - do not attempt to fix

## Common Tasks

### Testing Changes to an Exercise:
1. Navigate to the specific exercise directory
2. Make your changes
3. Run validation scenario for that lesson type
4. Verify functionality works as expected in browser
5. For Redux exercises, also verify build works: `CI=false npm run build`

### Adding New Features:
1. Always work within existing exercise structure
2. Follow Create React App conventions
3. Test both development (`npm start`) and production build (`npm run build`)
4. Validate with appropriate user scenarios

### Debugging Issues:
- Check browser console for React/Redux errors
- Use React DevTools browser extension if available
- Redux exercises show action logging in console
- Most build issues are related to ESLint warnings in CI mode