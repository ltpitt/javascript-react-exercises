# Contributing to React Fundamentals Exercises

Thank you for your interest in contributing to this educational repository! This project helps developers learn React through hands-on exercises, and we welcome contributions that enhance the learning experience.

## 🎯 How to Contribute

### 📋 Types of Contributions

We welcome several types of contributions:

- **🐛 Bug Reports** - Found an issue with an exercise or setup?
- **📚 Documentation Improvements** - Better explanations, typos, or clarity
- **🔧 Exercise Enhancements** - Improvements to existing exercises
- **✨ New Exercises** - Additional learning content for existing topics
- **🧪 Testing Improvements** - Better test coverage or examples
- **🚀 Performance Optimizations** - Making exercises run better

### 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/javascript-react-exercises.git
   cd javascript-react-exercises
   ```
3. **Create a topic branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 🛠 Development Setup

Each exercise is an independent React application. To work on any exercise:

1. **Navigate to the exercise directory**:
   ```bash
   cd fundamentals/jsx-expressions/Starter
   ```

2. **Install dependencies** (allow 10-60 seconds):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Run tests** (if available):
   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

### 📝 Contribution Guidelines

#### Exercise Structure
- Each exercise should have both `Starter/` and `Solution/` folders
- Both folders must be independent, working React applications
- Use **React 18** with the `createRoot` API
- Follow **functional components** with hooks (no class components)
- Include educational comments explaining key concepts

#### Code Style
- **ES6+ syntax**: Use arrow functions, destructuring, template literals
- **Modern React patterns**: Hooks, functional components, modern JSX
- **Consistent formatting**: Follow existing code style in the repository
- **Educational value**: Include comments that help learners understand concepts

#### Testing
- Include tests where educational value is added
- Use React Testing Library for component tests
- Follow patterns established in `testing/react-test-demo`
- Ensure tests pass with `npm test`

### 🐛 Reporting Issues

When reporting issues, please include:

1. **Which exercise** you were working on
2. **Steps to reproduce** the issue
3. **Expected behavior** vs **actual behavior**
4. **Environment information**:
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Operating system

Use our issue template when available, or provide this information in your bug report.

### 💡 Suggesting Enhancements

For feature requests or enhancement ideas:

1. **Check existing issues** to avoid duplicates
2. **Describe the learning goal** your enhancement addresses
3. **Explain the educational value** it would provide
4. **Consider the target audience** (beginner vs. intermediate learners)

### 🔄 Pull Request Process

1. **Test your changes thoroughly**:
   ```bash
   # Test the specific exercise you modified
   cd path/to/exercise/Starter
   npm install && npm start
   # Verify the exercise works in browser
   npm run build  # Ensure it builds successfully
   ```

2. **Follow the PR template** (if available)

3. **Write clear commit messages**:
   ```
   Add useEffect cleanup exercise
   
   - Created new exercise in hooks/side-effect-cleanup
   - Demonstrates proper cleanup patterns
   - Includes starter code and complete solution
   - Added educational comments explaining cleanup necessity
   ```

4. **Update documentation** if needed:
   - Update README.md if adding new exercises
   - Update CHANGELOG.md for significant changes
   - Include any necessary setup instructions

5. **Ensure CI passes**:
   - All exercises must build successfully
   - Tests must pass where applicable
   - Follow the matrix exercises tested in GitHub Actions

### 🧪 Testing Your Contributions

Before submitting, validate your changes:

#### For Exercise Modifications:
```bash
cd path/to/modified/exercise
npm install && npm start
# Verify the exercise works correctly in browser
npm run build  # Must complete successfully
npm test  # If tests exist
```

#### For New Exercises:
```bash
# Test both Starter and Solution
cd new-exercise/Starter
npm install && npm start && npm run build

cd ../Solution  
npm install && npm start && npm run build
```

### 📚 Educational Standards

When contributing educational content:

- **Clear learning objectives**: What should learners accomplish?
- **Progressive difficulty**: Build on previous concepts appropriately
- **Real-world relevance**: Use practical, meaningful examples
- **Comprehensive examples**: Include both simple and complex scenarios
- **Accessible explanations**: Assume minimal prior knowledge when appropriate

### 🚨 Important Notes

- **Independent applications**: Each exercise folder must be a complete, working React app
- **No global dependencies**: Each exercise manages its own package.json
- **React 18 requirement**: All new exercises must use React 18+ patterns
- **Modern practices**: Use functional components and hooks exclusively
- **Educational focus**: Prioritize learning value over complex features

### 📄 License

By contributing to this repository, you agree that your contributions will be licensed under the MIT License that covers the project.

### 🤝 Code of Conduct

This project follows GitHub's Community Guidelines. Be respectful, inclusive, and constructive in all interactions.

### ❓ Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Create a new issue with the "question" label
3. Be specific about what you're trying to accomplish

Thank you for helping make React education better for everyone! 🎉