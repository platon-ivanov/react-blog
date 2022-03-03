# React blog

This repository includes the source code for the website [diana-kassil-ivanova.ru](https://diana-kassil-ivanova.ru/).

## Tasks ✅

### Design 👀

The website should have:

- A simple, modern, responsive design
- Tasteful animations

#### Solution 💡

I decided to use a beige color scheme with glass elements to it. Subtle animations enhance the floaty look of the components. The theme is highly flexible and new elements can easily be added.

### Article system 📃

The articles should:

- Be tied to URLs
- Have custom components
  - Quotes
  - Videos
  - Images
  - Turning images

#### Solution 💡

The articles reside in a separate [**articles** folder](https://github.com/platon-ivanov/react-blog/tree/master/src/articles). The articles are JavaScript objects fetched for rendering.

Articles include:

- **URL** where it should be accessed
- **Title** of the article
- **Short description** of the article
- **Content** in JSX using custom components.
- **Cover** image (optional)

### Documentation

The components should be documented in a list. The simplest way to achieve this was by using [better-docs](https://github.com/SoftwareBrothers/better-docs).
The component documentation can be found [here](https://platon-ivanov.github.io/react-blog/).

## Tools 🔧

- [React](https://reactjs.org/) with [Typescript](https://www.typescriptlang.org/).
- [Vite](https://github.com/vitejs/vite) for faster development.
- [Tailwind CSS](https://tailwindcss.com/) for styling components.
- [SCSS](https://sass-lang.com/documentation/syntax) for more complicated styles.
- [better-docs](https://github.com/SoftwareBrothers/better-docs) for documentation.
