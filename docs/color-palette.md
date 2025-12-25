# Color Palette

## Theme Configuration

Brand colors are configured as custom theme colors in `app/globals.css` using Tailwind CSS v4's `@theme inline` syntax. This allows us to use semantic class names like `bg-accent-blue` instead of arbitrary values.

**Available semantic classes**:
- `accent-blue` / `accent-blue-hover` - Blue accent and hover state
- `accent-green` / `accent-green-hover` - Green accent and hover state

These can be used with any Tailwind utility: `bg-*`, `text-*`, `border-*`, etc.

## Primary Theme: Dark

Our primary theme uses dark backgrounds with light text, creating a modern, sophisticated aesthetic.

### Dark Backgrounds

- **Dark Primary**: `#0a0a0a` / `rgb(10, 10, 10)` or `#000000` / `rgb(0, 0, 0)`
  - Primary page backgrounds, hero sections
  - Use: `bg-black`, `bg-zinc-950`

- **Dark Secondary**: `#1a1a1a` / `rgb(26, 26, 26)`
  - Card backgrounds, elevated sections
  - Use: `bg-zinc-900`

- **Dark Tertiary**: `#2a2a2a` / `rgb(42, 42, 42)`
  - Borders, dividers on dark backgrounds
  - Use: `bg-zinc-800`, `border-zinc-800`

### Light Text (for dark backgrounds)

- **White**: `#FFFFFF` / `rgb(255, 255, 255)`
  - Primary headlines, key UI elements, navigation
  - Use: `text-white`

- **Light Gray**: `#a1a1aa` / `rgb(161, 161, 170)`
  - Secondary text, body text on dark backgrounds
  - Use: `text-zinc-400`

- **Medium Gray**: `#71717a` / `rgb(113, 113, 122)`
  - Tertiary text, muted content
  - Use: `text-zinc-500`

### Gradient Backgrounds

Dark blue/purple gradients for visual interest and depth:

- **Dark Blue-Purple Gradient**: From dark blue (`#1e3a8a` / `rgb(30, 58, 138)`) to dark purple (`#581c87` / `rgb(88, 28, 135)`)
  - Background elements, hero sections, featured areas
  - Use with low opacity overlays or as full background gradients
  - Creates depth and visual interest without overwhelming content

**Gradient implementation example**:
```tsx
className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-950/30"
// Or more subtle:
className="bg-gradient-to-br from-blue-950/10 via-purple-950/10 to-black"
```

### Light Theme Support (Secondary)

For areas that need light backgrounds:

- **White**: `#FFFFFF` / `rgb(255, 255, 255)`
  - Light backgrounds when needed
  - Use: `bg-white`, `text-white` (on dark)

- **Black**: `#000000` / `rgb(0, 0, 0)`
  - Text on light backgrounds
  - Use: `text-black` (on light backgrounds)

- **Zinc-50**: `#fafafa` / `rgb(250, 250, 250)`
  - Subtle light backgrounds
  - Use: `bg-zinc-50`

- **Zinc-600**: `#52525b` / `rgb(82, 82, 91)`
  - Secondary text on light backgrounds
  - Use: `text-zinc-600` (on light backgrounds)

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

### Text Colors (Dark Theme - Primary)

- **Primary text**: White (`text-white`) on dark backgrounds for headlines and key content
- **Secondary text**: Zinc-400 (`text-zinc-400`) for body text and supporting content on dark backgrounds
- **Muted text**: Zinc-500 (`text-zinc-500`) for de-emphasized content on dark backgrounds
- **Navigation/UI text**: White (`text-white`) with hover states using zinc-400

### Background Colors (Dark Theme - Primary)

- **Primary backgrounds**: Black (`bg-black`) or dark (`bg-zinc-950`) for main page background
- **Section backgrounds**: Maintain dark theme with subtle variations using `bg-zinc-900` for cards or elevated sections
- **Headers/Navigation**: Dark background (`bg-black` or `bg-zinc-950`)
- **Footers**: Dark background with subtle gradients or texture

### Gradient Usage

- Use gradients sparingly and subtly for background elements
- Dark blue-purple gradients work well behind hero content or featured sections
- Keep gradient opacity low (10-30%) to maintain readability
- Gradients should enhance, not distract from content
- Use gradients in backgrounds behind overlapping UI elements or screenshots

**Gradient examples**:
```tsx
// Subtle gradient background
<div className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
  {/* Content */}
</div>

// More pronounced gradient
<div className="bg-gradient-to-br from-blue-950 via-purple-950 to-black">
  {/* Content */}
</div>
```

### Accent Usage

- Use blue OR green for CTAs - choose one per section/context for consistency
- Both colors can appear on the same page in different contexts
- Accent colors should be bright and vibrant to stand out on dark backgrounds
- Reserve accents for important interactive elements and key messages
- Don't overuse - accents should be points of emphasis

**Examples**:
```tsx
// Blue CTA button on dark background
<button className="bg-accent-blue hover:bg-accent-blue-hover text-white">
  Get Started
</button>

// Green CTA button on dark background
<button className="bg-accent-green hover:bg-accent-green-hover text-white">
  Contact Us
</button>

// Blue accent link on dark background
<a className="text-accent-blue hover:text-accent-blue-hover">
  Learn more
</a>

// Interactive element with arrow
<a className="text-white hover:text-zinc-400 flex items-center gap-2">
  Explore Feature <ArrowRight />
</a>
```

### Contrast Requirements

Always ensure sufficient contrast for accessibility:
- White text on black: ✓ Maximum contrast (primary)
- White text on dark backgrounds: ✓ Excellent for headlines
- Zinc-400 on dark backgrounds: ✓ Good for body text (ensure WCAG AA compliance)
- Accent colors on dark backgrounds: ✓ Bright accents maintain good contrast
- Avoid very light gray text on dark backgrounds (below zinc-400)

### Light Theme (When Needed)

For sections that require light backgrounds:
- Use black text (`text-black`) on white/light backgrounds
- Maintain consistency within that section
- Ensure smooth transitions between dark and light sections
