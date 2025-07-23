# Rewards UI

A modern frontend built with **Next.js** and **pnpm**, designed to consume the Rewards API and render a fast, responsive redemption experience.

---

## Prerequisites

- Node.js 18+ (or v22 for long-term support)
- [Corepack](https://nodejs.org/api/corepack.html) (comes with Node.js ≥ 16.10)

Enable `pnpm`:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

---

## Installation

1. Install dependencies:
```bash
pnpm install
```
2. Set environment variables:
Copy .env.example to .env:
```bash
cp .env.example .env
```
3. Run the dev server
```bash
pnpm dev
```
The app will be available at http://localhost:4000.

---

## Production Build
```bash
pnpm build
pnpm start
```

## Linting
```bash
pnpm lint
```