# SkillNorth — Jekyll v1

A clean rebuild of SkillNorth using Jekyll, while preserving the approved homepage design.

## Routing
- `/`
- `/skills/`
- `/skills/ai/`
- `/skills/data/`
- `/skills/cybersecurity/`
- `/skills/programming/`

## Architecture
- `_config.yml` controls site settings and `permalink: pretty`
- `_layouts/default.html` provides the shared shell
- `_includes/header.html` and `_includes/footer.html` provide reusable navigation
- `assets/css/style.css` is the single stylesheet
- `assets/js/main.js` is vanilla JavaScript

## Principle
Build one vertical at a time and verify GitHub Pages before adding the next one.
