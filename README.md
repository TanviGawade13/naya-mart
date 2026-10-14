# NayaMart

A learning-first, multi-seller marketplace built with MongoDB, Express, React, and Node.js.

## Prerequisites

- Node.js 20.19+ (or 22.12+) and npm
- MongoDB is optional in Phase 1. Later phases will use it for application data.

## Run the app

1. Install dependencies from the project root:

   ```sh
   npm install
   ```

2. Copy `server/.env.example` to `server/.env`. Leave `MONGODB_URI` blank to run Phase 1 without MongoDB; set it to your local or hosted MongoDB connection string when the database is available.

3. Start the API and React development server together:

   ```sh
   npm run dev
   ```

4. Open the URL printed by Vite (normally `http://localhost:5173`). The API runs at `http://localhost:5000`; the React development server proxies `/api` requests to it.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the API and web app together |
| `npm run build` | Build the React app for production |
| `npm run lint` | Check the React client |
| `npm start` | Start the API |

## Phase 1 API

- `GET /api/health` — returns the API status and MongoDB connection state.

The client calls this endpoint through Vite's `/api` proxy. This keeps local development simple without hardcoding a separate API URL in React.

## Learning roadmap

1. Project foundation
2. Customer, seller, and admin identity and access
3. Seller catalog and marketplace data
4. Customer storefront
5. Cart and mock checkout
6. Multi-seller order flows
7. Admin operations
8. Quality, polish, and delivery

Each phase is intended to be runnable and explained before moving to the next.
