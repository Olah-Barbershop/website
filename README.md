<p align="center">
    <img src="https://raw.githubusercontent.com/Olah-Barbershop/website/master/src/lib/assets/icon.png" alt="Logo" width="150">
    <h1 align="center">Oláh Barbershop website</h1>
</p>

#### The official website for Oláh Barbershop, built using [SvelteKit](https://kit.svelte.dev), hosted by [GitHub Pages](https://pages.github.com)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) &nbsp;
[![GitHub Release](https://img.shields.io/github/v/release/Olah-Barbershop/website)](https://github.com/Olah-Barbershop/website/releases/latest) &nbsp;
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Olah-Barbershop/website/deploy.yml)](https://github.com/Olah-Barbershop/website/actions) &nbsp;
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fweb.olahbarbershop.codes)](https://web.olahbarbershop.codes)

# Bugs and feature requests
Create an [issue](https://github.com/Olah-Barbershop/website/issues/new/choose), or open a [pull request](https://github.com/Olah-Barbershop/website/pulls)

# Content, features
General:
- Simple wave animation at the bottom to give it some life

Home page:
- A kind of intro message, since I had no idea what to put here

Contact page:
- All the ways to reach, follow, and interact with us

Services page:
- What we offer

Locations page:
- Our locations listed in a nice, modular format

About page:
- The *About us* section. Nothing special

# Running / Building locally
```sh
git clone https://github.com/Olah-Barbershop/website
cd website
pnpm install
```

### OPTIONAL: The default API URL is "https://olahbarbershop.codes"; however, this can be changed

#### In the `.env` file, create the `VITE_BASE_URL` variable
```env
VITE_BASE_URL=[the base URL of your API instance]
```

## Running
```sh
pnpm dev --open
```

## Building
```sh
pnpm build
pnpm preview --open
```

**IMPORTANT** If you're building the site and **not** serving it from your root directory, add the absolute path that your build is served from to a `.env` file, e.g. "/website" if you're serving from example.com/website
```env
BASE_PATH=[your path]
```
