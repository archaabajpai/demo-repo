# Demo App — Next.js Login Application

A modern Next.js application with a login page, built with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Testing:** Playwright (end-to-end)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── login/
│   │       └── route.ts        # Login API endpoint
│   ├── login/
│   │   └── page.tsx            # Login page (client component)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Root — redirects to /login
e2e/
└── login.spec.ts               # Playwright e2e tests
playwright.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn

### Installation

```bash
yarn install
```

### Development

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to the login page.

### Demo Credentials

| Email              | Password      |
| ------------------ | ------------- |
| user@example.com   | password123   |

### Running E2E Tests

Install Playwright browsers (first time only):

```bash
npx playwright install --with-deps chromium
```

Run tests:

```bash
yarn run test:e2e
```

Run tests with UI:

```bash
yarn run test:e2e:ui
```

## Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `yarn run dev`       | Start development server       |
| `yarn run build`     | Build for production           |
| `yarn run start`     | Start production server        |
| `yarn run lint`      | Run ESLint                     |
| `yarn run test:e2e`  | Run Playwright e2e tests       |
