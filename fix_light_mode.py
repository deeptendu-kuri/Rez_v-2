#!/usr/bin/env python3
"""
Fix light mode visibility issues across all ReZ app pages.
This script systematically replaces hardcoded colors with theme-aware classes.
"""

import os
import re
from pathlib import Path

# Define the pages directory
PAGES_DIR = Path("/Users/rejaulkarim/Documents/ReZ V 2/rez-app/src/pages")

# Define replacement patterns
# Each pattern is (regex_pattern, replacement_function or string)
REPLACEMENTS = [
    # Text color fixes
    (r'className="([^"]*?)text-white(\s|")', r'className="\1text-rez-navy dark:text-white\2'),
    (r"className='([^']*?)text-white(\s|')", r"className='\1text-rez-navy dark:text-white\2"),
    (r'className=`([^`]*?)text-white(\s|`)', r'className=`\1text-rez-navy dark:text-white\2'),

    (r'className="([^"]*?)text-gray-300(\s|")', r'className="\1text-rez-gray-700 dark:text-gray-300\2'),
    (r"className='([^']*?)text-gray-300(\s|')", r"className='\1text-rez-gray-700 dark:text-gray-300\2'),
    (r'className=`([^`]*?)text-gray-300(\s|`)', r'className=`\1text-rez-gray-700 dark:text-gray-300\2'),

    (r'className="([^"]*?)text-gray-400(\s|")', r'className="\1text-rez-gray-600 dark:text-gray-400\2'),
    (r"className='([^']*?)text-gray-400(\s|')", r"className='\1text-rez-gray-600 dark:text-gray-400\2'),
    (r'className=`([^`]*?)text-gray-400(\s|`)', r'className=`\1text-rez-gray-600 dark:text-gray-400\2'),

    (r'className="([^"]*?)text-gray-500(\s|")', r'className="\1text-rez-gray-500 dark:text-gray-500\2'),
    (r"className='([^']*?)text-gray-500(\s|')", r"className='\1text-rez-gray-500 dark:text-gray-500\2'),
    (r'className=`([^`]*?)text-gray-500(\s|`)', r'className=`\1text-rez-gray-500 dark:text-gray-500\2'),

    # Background color fixes
    (r'className="([^"]*?)bg-white/10(\s|")', r'className="\1bg-rez-gray-100 dark:bg-white/10\2'),
    (r"className='([^']*?)bg-white/10(\s|')", r"className='\1bg-rez-gray-100 dark:bg-white/10\2"),
    (r'className=`([^`]*?)bg-white/10(\s|`)', r'className=`\1bg-rez-gray-100 dark:bg-white/10\2'),

    (r'className="([^"]*?)bg-white/5(\s|")', r'className="\1bg-rez-gray-50 dark:bg-white/5\2'),
    (r"className='([^']*?)bg-white/5(\s|')", r"className='\1bg-rez-gray-50 dark:bg-white/5\2"),
    (r'className=`([^`]*?)bg-white/5(\s|`)', r'className=`\1bg-rez-gray-50 dark:bg-white/5\2'),

    # Border color fixes
    (r'className="([^"]*?)border-white/10(\s|")', r'className="\1border-rez-gray-200 dark:border-white/10\2'),
    (r"className='([^']*?)border-white/10(\s|')", r"className='\1border-rez-gray-200 dark:border-white/10\2"),
    (r'className=`([^`]*?)border-white/10(\s|`)', r'className=`\1border-rez-gray-200 dark:border-white/10\2'),
]

def fix_file(filepath):
    """Fix light mode visibility issues in a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        changes_made = 0

        # Apply all replacements
        for pattern, replacement in REPLACEMENTS:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                changes_made += content.count(pattern) - new_content.count(pattern)
            content = new_content

        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes_made
        return False, 0

    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False, 0

def main():
    """Process all .jsx files in the pages directory."""
    jsx_files = list(PAGES_DIR.rglob("*.jsx"))
    # Exclude backup files
    jsx_files = [f for f in jsx_files if '.bak' not in str(f)]

    print(f"Found {len(jsx_files)} .jsx files to process...")

    total_files_changed = 0
    total_changes = 0

    for filepath in jsx_files:
        changed, num_changes = fix_file(filepath)
        if changed:
            total_files_changed += 1
            total_changes += num_changes
            print(f"✓ {filepath.relative_to(PAGES_DIR)}")

    print(f"\n{'='*60}")
    print(f"SUMMARY:")
    print(f"  Total files processed: {len(jsx_files)}")
    print(f"  Files changed: {total_files_changed}")
    print(f"  Total replacements: {total_changes}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
