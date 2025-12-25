# Color Palette

## Theme Configuration

Brand colors are configured as custom theme colors in `app/globals.css` using Tailwind CSS v4's `@theme inline` syntax. This allows us to use semantic class names like `bg-accent-blue` instead of arbitrary values.

**Available semantic classes**:
- `accent-blue` / `accent-blue-hover` - Blue accent and hover state
- `accent-green` / `accent-green-hover` - Green accent and hover state

These can be used with any Tailwind utility: `bg-*`, `text-*`, `border-*`, etc.

## Primary Colors

### Monochrome Base

Our foundation is a monochrome palette that provides clarity and sophistication.

- **Black**: `#000000` / `rgb(0, 0, 0)`
  - Primary text, headers, key UI elements
  - Use: `text-black`, `bg-black`

- **White**: `#FFFFFF` / `rgb(255, 255, 255)`
  - Backgrounds, inverse text
  - Use: `text-white`, `bg-white`

### Grayscale

- **Zinc-50**: `#fafafa` / `rgb(250, 250, 250)`
  - Subtle backgrounds, page backgrounds
  - Use: `bg-zinc-50`

- **Zinc-400**: `#a1a1aa` / `rgb(161, 161, 170)`
  - Secondary text, muted content
  - Use: `text-zinc-400`

- **Zinc-600**: `#52525b` / `rgb(82, 82, 91)`
  - Tertiary text, de-emphasized content
  - Use: `text-zinc-600`

- **Zinc-950**: `#09090b` / `rgb(9, 9, 11)`
  - Near-black for subtle variation
  - Use: `text-zinc-950`

## Accent Colors

Use bright, vibrant accents to add energy and guide attention. Both colors can be used interchangeably throughout the site.

### Blue Accent

- **Bright Blue**: `#0066FF` / `rgb(0, 102, 255)`
  - CTAs, links, interactive elements
  - Conveys trust and technology
  - Use: `bg-accent-blue`, `text-accent-blue`, `border-accent-blue`

- **Blue Hover**: `#0052CC` / `rgb(0, 82, 204)`
  - Hover states for blue elements
  - Use: `hover:bg-accent-blue-hover`

### Green Accent

- **Bright Green**: `#00D084` / `rgb(0, 208, 132)`
  - CTAs, success states, highlights
  - Conveys growth and innovation
  - Use: `bg-accent-green`, `text-accent-green`, `border-accent-green`

- **Green Hover**: `#00B872` / `rgb(0, 184, 114)`
  - Hover states for green elements
  - Use: `hover:bg-accent-green-hover`

## Usage Guidelines

### Text Colors

- **Primary text**: Black (`text-black`) on white/light backgrounds
- **Secondary text**: Zinc-600 (`text-zinc-600`) for supporting content
- **Muted text**: Zinc-400 (`text-zinc-400`) for de-emphasized content
- **Inverse text**: White (`text-white`) on dark backgrounds

### Background Colors

- **Primary backgrounds**: White (`bg-white`) for content areas
- **Subtle backgrounds**: Zinc-50 (`bg-zinc-50`) for page backgrounds
- **Dark backgrounds**: Black (`bg-black`) for headers, footers, dark sections

### Accent Usage

- Use blue OR green for CTAs - choose one per section/context for consistency
- Both colors can appear on the same page in different contexts
- Reserve accents for important interactive elements and key messages
- Don't overuse - accents should stand out against the monochrome foundation

**Examples**:
```tsx
// Blue CTA button
<button className="bg-accent-blue hover:bg-accent-blue-hover text-white">
  Get Started
</button>

// Green CTA button
<button className="bg-accent-green hover:bg-accent-green-hover text-white">
  Contact Us
</button>

// Blue accent link
<a className="text-accent-blue hover:text-accent-blue-hover">
  Learn more
</a>
```

### Contrast Requirements

Always ensure sufficient contrast for accessibility:
- Black text on white: ✓ Maximum contrast
- White text on black: ✓ Maximum contrast
- Zinc-600 on white: ✓ Good for body text
- Avoid light gray text on white backgrounds

## Dark Mode

The monochrome palette naturally supports dark mode:

- Invert black/white backgrounds
- Keep accent colors bright in dark mode
- Adjust zinc shades: lighter shades become darker and vice versa
- Use `dark:` Tailwind prefix for dark mode variants
