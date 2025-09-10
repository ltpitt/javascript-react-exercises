# JavaScript React Exercises Repository

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This repository contains React fundamentals training exercises organized by topic. Each topic contains exercises with Starter and Solution folders, each being an independent React application built with Create React App.

## Repository Structure

```
├── fundamentals/
│   └── jsx-expressions/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── state-management/
│   ├── passing-data-1/
│   ├── passing-data-2/
│   ├── managing-state/
│   └── all-together/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── forms/
│   ├── controlled-components-1/
│   └── controlled-components-2/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── hooks/
│   ├── state-management-recap/
│   ├── state-and-side-effects/
│   └── side-effect-cleanup/
│       ├── Starter/     (independent React app)
│       └── Solution/    (independent React app)
├── redux/
│   ├── goals-todos-app/  (Redux + React app)
│   └── redux-exercise.html (standalone HTML)
└── testing/
    ├── react-test-demo/      (React app with comprehensive tests)
    ├── redux-test-demo/      (Redux app with tests - has config issue)
    └── Jest utility files
```

## Working Effectively

### Bootstrap and Build Process
Each exercise folder is an independent React application. To work with any exercise:

1. **Navigate to the specific exercise directory**:
   ```bash
   cd "state-management/passing-data-1/Starter"
   ```

2. **Install dependencies** (takes 10-60 seconds):
   ```bash
   npm install
   ```
   - NEVER CANCEL: Installation takes 10-60 seconds depending on package cache. Set timeout to 120+ seconds.
   - Expect deprecation warnings for @babel/plugin-proposal-*, svgo and stable packages - these are normal.
   - Security vulnerabilities are expected in educational repositories.

3. **Start development server** (takes 3-4 seconds):
   ```bash
   npm start
   ```
   - NEVER CANCEL: Server starts in 3-4 seconds. Set timeout to 30+ seconds.
   - Opens http://localhost:3000 automatically
   - Expect browserslist and webpack deprecation warnings - these are normal.

4. **Build for production** (takes 6-7 seconds):
   ```bash
   npm run build
   ```
   - NEVER CANCEL: Build takes 6-7 seconds. Set timeout to 30+ seconds.
   - All exercises build successfully in both regular and CI modes.

5. **Run tests** (takes 3 seconds):
   ```bash
   npm test -- --watchAll=false
   ```
   - NEVER CANCEL: Tests complete in 3 seconds. Set timeout to 30+ seconds.
   - Many Starter exercises have no tests and will exit with code 1 - this is normal.
   - react-test-demo has comprehensive working tests.

### Timing Expectations
- npm install: 10-60 seconds (NEVER CANCEL - set timeout 120+ seconds)
- npm start: 3-4 seconds (NEVER CANCEL - set timeout 30+ seconds)  
- npm run build: 6-7 seconds (NEVER CANCEL - set timeout 30+ seconds)
- npm test: 3 seconds (NEVER CANCEL - set timeout 30+ seconds)

## Exercise-Specific Information

### fundamentals/
- Single exercise: jsx-expressions  
- Basic React components and JSX
- Demonstrates JSX expressions, variables, and modern React patterns
- Displays "Welcome to React!" with React facts and logo

### state-management/
- Four exercises covering useState, props passing, component communication
- Each exercise has Starter/Solution folders
- Most Starter exercises have no tests
- Example: passing-data-1 shows "ReactND - Coding Practice" with favorite movies list

### forms/
- Two exercises covering controlled components and form handling
- Each exercise has Starter/Solution folders
- Demonstrates modern form patterns with React hooks

### hooks/
- Three exercises covering useState, useEffect, cleanup
- Each exercise has Starter/Solution folders
- Demonstrates modern React hook patterns and side effect management

### redux/
- Main app: goals-todos-app (Redux + React application)
- Features: Todo list and Goals list with full CRUD operations
- Builds successfully in both development and CI modes
- Also contains redux-exercise.html for pure Redux concepts

### testing/
- react-test-demo: React testing examples (working tests)
- redux-test-demo: Redux testing examples (has @testing-library/jest-dom import issue)
- Additional Jest utility files (Package.json, standalone test files)

## Validation Scenarios

### ALWAYS validate changes by running complete user scenarios:

#### Basic React Exercise Validation:
1. Navigate to exercise directory (e.g., `fundamentals/jsx-expressions/Starter`)
2. Run `npm install && npm start` 
3. Open http://localhost:3000
4. Verify the React app displays correctly with expected content
5. Example: jsx-expressions shows "Welcome to React!" with release facts

#### State Management Exercise Validation:
1. Navigate to exercise directory (e.g., `state-management/passing-data-1/Starter`)
2. Run `npm install && npm start`
3. Open http://localhost:3000
4. Verify "ReactND - Coding Practice" header appears
5. Verify favorite movies list displays user names and movie titles correctly

#### Redux Exercise Validation:
1. Navigate to `redux/goals-todos-app`
2. Run `npm install && npm start`
3. Open http://localhost:3000
4. Wait for "Loading" to disappear and app to fully load
5. Test adding a new todo item in the Todo List section
6. Test adding a new goal in the Goals section  
7. Verify items appear in lists and can be removed with X buttons
8. Check browser console for Redux action logging

#### Testing Exercise Validation:
1. Navigate to `testing/react-test-demo`
2. Run `npm install && npm test -- --watchAll=false`
3. Verify all tests pass (expect some console warnings in test output - these are normal)
4. Run `npm start` to verify the app also runs correctly
5. Note: redux-test-demo has @testing-library/jest-dom import configuration issue

## Important Notes

- **NO global package.json**: Each exercise is completely independent
- **NO global build scripts**: Work within individual exercise directories
- **All exercises build successfully**: No known ESLint build failures in current version
- **Missing Tests**: Many Starter exercises intentionally have no tests
- **Port Usage**: Only one `npm start` can run at a time (all use port 3000)
- **Deprecation Warnings**: Normal and expected - do not attempt to fix
- **Security Vulnerabilities**: Expected in educational repositories - do not attempt to fix
- **React 18**: All exercises use React 18 with createRoot API and modern patterns

## Common Tasks

### Testing Changes to an Exercise:
1. Navigate to the specific exercise directory
2. Make your changes
3. Run validation scenario for that exercise type
4. Verify functionality works as expected in browser
5. Run `npm run build` to verify production build works

### Adding New Features:
1. Always work within existing exercise structure
2. Follow Create React App conventions
3. Test both development (`npm start`) and production build (`npm run build`)
4. Validate with appropriate user scenarios

### Debugging Issues:
- Check browser console for React/Redux errors
- Use React DevTools browser extension if available
- Redux exercises show action logging in console
- Most issues are related to missing dependencies or incorrect paths