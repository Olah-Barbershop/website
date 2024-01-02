# website

The official website for Oláh Barbershop, available [here](https://web.olahbarbershop.codes), hosted by GitHub Pages

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

Prices page:
- Pretty self-explanatory

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
