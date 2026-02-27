

# Fix Mobile Navbar Visibility

## Problem
The mobile slide-in menu uses `bg-white/95 backdrop-blur-lg` -- a semi-transparent white with backdrop blur. On many mobile browsers, `backdrop-blur` doesn't render reliably, leaving a nearly transparent panel where the dark navy text (`text-[#2A266A]`) becomes invisible against the colorful page content behind it.

## Solution
Change the mobile drawer background from semi-transparent to **solid white** (`bg-white`) and remove the `backdrop-blur-lg` since it's no longer needed. This guarantees the text is always readable regardless of browser support.

## Technical Details

### File: `src/components/Navbar.tsx`

**Line 130** -- Change the mobile drawer container class:

- **Before**: `bg-white/95 backdrop-blur-lg`
- **After**: `bg-white`

This is a single-line CSS class change. Everything else (slide animation, close button, menu items, services accordion) stays the same.

