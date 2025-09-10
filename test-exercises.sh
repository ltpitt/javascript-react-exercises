#!/bin/bash

# Test Runner for JavaScript React Exercises
# This script runs tests and linting for key exercises that have test files

echo "🧪 Running tests and linting for JavaScript React Exercises"
echo "============================================================"

# Define exercises that have test files
exercises=(
  "fundamentals/jsx-expressions/Starter"
  "state-management/managing-state/Starter"
  "forms/controlled-components-1/Starter"
  "hooks/state-and-side-effects/Starter"
)

total_exercises=${#exercises[@]}
passed_tests=0
passed_lints=0
failed_exercises=()

for exercise in "${exercises[@]}"; do
  echo ""
  echo "📁 Testing: $exercise"
  echo "--------------------------------"
  
  cd "$exercise"
  
  # Check if node_modules exists, install if needed
  if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --silent
  fi
  
  # Run tests
  echo "🧪 Running tests..."
  if npm test -- --watchAll=false --silent > /dev/null 2>&1; then
    echo "✅ Tests PASSED"
    ((passed_tests++))
  else
    echo "❌ Tests FAILED"
    failed_exercises+=("$exercise (tests)")
  fi
  
  # Run ESLint
  echo "🔍 Running ESLint..."
  if npx eslint src/ --ext .js,.jsx > /dev/null 2>&1; then
    echo "✅ ESLint PASSED"
    ((passed_lints++))
  else
    echo "❌ ESLint FAILED"
    failed_exercises+=("$exercise (linting)")
  fi
  
  cd - > /dev/null
done

echo ""
echo "📊 SUMMARY"
echo "============================================================"
echo "Total exercises tested: $total_exercises"
echo "Tests passed: $passed_tests/$total_exercises"
echo "Linting passed: $passed_lints/$total_exercises"

if [ ${#failed_exercises[@]} -eq 0 ]; then
  echo "🎉 All exercises passed tests and linting!"
  exit 0
else
  echo "❌ Failed exercises:"
  for failed in "${failed_exercises[@]}"; do
    echo "   - $failed"
  done
  exit 1
fi