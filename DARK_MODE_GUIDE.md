# Dark Mode Global Configuration

## Overview
Dark mode colors are now globally configured using CSS variables. This means you can change dark mode colors in one place (`app/globals.css`) and it will apply everywhere.

## CSS Variables

All dark mode colors are defined in `app/globals.css`:

```css
.dark {
  --dark-bg: #111827;           /* Main dark background (gray-900) */
  --dark-bg-secondary: #030712; /* Secondary dark background (gray-950) */
  --dark-bg-tertiary: #1f2937;  /* Tertiary dark background (gray-800) */
  --dark-glass: rgba(30, 30, 30, 0.8); /* Glassmorphism background */
}
```

## Usage in Components

### Option 1: Use Tailwind's gray scale (Recommended)
Since Tailwind's `gray-900` (#111827) matches our `--dark-bg`, you can simply use:
```tsx
<div className="bg-white dark:bg-gray-900">
```

### Option 2: Use CSS Variables directly
For more control, use Tailwind's arbitrary values:
```tsx
<div className="bg-white dark:bg-[var(--dark-bg)]">
```

### Option 3: Use utility classes
Use the custom utility classes defined in `globals.css`:
```tsx
<div className="bg-white dark:bg-dark">
```

## Changing Dark Mode Colors Globally

To change dark mode colors site-wide, simply update the CSS variables in `app/globals.css`:

```css
.dark {
  --dark-bg: #YOUR_COLOR_HERE;
  --dark-bg-secondary: #YOUR_COLOR_HERE;
  --dark-bg-tertiary: #YOUR_COLOR_HERE;
  --dark-glass: rgba(YOUR_RGBA_VALUES);
}
```

All components using these variables will automatically update!

## Current Color Scheme

- **Main Background**: `#111827` (gray-900) - Reduced contrast from pure black
- **Secondary Background**: `#030712` (gray-950) - For darker accents
- **Tertiary Background**: `#1f2937` (gray-800) - For lighter dark elements
- **Glass Effect**: `rgba(30, 30, 30, 0.8)` - For glassmorphism

