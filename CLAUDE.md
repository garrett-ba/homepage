# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project uses pnpm as the package manager.

**Website Purpose**: This is the homepage for a software development agency that builds tools and software for small- to medium-sized businesses.

## Brand & Design Guidelines

Comprehensive branding and design documentation is located in the `docs/` folder. **Always reference these guidelines when building pages or components.**

### Quick Reference

- **Visual Style**: Modern minimal - clean, spacious, content-focused
- **Color Palette**: Monochrome base (black/white) with bright blue (#0066FF) and green (#00D084) accents
- **Typography**: Geist Sans (primary), Geist Mono (code/technical)
- **Voice & Tone**: Approachable and clear - avoid jargon, write conversationally

### Documentation Files

- `docs/brand-identity.md` - Brand positioning and values
- `docs/color-palette.md` - Complete color system with Tailwind classes
- `docs/typography.md` - Type scale, weights, and formatting
- `docs/voice-and-tone.md` - Writing guidelines and messaging frameworks
- `docs/visual-style.md` - Layout patterns, components, spacing, and animations

### Design Workflow

When creating new pages or components:
1. Reference `visual-style.md` for layout and component patterns
2. Use colors from `color-palette.md` (don't introduce new colors)
3. Follow typography hierarchy from `typography.md`
4. Write copy following `voice-and-tone.md` guidelines

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

### Next.js App Router Structure

- **app/**: Contains all routes and layouts using the App Router convention
  - `layout.tsx`: Root layout with Geist font configuration and metadata
  - `page.tsx`: Home page component
  - `globals.css`: Global styles and Tailwind directives

### TypeScript Configuration

- **Path alias**: `@/*` maps to the root directory for imports
- **Target**: ES2017 with strict mode enabled
- **Module resolution**: Bundler mode (optimized for Next.js)

### Styling

- **Tailwind CSS v4** via PostCSS plugin (`@tailwindcss/postcss`)
- Configuration in `postcss.config.mjs`
- Global styles in `app/globals.css`
- Dark mode support using the `dark:` prefix

### Fonts

The project uses Next.js font optimization with:
- **Geist Sans** (variable font: `--font-geist-sans`)
- **Geist Mono** (variable font: `--font-geist-mono`)

Both fonts are loaded from Google Fonts and configured in `app/layout.tsx`.

### ESLint Configuration

Uses Next.js recommended ESLint configs:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Configured in `eslint.config.mjs` using the flat config format.

## Package Manager

This project uses **pnpm** with a workspace configuration (`pnpm-workspace.yaml`). Always use `pnpm` commands instead of `npm` or `yarn`.

## File Naming Conventions

- React components: `.tsx` extension
- Configuration files: `.ts` or `.mjs` extensions
- Use lowercase with hyphens for static assets in `public/`
