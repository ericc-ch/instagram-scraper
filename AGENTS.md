# Agent Guidelines

## Commands
- **Build**: `bun run build` (outputs to dist/instagram-scraper.user.js)
- **Dev**: `bun run dev` (watch mode + serve)
- **Typecheck**: `bun run typecheck`
- **No test framework configured**

## Code Style
- **Runtime**: Bun with TypeScript
- **Target**: Browser (userscript for socialblade.com)
- **Imports**: Use `type` imports for types only (e.g., `import type { Fiber } from "./types"`)
- **Types**: Strict TypeScript enabled with all strict flags (noUnusedLocals, noUnusedParameters, exactOptionalPropertyTypes)
- **Naming**: camelCase for variables/functions, PascalCase for types/interfaces
- **Error Handling**: Use `throw new Error()` for critical failures, `console.error()` for non-critical
- **Formatting**: 2-space indentation, no trailing commas in single-line objects
- **Module System**: ESNext with `verbatimModuleSyntax` enabled
- **Dependencies**: Minimal - only use `tiny-invariant` (already included)

## Project Context
UserScript that extracts Instagram metrics by accessing React Fiber internals on SocialBlade pages.
