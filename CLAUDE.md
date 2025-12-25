# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router, React 19, TypeScript, and Tailwind CSS v4. The project uses pnpm as the package manager.

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
