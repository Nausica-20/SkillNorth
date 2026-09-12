# SkillNorth

**Find the skills. Build your future.**

SkillNorth is an English-first, international learning and career discovery site built with Jekyll/GitHub Pages.

## Phase 3.2

This package adds the definitive content templates for:

- Skill pages
- Career pages
- Learning Path pages
- Course guides
- Guide pages
- Skills, Careers, Courses, Learning Paths and Guides hubs

The architecture is data-driven through `/data/*.yml` and uses reusable Liquid includes for cards, CTAs, breadcrumbs and navigation.

## Run locally

Install Ruby + Bundler, then:

```bash
bundle install
bundle exec jekyll serve
```

The current runtime used to assemble this package does not include a Jekyll toolchain, so the package should be built once in GitHub Actions or a local Ruby environment.

## Important before publishing

Populate `data/courses.yml` with final Alison `course_url` and approved affiliate URLs. Replace `YOURDOMAIN.com` and `YOUR_GITHUB_USERNAME` in `_config.yml`.

## Phase 4

Phase 4 adds the editorial content system for SkillNorth:

- `data/editorial.yml` — content model, rules and standard sections
- `data/article_registry.yml` — 30-day launch calendar and content IDs
- `data/content_registry.yml` — unified site content inventory
- `data/editorial_brief.yml` — production workflow and quality gate
- `data/pinterest_content.yml` — launch Pinterest repurposing matrix
- `_articles/` — first long-form SEO article set
- new cluster pages for AI, generative AI, prompt engineering, Python, cybersecurity, digital marketing, SEO and related topics

Course review pages include provider source URLs and a verification date. Before publication, add the final Alison affiliate URL and confirm the live course page once more.

## Phase 6 — SEO Content Factory
The repository now includes a repeatable editorial production system under `data/factory/`, `templates/content/`, `templates/pinterest/`, and `scripts/content_factory/`.
