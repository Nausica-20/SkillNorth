# SkillNorth — Phase 5

## Course Database + Affiliate Engine

This phase turns the course layer into a controlled system rather than a collection of manual links.

### Core files

- `data/courses.yml` — central course database
- `data/course_reviews.yml` — editorial verdict framework
- `data/affiliate.yml` — affiliate policy and provider settings
- `data/course_engine.yml` — lifecycle and validation rules
- `_includes/affiliate-link.html` — single outbound-link component
- `_includes/affiliate-cta.html` — course CTA component
- `_includes/course-card.html` — reusable course card
- `_layouts/course.html` — course review template + Course structured data
- `scripts/validate_courses.py` — local database validator

### Affiliate URL rule

The provider's canonical URL and the affiliate URL are stored separately. The site never invents affiliate IDs or tracking parameters. Until a verified affiliate URL is inserted, outbound CTAs fall back to the canonical provider URL.

### Current Alison data

Course facts were checked against Alison pages on 12 September 2026. Affiliate programme details were checked against Alison's current affiliate documentation on the same date.

Before publishing, replace each blank `affiliate_url` with the exact URL generated in your Alison affiliate dashboard and run the validation script.

### Validation

```bash
python3 scripts/validate_courses.py
```
