#!/bin/bash

# Final comprehensive theme fix script for ReZ App
# This script ensures all text colors have proper light/dark mode variants

echo "🎨 Starting final theme fixes..."

# Navigate to src directory
cd "$(dirname "$0")/src"

# Counter for changes
total_files=0

# Find all JSX files
for file in $(find . -name "*.jsx" -type f); do
  echo "Processing: $file"

  # Fix text-gray-300 without dark variant
  sed -i '' -E 's/([[:space:]])text-gray-300([[:space:]"])/\1text-rez-gray-700 dark:text-gray-300\2/g' "$file"

  # Fix text-gray-400 without dark variant (common for secondary text)
  sed -i '' -E 's/([[:space:]])text-gray-400([[:space:]"])/\1text-rez-gray-600 dark:text-gray-400\2/g' "$file"

  # Fix text-gray-500 without dark variant
  sed -i '' -E 's/([[:space:]])text-gray-500([[:space:]"])/\1text-rez-gray-600 dark:text-gray-500\2/g' "$file"

  # Fix text-gray-600 without dark variant
  sed -i '' -E 's/([[:space:]])text-gray-600([[:space:]"])/\1text-rez-gray-700 dark:text-gray-600\2/g' "$file"

  # Clean up any duplicate dark: classes that might have been created
  sed -i '' -E 's/dark:text-rez-gray-[0-9]+ dark:/dark:/g' "$file"
  sed -i '' -E 's/dark:text-gray-[0-9]+ dark:/dark:/g' "$file"

  ((total_files++))
done

echo "✅ Processed $total_files files"
echo ""
echo "🔍 Running verification..."

# Verification
echo "Remaining issues:"
echo "- text-gray-300 without dark variant: $(grep -r "className=.*text-gray-300[\" ]" --include="*.jsx" . | grep -v "dark:text-gray-300" | wc -l | tr -d ' ')"
echo "- text-gray-400 without dark variant: $(grep -r "className=.*text-gray-400[\" ]" --include="*.jsx" . | grep -v "dark:text-gray-400" | wc -l | tr -d ' ')"
echo "- text-gray-500 without dark variant: $(grep -r "className=.*text-gray-500[\" ]" --include="*.jsx" . | grep -v "dark:text-gray-500" | wc -l | tr -d ' ')"
echo "- text-gray-600 without dark variant: $(grep -r "className=.*text-gray-600[\" ]" --include="*.jsx" . | grep -v "dark:text-gray-600" | wc -l | tr -d ' ')"

echo ""
echo "✨ Final theme fixes complete!"
