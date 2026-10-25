# Portfolio

[![Deploy to GitHub Pages](https://github.com/daveryde/daveryde.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/daveryde/daveryde.github.io/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/badge/Live%20Site-davidcordova.dev-blue?style=flat&logo=googlechrome)](https://davidcordova.dev)
[![Vite](https://img.shields.io/badge/Bundler-Vite%20v8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React%2017-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Personal engineering portfolio and project showcase hosted at [davidcordova.dev](https://davidcordova.dev). Built with React and TypeScript, bundled with Vite, and deployed automatically to GitHub Pages using GitHub Actions.

---

## 🛠 Tech Stack

- **Framework & Runtime:** React 17, TypeScript
- **Tooling & Bundler:** Vite 8 (`@vitejs/plugin-react`)
- **Styling:** Styled Components (`styled-components`), Ghost UI (`@makotot/ghostui`)
- **Icons & Routing:** `react-icons`, `react-router-dom`
- **Analytics:** `react-ga`
- **CI/CD & Hosting:** GitHub Actions (`deploy.yml`) -> GitHub Pages (Custom Domain)

---

## 📁 Repository Structure

```text
daveryde.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated CI/CD build & deployment pipeline
├── public/
│   ├── CNAME                 # Custom domain root binding (davidcordova.dev)
│   ├── manifest.json
│   ├── preview.png
│   └── robots.txt
├── src/
│   ├── assets/               # Screenshots, diagrams, and project media
│   ├── components/           # Reusable UI components & layouts
│   ├── data/                 # Project, role, and career datasets
│   ├── pages/                # Route views and page components
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Helper functions and utilities
│   ├── App.tsx               # Main application component
│   └── index.tsx             # Application entry point
├── index.html                # Vite HTML entry point
├── package.json
├── tsconfig.json
└── vite.config.ts            # Vite build, server, and plugin configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js:** v20+ recommended
- **npm:** v9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daveryde/daveryde.github.io.git
   cd daveryde.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server at `http://localhost:3000`:

```bash
npm start
```

### Production Build

Run TypeScript type checks and compile optimized static assets into `./build`:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```

---

## 🔄 CI/CD & Deployment

Continuous deployment is fully automated via GitHub Actions:

1. **Trigger:** Every `git push` to `master` (or manual trigger via `workflow_dispatch`).
2. **Workflow Lifecycle:**
   - Checks out the repository source.
   - Sets up Node.js with automated npm package caching.
   - Installs production and dev dependencies with `npm ci`.
   - Compiles TypeScript and runs `vite build` into the `./build` folder.
   - Uploads `./build` (including `build/CNAME` and `build/.nojekyll`) as the Pages artifact.
   - Deploys the static assets directly to GitHub Pages.
3. **Custom Domain:** GitHub Pages resolves the `CNAME` artifact file and binds the live site directly to [https://davidcordova.dev](https://davidcordova.dev).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).