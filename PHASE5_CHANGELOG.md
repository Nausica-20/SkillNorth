# SkillNorth Phase 5 Changelog

## Course Database
- Expanded the Alison course catalog from 3 seed records to 15 verified records.
- Added canonical provider URLs and separate affiliate URL fields.
- Added skill, secondary skill, level, duration, certificate, priority, feature and verification metadata.

## Affiliate Engine
- Added `data/affiliate.yml` as the provider/affiliate policy layer.
- Added `data/affiliate_queue.yml` to manage manual affiliate-link generation.
- Added `_includes/affiliate-link.html` as the single outbound course-link component.
- Added disclosure rendering from central configuration.
- Added `rel="sponsored nofollow noopener"` to outbound course links.
- Added a browser event hook for optional analytics: `skillnorth:outbound-course-click`.

## Course UX
- Added 15 reusable course review pages.
- Added related-course recommendations.
- Added course facts component.
- Added course structured data to the course layout.
- Added free-course and certificate hubs.
- Added comparison hub and a project-management comparison starter.

## Quality Controls
- Added `scripts/validate_courses.py`.
- Validated all YAML files.
- Confirmed all 15 course records have corresponding review pages.
- Checked Markdown internal links: 41 checked, 0 unresolved in the static scan.

## Important launch rule

The package intentionally leaves `affiliate_url` blank. The exact affiliate URLs must be generated in the Alison affiliate dashboard and then inserted into `data/courses.yml`. The site falls back to the canonical provider URL until that is done.
