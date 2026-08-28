# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts the local test server in the background   |
| `npm run dev:status`      | Shows the local server status and URL            |
| `npm run dev:logs`        | Shows the local server logs                      |
| `npm run dev:stop`        | Stops the local server                           |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run build:test`      | Builds locally without the GitHub Pages base URL |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

`npm run dev` sets `TEST_BUILD=true`, so the website is served directly at
`http://localhost:4321/` and updates automatically as files change. Production
builds do not set this variable and keep the `/wedding-site/` GitHub Pages base
path. Committing and pushing is only required when you want to update the public
GitHub Pages website.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
