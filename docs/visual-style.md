# Visual Style Guide

## Design Principles

### Modern Dark Minimal

Our visual style embraces modern minimalism with a dark theme:

- **Dark-first approach**: Dark backgrounds with light text create a modern, sophisticated aesthetic
- **Generous spacing**: Let content breathe with ample whitespace (or "darkspace")
- **Clean layouts**: Clear hierarchy, uncluttered
- **Purposeful elements**: Every element should serve a function
- **Focus on content**: Design supports the message, doesn't overshadow it
- **Subtle depth**: Use gradients and layering to create visual interest without overwhelming

### Characteristics

- Dark backgrounds with white/light text
- Subtle dark blue-purple gradients for depth and visual interest
- Simple geometric shapes
- Crisp edges and clear boundaries
- Minimal shadows (prefer gradients and borders)
- Intentional use of bright accent colors for emphasis
- Typography as a primary design element - large, bold white headlines
- Dark-themed UI screenshots and graphics

## Layout

### Grid System

Use Tailwind's default grid system for consistency.

**Container widths**:
- Small content: `max-w-2xl` (672px)
- Medium content: `max-w-4xl` (896px)
- Wide content: `max-w-6xl` (1152px)
- Full-width sections: `max-w-7xl` (1280px)

**Spacing scale**:
Favor generous spacing between sections:
- Section padding: `py-16` or `py-24` (64px or 96px) or larger for hero sections
- Element spacing: `gap-8`, `gap-12`, `gap-16`
- Inner padding: `px-6`, `px-8`, `px-16`

### Alignment

- Left-align text by default
- Center-align for hero sections and featured content
- Use consistent alignment within sections
- Align related elements to create visual relationships

### Header/Navigation

**Dark Header Pattern**:
```tsx
<header className="bg-black border-b border-zinc-800">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="text-white">Logo</div>
    
    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-8">
      <a className="text-white hover:text-zinc-400 transition-colors">Product</a>
      {/* More nav items */}
    </div>
    
    {/* CTA Buttons */}
    <div className="flex items-center gap-4">
      <button className="text-white hover:text-zinc-400">Log In</button>
      <button className="bg-accent-blue text-white px-6 py-2 rounded-full">Get Started</button>
    </div>
  </nav>
</header>
```

**Characteristics**:
- Dark background (`bg-black` or `bg-zinc-950`)
- White navigation text with hover states
- Clear separation with subtle border
- Logo on left, navigation center/left, CTAs on right
- Responsive with mobile menu

### Footer

**Dark Footer Pattern**:
```tsx
<footer className="bg-black border-t border-zinc-800 relative overflow-hidden">
  {/* Optional: Large semi-transparent logo in background */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {/* Footer columns with links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Use Cases</h3>
        <ul className="space-y-2">
          <li><a className="text-zinc-400 hover:text-white">Link</a></li>
        </ul>
      </div>
      {/* More columns */}
    </div>
  </div>
</footer>
```

**Characteristics**:
- Dark background matching header
- Multiple columns of organized links
- Light gray text (`text-zinc-400`) for links
- White text for column headers
- Can include large, semi-transparent logo in background for visual interest

## Components

### Buttons

**Primary CTA (Blue) - Dark Theme**:
```tsx
className="h-12 px-6 rounded-full bg-accent-blue text-white font-medium hover:bg-accent-blue-hover transition-colors"
```

**Primary CTA (Green) - Dark Theme**:
```tsx
className="h-12 px-6 rounded-full bg-accent-green text-white font-medium hover:bg-accent-green-hover transition-colors"
```

**Secondary Button - Dark Theme**:
```tsx
className="h-12 px-6 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-colors"
```

**Ghost/Tertiary - Dark Theme**:
```tsx
className="h-12 px-6 text-white font-medium hover:text-zinc-400 transition-colors flex items-center gap-2"
// Often includes an arrow icon
```

**Interactive Text Links with Arrows**:
```tsx
<a className="text-white hover:text-zinc-400 flex items-center gap-2 font-medium transition-colors">
  Explore Feature <ArrowRight className="w-4 h-4" />
</a>
```

**Characteristics**:
- Rounded corners (full or large radius)
- Clear hover states with smooth transitions
- Adequate padding for touch targets (minimum 44px height)
- Medium font weight for button text
- Interactive elements often include right-pointing arrows
- Bright accent colors stand out prominently on dark backgrounds

### Cards

**Basic Card - Dark Theme**:
```tsx
className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
```

**Featured Card - Dark Theme**:
```tsx
className="p-8 bg-zinc-950 rounded-xl border border-zinc-800"
```

**Card with Gradient Background**:
```tsx
className="p-8 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-zinc-900 rounded-xl border border-zinc-800"
```

**Characteristics**:
- Dark backgrounds (`bg-zinc-900` or `bg-zinc-950`)
- Subtle borders (`border-zinc-800`) for definition
- Generous padding (at least 32px)
- Minimal shadows (prefer borders and subtle gradients over heavy shadows)
- Rounded corners (medium to large radius)
- Content uses light text on dark card backgrounds

### Links

**Text Link (Blue) - Dark Theme**:
```tsx
className="text-accent-blue hover:text-accent-blue-hover underline underline-offset-2 transition-colors"
```

**Text Link (Green) - Dark Theme**:
```tsx
className="text-accent-green hover:text-accent-green-hover underline underline-offset-2 transition-colors"
```

