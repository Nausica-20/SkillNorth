---
layout: default
title: "Courses"
description: "Explore curated online courses and find practical learning options for the skills and careers you want to build."
permalink: /courses/
---

<section class="page-hero">
  <p class="eyebrow">COURSE LIBRARY</p>

  <h1>Courses to help you build useful skills.</h1>

  <p>
    Explore curated online courses connected to SkillNorth skills,
    careers and learning paths. Find a starting point, build your skills,
    and move forward.
  </p>
</section>

<section class="courses-library">

  <div class="courses-toolbar">

    <div class="courses-search">
      <label for="course-search">Search courses</label>
      <input
        type="search"
        id="course-search"
        placeholder="Search by course, skill or topic..."
        autocomplete="off">
    </div>

    <div class="courses-filters">

      <div class="filter-group">
        <label for="course-category">Category</label>
        <select id="course-category">
          <option value="">All categories</option>

          {% assign categories = site.data.courses
            | map: "category"
            | uniq
            | sort %}

          {% for category in categories %}
            <option value="{{ category | downcase | escape }}">
              {{ category }}
            </option>
          {% endfor %}
        </select>
      </div>

      <div class="filter-group">
        <label for="course-level">Level</label>
        <select id="course-level">
          <option value="">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="course-provider">Provider</label>
        <select id="course-provider">
          <option value="">All providers</option>

          {% assign providers = site.data.courses
            | map: "provider"
            | uniq
            | sort %}

          {% for provider in providers %}
            <option value="{{ provider | downcase | escape }}">
              {{ provider | capitalize }}
            </option>
          {% endfor %}
        </select>
      </div>

    </div>

    <div class="courses-results-bar">
      <strong data-course-count>{{ site.data.courses.size }}</strong>
      <span>courses</span>

      <button type="button" id="course-reset">
        Reset filters
      </button>
    </div>

  </div>


  <div class="course-grid" id="course-grid">

    {% for course in site.data.courses %}

      <article
        class="course-card"
        data-course-card
        data-title="{{ course.title | downcase | escape }}"
        data-category="{{ course.category | downcase | escape }}"
        data-level="{{ course.level | downcase | escape }}"
        data-provider="{{ course.provider | downcase | escape }}"
        data-skills="{{ course.skill_ids | join: ' ' | downcase | escape }}"
        data-careers="{{ course.career_ids | join: ' ' | downcase | escape }}"
        data-paths="{{ course.learning_path_ids | join: ' ' | downcase | escape }}">

        <div class="course-card__top">

          <span class="course-card__category">
            {{ course.category }}
          </span>

          {% if course.level %}
            <span class="course-card__level">
              {{ course.level | capitalize }}
            </span>
          {% endif %}

        </div>

        <h2 class="course-card__title">
          {{ course.title }}
        </h2>

        {% if course.short_description %}
          <p class="course-card__description">
            {{ course.short_description }}
          </p>
        {% endif %}

        <div class="course-card__meta">

          {% if course.duration != "" %}
            <span>{{ course.duration }}</span>
          {% endif %}

          {% if course.certificate.available %}
            <span>Certificate available</span>
          {% endif %}

        </div>

        {% if course.tags %}
          <div class="course-card__tags">
            {% for tag in course.tags limit: 4 %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}

        <div class="course-card__footer">

          {% if course.affiliate.enabled and course.affiliate.affiliate_url != "..." %}

            <a
              class="button"
              href="{{ course.affiliate.affiliate_url }}"
              target="_blank"
              rel="sponsored nofollow noopener">
              {{ course.affiliate.cta }}
            </a>

          {% else %}

            <a
              class="button"
              href="{{ course.source_url }}"
              target="_blank"
              rel="noopener">
              View course →
            </a>

          {% endif %}

        </div>

        {% if course.affiliate.disclosure_required %}
          <p class="course-card__disclosure">
            Affiliate link may earn SkillNorth a commission at no additional
            cost to you.
          </p>
        {% endif %}

      </article>

    {% endfor %}

  </div>


  <div
    class="courses-empty"
    id="courses-empty"
    hidden>

    <h2>No courses found</h2>

    <p>
      Try changing your search or removing one of the filters.
    </p>

  </div>

</section>


<section class="content-section courses-intro">

  <h2>How to use the SkillNorth course library</h2>

  <p>
    SkillNorth does not simply list courses. Courses are connected to
    skills, career directions and learning paths so you can understand
    what to learn and why it matters.
  </p>

  <div class="three-column-grid">

    <div>
      <h3>1. Choose a skill</h3>
      <p>
        Start with a skill you want to develop.
      </p>
    </div>

    <div>
      <h3>2. Explore a path</h3>
      <p>
        Follow a structured learning path toward a practical goal.
      </p>
    </div>

    <div>
      <h3>3. Choose a course</h3>
      <p>
        Select courses that match your current level and direction.
      </p>
    </div>

  </div>

</section>


<section class="final-cta">

  <p class="eyebrow">NOT SURE WHERE TO START?</p>

  <h2>Find the skills that match your goals.</h2>

  <p>
    Explore SkillNorth skills and discover possible directions before
    choosing a course.
  </p>

  <a
    class="button"
    href="{{ '/skills/' | relative_url }}">
    Explore Skills →
  </a>

</section>
