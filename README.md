# Aung Myint Myat - Personal Website

Professional website for a cybersecurity professional specializing in Security Engineering, Defense Operations, and Process Optimization.

Built with [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Features

- **Blog**: Cybersecurity insights, technical write-ups, and professional thoughts
- **Projects**: Showcase of security engineering projects and tools
- **Contributions**: Talks, presentations, and conference contributions
- **Hobbies**: Personal interests, vlogs, notes, and articles
- **Material Design Theme**: Professional blue-grey color scheme with dark mode support
- **Monospace Fonts**: Technical aesthetic with JetBrains Mono

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

Manual deployment:
```bash
npm run deploy
```

## Project Structure

```
.
├── blog/                  # Blog posts in markdown
├── src/
│   ├── components/        # React components
│   ├── css/              # Global styles
│   └── pages/            # Custom pages (Projects, Contributions, Hobbies)
├── static/               # Static assets
│   └── CNAME             # Custom domain configuration
├── docusaurus.config.ts  # Site configuration
└── package.json          # Dependencies
```

## Monorepo Compatibility

This project is structured to be compatible with monorepo setups. All dependencies are managed through npm and the project can be integrated into a larger monorepo structure.

## Custom Domain

Configured for: **aungmmtech.info**

## License

© 2025 Aung Myint Myat. All rights reserved.
