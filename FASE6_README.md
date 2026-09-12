# SkillNorth — Phase 6

## SEO Content Factory

Phase 6 turns the editorial database into a repeatable production system.

### New system files
- `data/content_factory.yml` — editorial, SEO and anti-duplication rules.
- `data/factory/topic_matrix.yml` — topic → pillar → intent mapping.
- `data/factory/production_queue.yml` — production queue with funnel stages.
- `data/factory/keyword_map.yml` — primary keyword ownership map.
- `data/factory/repurpose_rules.yml` — content repurposing matrix.
- `templates/content/` — article, comparison and course-review templates.
- `templates/pinterest/` — Pinterest pack template.
- `scripts/content_factory/build_briefs.py` — creates editorial briefs from the queue.
- `scripts/content_factory/validate_content.py` — validates factory data and detects duplicates.

### Workflow
1. Add a row to `production_queue.yml`.
2. Run `python scripts/content_factory/build_briefs.py`.
3. Write the content using the appropriate template.
4. Validate primary keyword ownership before publication.
5. Add 3 Pinterest angles and link each Pin to the most relevant URL.
6. Add or update affiliate CTA only after the content has delivered useful decision support.

### Monetization rule
SkillNorth remains editorial-first. Affiliate links are a conversion layer, not the purpose of the page.
