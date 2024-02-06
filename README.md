<div align="center">

<h1> SpaceX Launches</h1>

</div>

## Running the project

Install dependencies:

```bash
pnpm install
```

Run the NextJS dev server:

```bash
pnpm dev
```

Go to http://localhost:3000

## [Backend (API)](./src/pages/api)

API routes are served by NextJS HTTP router based on handlers' file paths:

### [`GET /api/launches/past`](./src/pages/api/launches/past.ts)

Fetches past SpaceX launches

### [`GET /api/launches/upcoming`](./src/pages/api/launches/upcoming.ts)

Fetches upcoming SpaceX launches

### [`GET /api/launches/latest`](./src/pages/api/launches/latest.ts)

Fetches latest SpaceX launch

### [`GET /api/launches/next`](./src/pages/api/launches/next.ts)

Fetches next SpaceX launch

## [Frontend](./src/pages/index.tsx)

It displays the past and upcoming launches from the API