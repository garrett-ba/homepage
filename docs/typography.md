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

```tsx
// H1 - Page titles, hero headlines
className="text-5xl font-semibold tracking-tight"
// 48px, semi-bold, tight letter spacing

// H2 - Major section headers
className="text-4xl font-semibold tracking-tight"
// 36px, semi-bold, tight letter spacing

// H3 - Subsection headers
className="text-3xl font-semibold tracking-tight"
// 30px, semi-bold, tight letter spacing

// H4 - Minor headers
className="text-2xl font-semibold"
// 24px, semi-bold

// H5 - Small headers
className="text-xl font-semibold"
// 20px, semi-bold
```

### Body Text

```tsx
// Large body - Introductory text, important paragraphs
className="text-lg leading-8"
// 18px, line-height 32px

// Default body - Standard content
className="text-base leading-7"
// 16px, line-height 28px

// Small text - Captions, labels, secondary info
className="text-sm leading-6"
// 14px, line-height 24px

// Extra small - Fine print, metadata
className="text-xs leading-5"
// 12px, line-height 20px
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

### Text Color

- **Primary content**: `text-black dark:text-zinc-50`
- **Secondary content**: `text-zinc-600 dark:text-zinc-400`
- **Muted content**: `text-zinc-400 dark:text-zinc-500`
- **Accent links (Blue)**: `text-accent-blue hover:text-accent-blue-hover`
- **Accent links (Green)**: `text-accent-green hover:text-accent-green-hover`

### Alignment

- **Left-align by default** - most readable for multi-line text
- **Center-align** for hero sections and short, impactful statements
- Avoid justified text

## Accessibility

- Maintain minimum 16px base font size for body text
- Ensure sufficient contrast (see color-palette.md)
- Use semantic HTML (`h1`, `h2`, `p`, etc.)
- Don't rely on color alone to convey meaning
