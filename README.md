# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy To Netlify

This project is configured for static deployment on Netlify via [netlify.toml](netlify.toml).

### Netlify build settings

- Build command: `npm run build`
- Publish directory: `.output/public`
- Node version: `20`

### Deploy steps

1. Push this repository to GitHub.
2. In Netlify, create a new site from that GitHub repository.
3. Keep the default settings (Netlify will read `netlify.toml`).
4. Deploy.
