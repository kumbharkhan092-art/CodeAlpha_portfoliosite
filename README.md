# Portfolio — Code Editor Theme

A personal portfolio site styled like a code editor, complete with a fake titlebar, file tabs, and a syntax-highlighted "about me" snippet. Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools.

## Features

- **Editor-inspired UI** — macOS-style titlebar dots and a row of file tabs (`hero.jsx`, `about.js`, `skills.json`, `projects.js`, `contact.js`) that double as section navigation
- **Scroll-spy navigation** — the active tab updates automatically as you scroll, powered by `IntersectionObserver`
- **Syntax-highlighted "about" block** — a mock code snippet with line numbers and colored tokens to introduce yourself
- **Skills grid** — chip-style skill list with a simple dot-based proficiency indicator
- **Project list** — numbered project entries with title, description, tags, and a link
- **Contact section** — quick links for email, GitHub, and LinkedIn
- **Auto-updating footer year**
- **Responsive layout** — collapses gracefully on narrow screens

## Project structure

```
.
├── index.html   # Page markup and section content
├── style.css    # Editor theme, layout, typography, and responsive rules
└── script.js    # Footer year + scroll-spy tab highlighting
```

## Getting started

No build step or dependencies required.

1. Clone or download the project files.
2. Open `index.html` in any modern web browser.

## Customization checklist

This is a template — swap in your own details before publishing:

- **Name & role** — update `<h1 class="hero-name">` and the tagline in `#hero`
- **About snippet** — edit the mock object in `#about` (`name`, `role`, `based_in`, `focus`)
- **Skills** — add/remove `.skill-chip` entries and adjust the `●●●●○` proficiency dots in `#skills`
- **Projects** — replace the entries in `.project-list` with your own work, and update the `View →` links
- **Contact links** — set your real email, GitHub, and LinkedIn URLs in `#contact`
- **Résumé** — the "Download résumé" button points to `/resume.pdf`; add that file or update the link
- **Page title** — update `<title>` in `index.html`
- **Footer name** — update the name in the `<footer>` element

## How it works

- Each content section (`hero`, `about`, `skills`, `projects`, `contact`) has a matching tab in the top nav. `script.js` uses an `IntersectionObserver` to watch all sections and toggle the `.active` class on the tab whose section is currently in view.
- The footer year is set dynamically via `new Date().getFullYear()` so it never needs manual updates.
- All styling is driven by CSS custom properties defined in `:root` in `style.css`, making the color palette easy to change from one place.

## Theme colors

```css
:root{
  --bg: #F2F4F0;
  --surface: #FFFFFF;
  --ink: #14171A;
  --muted: #667069;
  --accent: #2F6F62;
  --accent-soft: #E4EEEA;
  --warm: #B5654B;
  --line: #DCDED7;
  --radius: 14px;
}
```

Edit these values to quickly restyle the site without touching the layout or markup.

## Fonts

Loaded from Google Fonts:
- **Fraunces** — display/serif headings
- **Inter** — body text
- **JetBrains Mono** — code snippet, tabs, tags, and monospace UI accents

## License

No license specified. Add one if you plan to share or publish this project.
