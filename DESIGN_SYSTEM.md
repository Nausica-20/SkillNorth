# SkillNorth — Definitive Design System

Version 1.0

## 1. Design direction

SkillNorth should feel like a **modern learning and career navigation platform**, not a school, LMS or affiliate catalogue.

Core visual ideas:

- direction
- progress
- discovery
- practical skills
- clear choices
- forward movement

The interface should be editorial first and commercial second.

## 2. Brand palette

| Role | Token | Hex |
|---|---|---|
| Primary brand | `--sn-navy` | `#101828` |
| Primary action | `--sn-blue` | `#2563EB` |
| Accent | `--sn-lime` | `#A3E635` |
| Main background | `--sn-warm-white` | `#F8FAFC` |
| Text | `--sn-text` | `#111827` |
| Secondary text | `--sn-muted` | `#667085` |

The lime accent is used sparingly for emphasis, highlights, progress and selected states.

## 3. Typography

Primary font stack:

`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Headings:

- heavy/bold
- tight line height
- slight negative letter spacing
- short, direct wording

Body:

- highly readable
- 1.65 line height
- comfortable reading width around 760px

## 4. Layout

Maximum site container:

`1180px`

Article reading width:

`760px`

Sidebar:

`300px`

Desktop pages use generous whitespace. Mobile pages collapse to one column.

## 5. Spacing

The system uses a 4px base spacing scale.

Primary section spacing:

- compact: 48px
- standard: 80px
- large: 96px

The goal is a calm editorial rhythm rather than a dense dashboard.

## 6. Components

The first definitive component vocabulary is:

- Header
- Navigation
- Hero
- Section Header
- Goal Card
- Skill Card
- Career Card
- Learning Path Card
- Course Card
- Guide Card
- Badge
- Button
- Breadcrumb
- Article
- Table of Contents
- Affiliate CTA
- Footer

Components should be reusable across the entire site.

## 7. Buttons

Primary:

- Electric Blue background
- white text
- medium radius
- bold typography

Secondary:

- white background
- navy text
- grey border

Accent:

- lime background
- navy text

Affiliate buttons should use the same visual language as the rest of the site. They should never look like aggressive advertisements.

## 8. Cards

Cards use:

- white surface
- 1px border
- 18px radius
- subtle shadow
- small hover elevation

No excessive gradients, glassmorphism or decorative effects.

## 9. Hero

The homepage hero should communicate the brand promise immediately:

**Find the skills. Build your future.**

Supporting idea:

**What's your next skill?**

Primary CTA:

**Explore Skills**

Secondary CTA:

**Find Your Learning Path**

The visual side should represent a skill/career map or directional system, not a generic stock photograph.

## 10. Homepage hierarchy

1. Header
2. Hero
3. Goal selector
4. Popular skills
5. Career directions
6. Learning paths
7. Featured course guides
8. 2027 flagship guide
9. Latest guides
10. Why SkillNorth
11. Final CTA
12. Footer

## 11. Responsive rules

Desktop:

- full navigation
- multi-column cards
- two-column hero
- article + sidebar

Tablet:

- reduced columns
- hero may collapse
- sidebar can move below article

Mobile:

- single-column cards
- compact header
- mobile navigation
- full-width CTAs when appropriate
- no horizontal overflow

## 12. Accessibility

The system includes:

- visible keyboard focus
- skip link
- reduced-motion support
- semantic link/button distinction
- sufficient contrast
- readable line lengths

## 13. Technical rule

For the initial GitHub rebuild:

**Do not introduce Sass, Liquid, Jekyll plugins or CSS frameworks.**

Use:

- HTML
- one `style.css`
- vanilla JavaScript only when needed

This keeps GitHub Pages deployment deterministic.

## 14. CSS architecture

`style.css` is one physical file but internally divided into stable sections:

1. Design Tokens
2. Reset & Base
3. Typography
4. Layout
5. Header & Navigation
6. Buttons
7. Hero
8. Cards
9. Goal Cards
10. Skill/Career/Path Cards
11. Course Cards
12. Guides & Articles
13. Breadcrumbs
14. CTA
15. Footer
16. Accessibility
17. Responsive

The file should evolve by adding components to these sections rather than being repeatedly rewritten from scratch.
