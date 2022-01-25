# marcusyqy.github.io

Portfolio website creation

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Deploying/Publishing

You have to first run the building step to deploy using this command

```bash
npm run deploy
```

Or alternatively run publishing command to build + publish

```bash
npm run publish
```

## Automated actions.

By default, pushing to master will lead to a publish onto the site.

> details are in ".github/workflow/publish.yml"

Guide to publishing [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages)
