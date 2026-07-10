# Kumaresh PV — Portfolio

Personal portfolio of Kumaresh PV, Data Analyst at BMO Financial Group (Regulatory Reporting — FR 2052a).

Built with React (Create React App). Design theme: **black · royal red · gold**, with scroll-reveal animations, a typing-effect hero, animated stat counters, timeline experience/education, animated skill bars and badges, and glowing project cards.

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build
npm run deploy   # publish to GitHub Pages (gh-pages)
```

## Resume download

The **Download Resume** buttons link to `public/resume.pdf`. Drop your latest resume there as `resume.pdf` — no code change needed.

## Editing content

All page content lives in [src/App.js](src/App.js) as plain data arrays near the top of the file:

- `TYPING_ROLES` — rotating titles in the hero
- `EXPERIENCES` — work experience timeline
- `EDUCATION` — education & certification cards
- `CORE_SKILLS` — animated proficiency bars (name + level %)
- `SKILL_GROUPS` — skill badge groups
- `PROJECTS` — project cards (image, GitHub link, tags, bullets)

Theme colors are CSS variables at the top of [src/App.css](src/App.css) (`--royal-red`, `--gold`, etc.).
