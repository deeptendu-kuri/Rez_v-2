#!/bin/bash

echo "═══════════════════════════════════════════════════════"
echo "  🎨 ReZ App - Theme Implementation Verification"
echo "═══════════════════════════════════════════════════════"
echo ""

cd src

# Count total files
TOTAL_FILES=$(find . -name "*.jsx" -type f | wc -l | tr -d ' ')
echo "📁 Total JSX files: $TOTAL_FILES"
echo ""

# Check for theme system files
echo "🔍 Core Theme System Files:"
echo "-----------------------------------------------------------"
[ -f "contexts/ThemeContext.jsx" ] && echo "✅ ThemeContext.jsx" || echo "❌ ThemeContext.jsx MISSING"
[ -f "components/ThemeToggle.jsx" ] && echo "✅ ThemeToggle.jsx" || echo "❌ ThemeToggle.jsx MISSING"
[ -f "../tailwind.config.js" ] && echo "✅ tailwind.config.js (with dark mode)" || echo "❌ tailwind.config.js MISSING"
echo ""

# Check App.jsx for ThemeProvider
echo "🔍 ThemeProvider Integration:"
echo "-----------------------------------------------------------"
if grep -q "ThemeProvider" "App.jsx"; then
    echo "✅ ThemeProvider found in App.jsx"
else
    echo "❌ ThemeProvider NOT found in App.jsx"
fi
echo ""

# Check Header for ThemeToggle
echo "🔍 ThemeToggle in Header:"
echo "-----------------------------------------------------------"
if grep -q "ThemeToggle" "components/layout/Header.jsx"; then
    echo "✅ ThemeToggle found in Header.jsx"
else
    echo "❌ ThemeToggle NOT found in Header.jsx"
fi
echo ""

# Verification of theme-aware classes
echo "🎨 Theme-Aware Classes Verification:"
echo "-----------------------------------------------------------"

# Text colors
TEXT_WHITE=$(grep -r 'text-white"' --include="*.jsx" . | grep -v "dark:text-white" | wc -l | tr -d ' ')
TEXT_GRAY_300=$(grep -r 'text-gray-300"' --include="*.jsx" . | grep -v "dark:text-gray-300" | wc -l | tr -d ' ')
TEXT_GRAY_400=$(grep -r 'text-gray-400"' --include="*.jsx" . | grep -v "dark:text-gray-400" | wc -l | tr -d ' ')
TEXT_GRAY_500=$(grep -r 'text-gray-500"' --include="*.jsx" . | grep -v "dark:text-gray-500" | wc -l | tr -d ' ')
TEXT_GRAY_600=$(grep -r 'text-gray-600"' --include="*.jsx" . | grep -v "dark:text-gray-600" | wc -l | tr -d ' ')

# Backgrounds
BG_BLACK=$(grep -r 'bg-black"' --include="*.jsx" . | grep -v "dark:bg-black" | wc -l | tr -d ' ')
BG_WHITE_10=$(grep -r 'bg-white/10"' --include="*.jsx" . | grep -v "dark:bg-white/10" | wc -l | tr -d ' ')
BG_WHITE_5=$(grep -r 'bg-white/5"' --include="*.jsx" . | grep -v "dark:bg-white/5" | wc -l | tr -d ' ')

# Borders
BORDER_WHITE_10=$(grep -r 'border-white/10"' --include="*.jsx" . | grep -v "dark:border-white/10" | wc -l | tr -d ' ')

echo "Text Colors:"
echo "  text-white without dark variant: $TEXT_WHITE"
echo "  text-gray-300 without dark variant: $TEXT_GRAY_300"
echo "  text-gray-400 without dark variant: $TEXT_GRAY_400"
echo "  text-gray-500 without dark variant: $TEXT_GRAY_500"
echo "  text-gray-600 without dark variant: $TEXT_GRAY_600"
echo ""
echo "Backgrounds:"
echo "  bg-black without dark variant: $BG_BLACK"
echo "  bg-white/10 without dark variant: $BG_WHITE_10"
echo "  bg-white/5 without dark variant: $BG_WHITE_5"
echo ""
echo "Borders:"
echo "  border-white/10 without dark variant: $BORDER_WHITE_10"
echo ""

# Calculate total issues
TOTAL_ISSUES=$((TEXT_WHITE + TEXT_GRAY_300 + TEXT_GRAY_400 + TEXT_GRAY_500 + TEXT_GRAY_600 + BG_BLACK + BG_WHITE_10 + BG_WHITE_5 + BORDER_WHITE_10))

# Check for REZ brand colors usage
echo "🎨 REZ Brand Color Usage:"
echo "-----------------------------------------------------------"
REZ_GREEN=$(grep -r "rez-green" --include="*.jsx" . | wc -l | tr -d ' ')
REZ_NAVY=$(grep -r "rez-navy" --include="*.jsx" . | wc -l | tr -d ' ')
REZ_GRAY=$(grep -r "rez-gray" --include="*.jsx" . | wc -l | tr -d ' ')
REZ_TEAL=$(grep -r "rez-teal" --include="*.jsx" . | wc -l | tr -d ' ')
REZ_GOLD=$(grep -r "rez-gold" --include="*.jsx" . | wc -l | tr -d ' ')

echo "  rez-green usage: $REZ_GREEN instances"
echo "  rez-navy usage: $REZ_NAVY instances"
echo "  rez-gray usage: $REZ_GRAY instances"
echo "  rez-teal usage: $REZ_TEAL instances"
echo "  rez-gold usage: $REZ_GOLD instances"
echo ""

# Final Status
echo "═══════════════════════════════════════════════════════"
if [ $TOTAL_ISSUES -eq 0 ]; then
    echo "  ✅ THEME IMPLEMENTATION: 100% COMPLETE"
    echo "  🎉 All $TOTAL_FILES files are theme-aware!"
else
    echo "  ⚠️  THEME IMPLEMENTATION: $TOTAL_ISSUES issues remaining"
fi
echo "═══════════════════════════════════════════════════════"
echo ""

