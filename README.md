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


## Steps to Set Up the Project

### 1. Initialize a Next.js Project with TypeScript and React
```bash
npx create-next-app Spacexapi --typescript
cd Spacexapi
```

### 2. Install Dependencies
```bash
pnpm install
```
### 3. Configure ESLint for TypeScript
```bash
pnpm install eslint eslint-config-next eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### 4. Set Up Axios for API Requests
```bash
pnpm install axios
```

### 5. Integrate Zod for Type Checking
```bash
pnpm install zod
```

### 6. Add Cypress for End-to-End Testing
```bash
pnpm install cypress --save-dev
pnpm run cypress open
```

### 7. Start the TypeScript Development Server with React
```bash
pnpm dev
```


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

It displays the past and upcoming launches from the API with a search bar.

