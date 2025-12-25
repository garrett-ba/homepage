# Visual Style Guide

## Design Principles

### Modern Minimal

Our visual style embraces modern minimalism:

- **Generous whitespace**: Let content breathe
- **Clean layouts**: Clear hierarchy, uncluttered
- **Purposeful elements**: Every element should serve a function
- **Focus on content**: Design supports the message, doesn't overshadow it

### Characteristics

- Simple geometric shapes
- Crisp edges and clear boundaries
- Subtle shadows and depth
- Intentional use of color for emphasis
- Typography as a primary design element

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
- Section padding: `py-16` or `py-24` (64px or 96px)
- Element spacing: `gap-8`, `gap-12`, `gap-16`
- Inner padding: `px-6`, `px-8`, `px-16`

### Alignment

- Left-align text by default
- Center-align for hero sections and featured content
- Use consistent alignment within sections
- Align related elements to create visual relationships

## Components

### Buttons

**Primary CTA (Blue)**:
```tsx
className="h-12 px-6 rounded-full bg-accent-blue text-white font-medium hover:bg-accent-blue-hover transition-colors"
```

**Primary CTA (Green)**:
```tsx
className="h-12 px-6 rounded-full bg-accent-green text-white font-medium hover:bg-accent-green-hover transition-colors"
```

**Secondary Button**:
```tsx
className="h-12 px-6 rounded-full border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
```

**Ghost/Tertiary**:
```tsx
className="h-12 px-6 text-black font-medium hover:bg-zinc-50 transition-colors"
```

**Characteristics**:
- Rounded corners (full or large radius)
- Clear hover states with smooth transitions
- Adequate padding for touch targets (minimum 44px height)
- Medium font weight for button text

### Cards

**Basic Card**:
```tsx
className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-colors"
```

**Featured Card**:
```tsx
className="p-8 bg-zinc-50 rounded-xl"
```

**Characteristics**:
- Generous padding (at least 32px)
- Subtle borders or background differentiation
- Minimal shadows (prefer borders over heavy shadows)
- Rounded corners (medium to large radius)

### Links

**Text Link (Blue)**:
```tsx
className="text-accent-blue hover:text-accent-blue-hover underline underline-offset-2 transition-colors"
```

**Text Link (Green)**:
```tsx
className="text-accent-green hover:text-accent-green-hover underline underline-offset-2 transition-colors"
```

**Navigation Link**:
```tsx
className="text-black hover:text-zinc-600 transition-colors"
```

## Imagery

### Photography

When using photography:
- High quality, professional images only
- Prefer authentic photos over generic stock
- Use images that show people, workspaces, or real contexts
- Maintain consistent color grading (natural, not oversaturated)

### Illustrations

If using illustrations:
- Keep them simple and geometric
- Use monochrome with accent colors
- Line art or minimal color fills
- Ensure they support (not distract from) content

### Icons

**Style**:
- Outline style (not filled)
- 2px stroke weight
- Rounded corners on stroke ends
- 24px default size

**Usage**:
- Use sparingly and purposefully
- Icons should clarify, not decorate
- Pair with text labels when possible
- Maintain consistent style across all icons

### Graphics and Patterns

**Acceptable uses**:
- Subtle background patterns or textures
- Geometric shapes as section dividers
- Gradient overlays (using accent colors)
- Abstract shapes to add visual interest

**Guidelines**:
- Keep background elements subtle (10-20% opacity)
- Don't compete with primary content
- Use accent colors sparingly
- Maintain readability of overlaid text

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

**Border colors**:
- Subtle: `border-zinc-200` (light gray)
- Default: `border-zinc-300` (medium gray)
- Strong: `border-black` (for emphasis)
- Accent Blue: `border-accent-blue`
- Accent Green: `border-accent-green`

**Dividers**:
- Use subtle horizontal rules: `border-t border-zinc-200`
- Or generous whitespace instead of visible dividers
- Avoid overuse - whitespace often works better

## Shadows and Depth

Use shadows sparingly in a minimal design.

**Subtle shadow**:
```tsx
className="shadow-sm" // Subtle elevation for cards
```

**Medium shadow**:
```tsx
className="shadow-md" // Dropdowns, modals
```

**Avoid**:
- Heavy shadows (shadow-xl, shadow-2xl)
- Colored shadows
- Inner shadows in most cases

**Prefer**:
- Borders over shadows when possible
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
