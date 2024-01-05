<p align="center">
    <img src="https://raw.githubusercontent.com/Olah-Barbershop/website/master/src/lib/assets/icon.png" alt="Logo" width="150">
    <h1 align="center">Oláh Barbershop website</h1>
</p>

#### The official website for Oláh Barbershop, built using SvelteKit, hosted by [GitHub Pages](https://web.olahbarbershop.codes)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Olah-Barbershop/website/deploy.yml)](https://github.com/Olah-Barbershop/website/actions)
[![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Olah-Barbershop/website/dev/%40sveltejs/kit/master)](https://www.npmjs.com/package/@sveltejs/kit)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fweb.olahbarbershop.codes)


# Bugs and feature requests
Either create an [issue](https://github.com/Olah-Barbershop/website/issues/new/choose), or a [pull request](https://github.com/Olah-Barbershop/website/pulls)

# Content, features
General:
- Responsive Web Design, or RWD for short. If something's not responsive, refer to the [Bugs and feature requests](#bugs-and-feature-requests) section.
- General wave animation at the bottom to give it some life

Home page:
- A placeholder for now (Neumorphism. Nice. Useless, but nice.)

Contacts page:
- Won't be changing any time soon
- Maybe I should add our [Threads](https://threads.net/@olahbarbershop). I'll think about it

Services page:
- What we offer

Locations page (Coming soon):
- Our locations listed in a nice, modular format

# Running, building

First, clone the site
```sh
git clone https://github.com/Olah-Barbershop/website
cd website
```

Next, install the dependencies (assuming you have Node.js>=18 installed)
```sh
npm install
```

Now, you can either run the site in development mode
```sh
npm run dev -- --open 
```

Or build it into a static site
```sh
npm run build
```

And preview it in your browser
```sh
npm run preview -- --open
```

**IMPORTANT** If you're building the site, and **not** serving it from your root directory, you must create a `.env` file before building and add the absolute path that your build is served from, e.g. "/website" if you're serving from example.com/website
```env
BASE_PATH=<Your path>
```
