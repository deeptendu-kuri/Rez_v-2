# Button/Icon Click Handler Fixes Needed

## Issue
Several buttons and interactive elements across the app are missing `onClick` handlers, making them appear non-functional.

## Fixed
- ✅ **HomeHeader.jsx** - Location button now has click handler

## Pages Needing Fixes

### High Priority (User-Facing)

1. **Grocery.jsx**
   - Notification/bell button
   - Filter buttons
   - Category buttons

2. **Electronics.jsx**
   - Notification button
   - "View All" buttons (need proper navigation)
   - Filter/sort buttons

3. **BeautyService.jsx**
   - Action buttons
   - Filter buttons

4. **Help.jsx**
   - FAQ expand/collapse buttons

5. **DealDetail.jsx**
   - Share button
   - Save/bookmark button
   - Action buttons

### Common Patterns to Fix

#### Pattern 1: Notification/Bell Buttons
```jsx
// BEFORE (broken)
<button className="p-2 rounded-full bg-rez-gray-100">
  <Bell className="w-5 h-5" />
</button>

// AFTER (working)
<button
  onClick={() => navigate('/notifications')}
  className="p-2 rounded-full bg-rez-gray-100"
>
  <Bell className="w-5 h-5" />
</button>
```

#### Pattern 2: Filter/Sort Buttons
```jsx
// BEFORE (broken)
<button className="text-xs text-emerald-400">
  Filter
</button>

// AFTER (working)
<button
  onClick={() => setShowFilters(true)}
  className="text-xs text-emerald-400"
>
  Filter
</button>
```

#### Pattern 3: Share/Save Buttons
```jsx
// BEFORE (broken)
<button className="p-2 rounded-full">
  <Share2 className="w-5 h-5" />
</button>

// AFTER (working)
<button
  onClick={handleShare}
  className="p-2 rounded-full"
>
  <Share2 className="w-5 h-5" />
</button>
```

## Solution Strategy

### Immediate Fix (Quick)
Add console.log handlers to all buttons:
```jsx
onClick={() => console.log('Button clicked - implement handler')}
```

### Proper Fix (Complete)
1. Add proper navigation handlers
2. Add state management for filters/modals
3. Implement share/save functionality
4. Add loading states

## Files to Update

Priority order:
1. src/components/home/HomeHeader.jsx ✅ DONE
2. src/pages/Grocery.jsx
3. src/pages/Electronics.jsx
4. src/pages/BeautyService.jsx
5. src/pages/Help.jsx
6. src/pages/DealDetail.jsx
7. Other category pages (Beauty, Fashion, Healthcare, Fitness, etc.)

## Testing Checklist

After fixes:
- [ ] All buttons respond to clicks
- [ ] Navigation buttons go to correct routes
- [ ] Filter/sort buttons show UI feedback
- [ ] Share buttons work (or show console message)
- [ ] No console errors on button clicks

## Notes

- Many "View All" text buttons are actually working if they're wrapped in `<Link>` components
- Focus on actual `<button>` elements without handlers
- Some buttons may intentionally be placeholders for future features
