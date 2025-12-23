#!/bin/bash

# Fix Light Mode Visibility Issues in ReZ App
# This script fixes all hardcoded colors across all .jsx files in the pages directory

PAGES_DIR="/Users/rejaulkarim/Documents/ReZ V 2/rez-app/src/pages"
TOTAL_FILES=0
TOTAL_CHANGES=0

echo "========================================"
echo "ReZ App - Light Mode Visibility Fixer"
echo "========================================"
echo ""
echo "Processing .jsx files in: $PAGES_DIR"
echo ""

# Find all .jsx files (excluding .bak files)
find "$PAGES_DIR" -name "*.jsx" -type f | grep -v "\.bak" | while read file; do
  TOTAL_FILES=$((TOTAL_FILES + 1))
  CHANGES=0

  # Create backup
  cp "$file" "${file}.bak.tmp"

  # Fix text-white
  sed -i '' 's/className="\([^"]*\)text-white /className="\1text-rez-navy dark:text-white /g' "$file"
  sed -i '' 's/className="\([^"]*\)text-white"/className="\1text-rez-navy dark:text-white"/g' "$file"

  # Fix text-gray-300
  sed -i '' 's/className="\([^"]*\)text-gray-300 /className="\1text-rez-gray-700 dark:text-gray-300 /g' "$file"
  sed -i '' 's/className="\([^"]*\)text-gray-300"/className="\1text-rez-gray-700 dark:text-gray-300"/g' "$file"

  # Fix text-gray-400
  sed -i '' 's/className="\([^"]*\)text-gray-400 /className="\1text-rez-gray-600 dark:text-gray-400 /g' "$file"
  sed -i '' 's/className="\([^"]*\)text-gray-400"/className="\1text-rez-gray-600 dark:text-gray-400"/g' "$file"

  # Fix bg-white/10
  sed -i '' 's/className="\([^"]*\)bg-white\/10 /className="\1bg-rez-gray-100 dark:bg-white\/10 /g' "$file"
  sed -i '' 's/className="\([^"]*\)bg-white\/10"/className="\1bg-rez-gray-100 dark:bg-white\/10"/g' "$file"

  # Fix bg-white/5
  sed -i '' 's/className="\([^"]*\)bg-white\/5 /className="\1bg-rez-gray-50 dark:bg-white\/5 /g' "$file"
  sed -i '' 's/className="\([^"]*\)bg-white\/5"/className="\1bg-rez-gray-50 dark:bg-white\/5"/g' "$file"

  # Fix border-white/10
  sed -i '' 's/className="\([^"]*\)border-white\/10 /className="\1border-rez-gray-200 dark:border-white\/10 /g' "$file"
  sed -i '' 's/className="\([^"]*\)border-white\/10"/className="\1border-rez-gray-200 dark:border-white\/10"/g' "$file"

  # Check if file changed
  if ! cmp -s "$file" "${file}.bak.tmp"; then
    CHANGES=$(diff -u "${file}.bak.tmp" "$file" | grep -c "^+")
    TOTAL_CHANGES=$((TOTAL_CHANGES + CHANGES))
    echo "✓ $(basename "$file") - $CHANGES changes"
  fi

  # Remove temporary backup
  rm "${file}.bak.tmp"
done

echo ""
echo "========================================"
echo "SUMMARY:"
echo "  Files processed: $TOTAL_FILES"
echo "  Total changes: $TOTAL_CHANGES"
echo "========================================"
echo ""
echo "All light mode visibility issues fixed!"
echo ""
echo "To verify, check any .jsx file and search for:"
echo "  - text-white (should have dark:text-white)"
echo "  - text-gray-300 (should have dark:text-gray-300)"
echo "  - bg-white/10 (should have dark:bg-white/10)"
echo ""