**Navigation Link - Dark Theme**:
```tsx
className="text-white hover:text-zinc-400 transition-colors"
```

**Interactive Link with Arrow**:
```tsx
<a className="text-white hover:text-zinc-400 flex items-center gap-2 font-medium transition-colors">
  Schedule a demo <ArrowRight className="w-4 h-4" />
</a>
```

## Imagery

### UI Screenshots and Graphics

When using UI screenshots or product graphics:
- Use dark-themed UI screenshots that match the overall aesthetic
- Show overlapping windows/panels to create depth and visual interest
- Display code snippets, admin panels, and interface elements
- Maintain consistency in UI styling (dark theme throughout)
- Use screenshots that demonstrate functionality clearly

### Photography

When using photography:
- High quality, professional images only
- Prefer authentic photos over generic stock
- Use images that show people, workspaces, or real contexts
- Maintain consistent color grading that works with dark theme
- Consider dark overlays or filters to integrate with dark backgrounds

### Illustrations

If using illustrations:
- Keep them simple and geometric
- Use dark backgrounds with light/colored elements
- Line art or minimal color fills that work on dark backgrounds
- Ensure they support (not distract from) content

### Icons

**Style**:
- Outline style (not filled) or filled with appropriate colors
- Works well on dark backgrounds (white or light-colored)
- 2px stroke weight for outline style
- Rounded corners on stroke ends
- 24px default size

**Usage**:
- Use sparingly and purposefully
- Icons should clarify, not decorate
- Pair with text labels when possible (especially navigation icons)
- Maintain consistent style across all icons
- Right-pointing arrows are common for interactive elements

### Graphics and Patterns

**Acceptable uses**:
- Dark blue-purple gradient backgrounds for depth
- Subtle background patterns or textures that don't distract
- Geometric shapes as section dividers
- Gradient overlays (using dark blues and purples at low opacity)
- Abstract shapes to add visual interest
- Overlapping UI elements/screenshots with gradients behind them

**Guidelines**:
- Keep background elements subtle (10-30% opacity for gradients)
- Don't compete with primary content
- Use gradients to create depth and visual interest
- Maintain readability of overlaid text (white on dark with gradients)
- Gradients should enhance the dark aesthetic, not fight it

## Spacing and Rhythm

### Vertical Rhythm

Maintain consistent vertical spacing:
- Large sections: 64px, 96px, or 128px apart (`py-16`, `py-24`, `py-32`)
- Content blocks: 32px or 48px apart (`space-y-8`, `space-y-12`)
- Related elements: 16px or 24px apart (`space-y-4`, `space-y-6`)
- Inline elements: 8px or 12px apart (`gap-2`, `gap-3`)

### Whitespace

- Don't fear empty space - it provides visual rest
- Increase padding in sections to improve focus
- Use whitespace to group related elements
- More whitespace around important elements

## Borders and Dividers

**Border weights**:
- Standard: 1px (`border`)
- Emphasis: 2px (`border-2`)
- Strong: 3px (`border-[3px]`)

**Border colors - Dark Theme**:
- Subtle: `border-zinc-800` (dark gray on dark backgrounds)
- Default: `border-zinc-700` (medium dark gray)
- Strong: `border-white/20` (semi-transparent white for emphasis)
- Accent Blue: `border-accent-blue`
- Accent Green: `border-accent-green`

**Dividers - Dark Theme**:
- Use subtle horizontal rules: `border-t border-zinc-800`
- Or generous spacing (dark space) instead of visible dividers
- Avoid overuse - spacing often works better
- Dividers should be subtle to maintain the dark aesthetic

## Shadows and Depth

Use shadows and gradients sparingly to create subtle depth in dark theme.

**Subtle shadow** (use sparingly):
```tsx
className="shadow-lg shadow-black/50" // Very subtle elevation for cards
```

**Gradient backgrounds for depth**:
```tsx
className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"
// Creates depth behind content
```

**Avoid**:
- Heavy shadows (shadow-xl, shadow-2xl) - they don't work well on dark backgrounds
- Colored shadows
- Inner shadows in most cases

**Prefer**:
- Borders and subtle gradients over shadows
- Gradient backgrounds to create depth and visual interest
- Layering with subtle gradients behind overlapping elements
- Subtle depth over dramatic elevation

## Animations and Transitions

Keep animations subtle and purposeful.

**Standard transition**:
```tsx
className="transition-colors" // Color changes
className="transition-all" // Multiple properties
```

**Duration**: Stick to default (150ms) or medium (300ms)

**Use cases**:
- Hover states on interactive elements
- Color changes on buttons/links
- Smooth property changes
- Page transitions

**Avoid**:
- Excessive animations
- Slow animations (>500ms)
- Animations that distract from content
- Automatic animations on page load (unless subtle)

## Responsive Design

**Mobile-first approach**:
- Design for mobile, enhance for larger screens
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Stack vertically on mobile, use columns on desktop
- Reduce padding on mobile, increase on desktop

**Breakpoint strategy**:
- Mobile: Base styles (no prefix)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large desktop: `xl:` (1280px)

## Accessibility

**Visual requirements**:
- Minimum 4.5:1 contrast for normal text
- Minimum 3:1 contrast for large text and UI elements
- Clear focus indicators on interactive elements
- Don't rely on color alone to convey information
- Provide text alternatives for images and icons
- Ensure sufficient touch target sizes (44px minimum)
