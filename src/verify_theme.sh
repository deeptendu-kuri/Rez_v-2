#!/bin/bash

echo "==========================================="
echo "Theme Verification Report"
echo "==========================================="
echo ""

echo "1. Checking for text-white without dark: variant..."
grep -r "text-white\"" pages/ components/ --include="*.jsx" | grep -v "dark:text-white" | wc -l

echo "2. Checking for bg-black without dark: variant..."
grep -r "bg-black" pages/ components/ --include="*.jsx" | grep -v "dark:bg-black" | wc -l

echo "3. Checking for bg-white/10 without dark: variant..."
grep -r "bg-white/10" pages/ components/ --include="*.jsx" | grep -v "dark:bg-white" | wc -l

echo "4. Checking for duplicate dark: classes..."
grep -r "dark:.*dark:" pages/ components/ --include="*.jsx" | wc -l

echo ""
echo "==========================================="
echo "If all counts are 0, theme is properly configured!"
echo "==========================================="
