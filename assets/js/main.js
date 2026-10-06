document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const courseGrid = document.getElementById("course-grid");

  if (!courseGrid) {
    return;
  }

  const searchInput = document.getElementById("course-search");
  const categorySelect = document.getElementById("course-category");
  const levelSelect = document.getElementById("course-level");
  const providerSelect = document.getElementById("course-provider");
  const resetButton = document.getElementById("course-reset");
  const countElement = document.querySelector("[data-course-count]");
  const emptyState = document.getElementById("courses-empty");

  const cards = Array.from(
    courseGrid.querySelectorAll("[data-course-card]")
  );

  function filterCourses() {

    const search = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value.toLowerCase();
    const level = levelSelect.value.toLowerCase();
    const provider = providerSelect.value.toLowerCase();

    let visibleCount = 0;

    cards.forEach(function (card) {

      const title = card.dataset.title || "";
      const cardCategory = card.dataset.category || "";
      const cardLevel = card.dataset.level || "";
      const cardProvider = card.dataset.provider || "";
      const skills = card.dataset.skills || "";
      const careers = card.dataset.careers || "";
      const paths = card.dataset.paths || "";

      const searchableText = [
        title,
        cardCategory,
        skills,
        careers,
        paths
      ].join(" ");

      const matchesSearch =
        !search ||
        searchableText.includes(search);

      const matchesCategory =
        !category ||
        cardCategory === category;

      const matchesLevel =
        !level ||
        cardLevel === level;

      const matchesProvider =
        !provider ||
        cardProvider === provider;

      const visible =
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesProvider;

      card.hidden = !visible;

      if (visible) {
        visibleCount++;
      }

    });

    countElement.textContent = visibleCount;

    emptyState.hidden = visibleCount !== 0;
  }

  function resetFilters() {

    searchInput.value = "";
    categorySelect.value = "";
    levelSelect.value = "";
    providerSelect.value = "";

    filterCourses();
  }

  searchInput.addEventListener("input", filterCourses);
  categorySelect.addEventListener("change", filterCourses);
  levelSelect.addEventListener("change", filterCourses);
  providerSelect.addEventListener("change", filterCourses);

  resetButton.addEventListener("click", resetFilters);

});
