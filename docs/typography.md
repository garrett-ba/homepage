# Typography

## Typefaces

### Geist Sans (Primary)

Our primary typeface for all UI and content. Geist Sans is modern, highly legible, and works well at all sizes.

**Usage**:
- Body text
- Headlines
- UI elements
- Navigation

**CSS Variable**: `var(--font-geist-sans)`

**Tailwind**: Applied via `font-sans` (default) or by using the variable class

### Geist Mono (Secondary)

Our monospace typeface for code, technical content, and specific UI accents.

**Usage**:
- Code blocks and inline code
- Technical specifications
- Data displays (numbers, metrics)
- Occasional UI accents for technical emphasis

**CSS Variable**: `var(--font-geist-mono)`

**Tailwind**: Applied via `font-mono`

## Type Scale

Use a clear, hierarchical type scale for consistency.

### Headlines

**On Dark Backgrounds (Primary)**:
```tsx
// H1 - Page titles, hero headlines (Large, bold white text)
className="text-6xl md:text-7xl font-bold tracking-tight text-white"
// 60px/72px, bold, tight letter spacing, white text

// H2 - Major section headers
className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
// 36px/48px, semi-bold, tight letter spacing, white text

// H3 - Subsection headers
className="text-3xl font-semibold tracking-tight text-white"
// 30px, semi-bold, tight letter spacing, white text

// H4 - Minor headers
className="text-2xl font-semibold text-white"
// 24px, semi-bold, white text

// H5 - Small headers
className="text-xl font-semibold text-white"
// 20px, semi-bold, white text
```

**On Light Backgrounds (When Needed)**:
```tsx
// H1 - Page titles, hero headlines
className="text-5xl font-semibold tracking-tight text-black"
// 48px, semi-bold, tight letter spacing

// H2 - Major section headers
className="text-4xl font-semibold tracking-tight text-black"
// 36px, semi-bold, tight letter spacing
```

### Body Text

**On Dark Backgrounds (Primary)**:
```tsx
// Large body - Introductory text, important paragraphs
className="text-lg leading-8 text-zinc-400"
// 18px, line-height 32px, light gray text

// Default body - Standard content
className="text-base leading-7 text-zinc-400"
// 16px, line-height 28px, light gray text

// Small text - Captions, labels, secondary info
className="text-sm leading-6 text-zinc-500"
// 14px, line-height 24px, medium gray text

// Extra small - Fine print, metadata
className="text-xs leading-5 text-zinc-500"
// 12px, line-height 20px, medium gray text
```

**On Light Backgrounds (When Needed)**:
```tsx
// Large body - Introductory text, important paragraphs
className="text-lg leading-8 text-zinc-600"
// 18px, line-height 32px

// Default body - Standard content
className="text-base leading-7 text-black"
// 16px, line-height 28px
```

### Special Text

```tsx
// Code inline
className="font-mono text-sm"

// Code blocks
className="font-mono text-sm leading-6"

// Labels/Tags
className="text-sm font-medium uppercase tracking-wide"
// 14px, medium weight, uppercase, wide letter spacing
```

## Font Weights

Limit font weights for consistency:

- **Regular (400)**: Default for body text - `font-normal`
- **Medium (500)**: Labels, UI elements - `font-medium`
- **Semibold (600)**: Headers, emphasis - `font-semibold`

Avoid using light or bold weights - the above three provide sufficient hierarchy.

## Typography Guidelines

### Line Length

- **Optimal**: 60-80 characters per line
- Use max-width constraints: `max-w-2xl` (672px) or `max-w-3xl` (768px)

### Line Height

- **Headlines**: Tighter leading (1.1-1.2) - use `leading-tight`
- **Body text**: Comfortable leading (1.6-1.8) - use `leading-7` or `leading-8`

### Letter Spacing

- **Headlines**: Tight tracking - use `tracking-tight`
- **Body text**: Default tracking (no class needed)
- **Labels/UI**: Wide tracking for small uppercase text - use `tracking-wide`

### Text Color (Dark Theme - Primary)

- **Primary content/Headlines**: `text-white` - Large, bold white headlines are the primary element
- **Body text**: `text-zinc-400` - Secondary text in lighter gray for readability on dark backgrounds
- **Muted content**: `text-zinc-500` - Tertiary text for de-emphasized content
- **Navigation/UI text**: `text-white hover:text-zinc-400` - White with lighter gray on hover
- **Accent links (Blue)**: `text-accent-blue hover:text-accent-blue-hover`
- **Accent links (Green)**: `text-accent-green hover:text-accent-green-hover`

### Text Color (Light Theme - When Needed)

For sections that use light backgrounds:
- **Primary content**: `text-black`
- **Secondary content**: `text-zinc-600`
- **Muted content**: `text-zinc-400`

### Alignment

- **Left-align by default** - most readable for multi-line text
- **Center-align** for hero sections and short, impactful statements
- Avoid justified text

## Accessibility

- Maintain minimum 16px base font size for body text
- Ensure sufficient contrast (see color-palette.md)
- Use semantic HTML (`h1`, `h2`, `p`, etc.)
- Don't rely on color alone to convey meaning
