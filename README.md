# West Tech Fest 2026 — Official Website

> **Australia's Biggest & Longest Running Tech & Innovation Festival**
> Perth + Fremantle, Western Australia | 7–11 December 2026

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-F56565)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-Private-red)](./LICENSE)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Component Architecture](#component-architecture)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

The **West Tech Fest 2026** website is the official digital presence for Western Australia's flagship technology and innovation festival. The platform showcases six headline events, 22+ partner organisations, a full speaker lineup, satellite events, and a unified festival pass — all designed with a dark-first, performance-oriented UI.

Built as a modern single-page application (SPA) with React and Vite, the site is fully responsive across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (320px+) viewports.

---

## Features

- **Multi-page SPA** with client-side routing via React Router v7
- **Hero Section** — Full-bleed background video/image with animated CTA buttons and a stats bar
- **Festival Pass** — Grid of 6 headline events with dark/light card variants and CTA panel
- **Speakers** — Full listing page with individual speaker detail pages (bio, social links, topics)
- **Events** — Filterable program listing with week calendar view and satellite events
- **Satellite Events** — Dedicated listing for city-wide community events
- **Partners** — Tiered partner showcase (Principal, Premier, Community) with logo grid
- **About** — Festival story, objectives, team directory (Founders, Organising Committee, Festival Team)
- **Newsletter** — Email capture section with dark-themed form
- **Responsive Design** — Fluid layouts from 320px to 1440px+, with a mobile hamburger navigation
- **Dark & Light Themes** — CSS custom property–driven theming for both dark canvas and light surface sections
- **Particle Background** — Canvas-based decorative particle animation on the hero
- **SEO Ready** — Semantic HTML5 with proper heading hierarchy and meta structure

---

## Tech Stack

| Category        | Technology                             |
|-----------------|----------------------------------------|
| UI Framework    | React 19                               |
| Build Tool      | Vite 8                                 |
| Routing         | React Router DOM v7                    |
| Icons           | Lucide React                           |
| Styling         | Vanilla CSS (component-scoped files)   |
| Linting         | Oxlint                                 |
| Fonts           | Inter + Roboto Mono (Google Fonts CDN) |
| Asset Hosting   | Vercel Blob Storage                    |

---

## Project Structure

```
westtechfest/
├── public/                        # Static public assets
├── src/
│   ├── assets/                    # Local image/SVG assets
│   ├── components/                # Reusable UI components
│   │   ├── Header.jsx             # Global navigation header (desktop + mobile menu)
│   │   ├── Header.css
│   │   ├── Hero.jsx               # Homepage hero section + stats bar + banner video
│   │   ├── Hero.css
│   │   ├── FestivalPass.jsx       # Six headline event cards + CTA panel
│   │   ├── FestivalPass.css
│   │   ├── Speakers.jsx           # Homepage speaker teaser grid
│   │   ├── Speakers.css
│   │   ├── SatelliteEvents.jsx    # Homepage satellite events teaser
│   │   ├── SatelliteEvents.css
│   │   ├── Partners.jsx           # Partner logo grid (tiered)
│   │   ├── Partners.css
│   │   ├── Newsletter.jsx         # Email signup section
│   │   ├── Newsletter.css
│   │   ├── Footer.jsx             # Global footer with nav + legal
│   │   ├── Footer.css
│   │   ├── ParticleBackground.jsx # Canvas particle animation
│   │   ├── about/                 # About page sub-components
│   │   │   ├── AboutHero.jsx
│   │   │   ├── AboutStory.jsx
│   │   │   ├── AboutObjectives.jsx
│   │   │   ├── AboutStats.jsx
│   │   │   └── AboutTeam.jsx
│   │   ├── events/                # Events page sub-components
│   │   │   ├── EventsHero.jsx
│   │   │   ├── TheWeek.jsx
│   │   │   ├── HeadlineEvents.jsx
│   │   │   ├── FestivalPassTable.jsx
│   │   │   ├── SatelliteEventsSection.jsx
│   │   │   ├── ScheduleBanner.jsx
│   │   │   └── Events.css
│   │   ├── satellite/             # Satellite events sub-components
│   │   │   ├── SatelliteHero.jsx
│   │   │   ├── SatelliteFilters.jsx
│   │   │   ├── SatelliteGrid.jsx
│   │   │   └── SatelliteEventCard.jsx
│   │   └── speakers/              # Speakers sub-components
│   │       ├── SpeakersHero.jsx
│   │       ├── SpeakersGrid.jsx
│   │       ├── SpeakerCard.jsx
│   │       └── SpeakersBottomBanner.jsx
│   ├── data/
│   │   └── speakersData.js        # Static speaker dataset
│   ├── pages/                     # Page-level entry components
│   │   ├── AboutPage.jsx          # /about
│   │   ├── About.css
│   │   ├── Events.jsx             # /events
│   │   ├── EventDetailPage.jsx    # /satellite-events/:slug
│   │   ├── EventDetail.css
│   │   ├── SatelliteEventsPage.jsx # /satellite-events
│   │   ├── SatelliteEvents.css
│   │   ├── SpeakersPage.jsx       # /speakers
│   │   ├── Speakers.css
│   │   ├── SpeakerDetailPage.jsx  # /speakers/:slug
│   │   └── SpeakerDetail.css
│   ├── App.jsx                    # Root app with route definitions
│   ├── App.css
│   ├── index.css                  # Global styles, CSS variables, utility classes
│   └── main.jsx                   # React DOM entry point
├── .gitignore
├── index.html                     # Vite HTML entry
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure the following are installed on your machine:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x (bundled with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SocialOrangeGlobal/westtechfest.git
   cd westtechfest
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

---

## Available Scripts

| Command           | Description                                           |
|-------------------|-------------------------------------------------------|
| `npm run dev`     | Start local dev server with HMR at `localhost:5173`   |
| `npm run build`   | Build optimised production bundle into `dist/`        |
| `npm run preview` | Serve production build locally for QA                 |
| `npm run lint`    | Run Oxlint static analysis across the codebase        |

---

## Pages & Routes

| Route                          | Page Component         | Description                                      |
|-------------------------------|------------------------|--------------------------------------------------|
| `/`                           | `App.jsx` (Homepage)   | Hero, Festival Pass, Speakers, Satellite Events, Partners, Newsletter |
| `/events`                     | `Events.jsx`           | Full program listing with week view              |
| `/satellite-events`           | `SatelliteEventsPage`  | City-wide satellite events listing               |
| `/satellite-events/:slug`     | `EventDetailPage`      | Individual event detail with map & info          |
| `/speakers`                   | `SpeakersPage`         | Full speaker grid listing                        |
| `/speakers/:slug`             | `SpeakerDetailPage`    | Individual speaker bio & topics                  |
| `/about`                      | `AboutPage`            | Festival story, team, objectives & stats         |

---

## Component Architecture

The project follows a **feature-based component decomposition** pattern:

- **Global components** (`src/components/`) — Header, Footer, Hero, Partners, etc. Used across all routes.
- **Feature sub-components** (`src/components/events/`, `speakers/`, etc.) — Composable components rendered by their parent page.
- **Page entry components** (`src/pages/`) — Thin orchestration components that import and compose feature sub-components.

Data is currently co-located in `src/data/speakersData.js` as a static JS module. This can be migrated to an API layer as the project scales.

---

## Design System

All design tokens are defined in `src/index.css` as CSS custom properties:

```css
:root {
  /* Backgrounds */
  --bg-canvas-dark:   #000000;
  --bg-surface-dark:  #111111;
  --bg-canvas-light:  #f9f9f9;
  --bg-surface-light: #ffffff;

  /* Typography */
  --text-white:    #ffffff;
  --text-black:    #000000;
  --text-secondary: #d1d5db;
  --text-tertiary:  #9ca3af;

  /* Accent (brand orange) */
  --accent-solid:  #f15a32;
  --accent-from:   #c94a28;
  --accent-to:     #ff9a4d;
  --accent-text:   #ff7a3c;

  /* Borders */
  --border-line:        rgba(255, 255, 255, 0.15);
  --border-line-strong: rgba(255, 255, 255, 0.3);
  --border-line-light:  rgba(0, 0, 0, 0.1);

  /* Gradient */
  --bg-gradient-brand: linear-gradient(105deg, #c94a28, #f15a32, #ff7a3c, #ff9a4d);
}
```

**Typography:**
- Primary: `Inter` (body, headings)
- Monospace: `Roboto Mono` (labels, tags, CTAs)

**Responsive Breakpoints:**
| Breakpoint | Width     | Target Device          |
|-----------|-----------|------------------------|
| Desktop   | ≥ 1024px  | Laptops & Desktops     |
| Tablet    | ≤ 1024px  | iPads & Landscape Phone|
| Mobile    | ≤ 768px   | Smartphones            |
| XS Mobile | ≤ 480px   | iPhone SE, Galaxy mini |

---

## Contributing

This is a private repository for **Social Orange Global**. For internal contributors:

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes with clear, atomic commits:
   ```bash
   git commit -m "feat: add speaker detail modal"
   ```

3. Push and open a Pull Request for code review:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix     | Use For                                   |
|------------|-------------------------------------------|
| `feat:`    | New features                              |
| `fix:`     | Bug fixes                                 |
| `style:`   | CSS / styling changes (no logic change)   |
| `refactor:`| Code restructuring without feature change |
| `chore:`   | Build config, dependency updates          |
| `docs:`    | README, comments, documentation           |

---

## License

This project is **private and proprietary**. All rights reserved © 2026 Social Orange Global / West Tech Fest.

Unauthorised copying, distribution, or use of this codebase without explicit written permission is prohibited.
