<template>
  <section id="center">
    <div class="panel">
      <span class="eyebrow">About Farmflow</span>
      <h1>Built to make farm management feel effortless.</h1>
      <p>Farmflow brings planning, logistics, and crew coordination into a single polished interface.</p>
      <ul class="about-list">
        <li>Quick overviews for planting, harvest, and deliveries</li>
        <li>Easy access to equipment and inventory status</li>
        <li>Responsive design that works well on larger screens or phones</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.panel {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 700;
}
h1 {
  margin: 0 0 1rem;
}
p {
  margin: 0 0 1.5rem;
  color: var(--text);
}
.about-list {
  list-style: none;
  padding: 0;
  display: grid;
  row-gap: 0.9rem;
}
.about-list li {
  padding: 1rem 1.15rem;
  border-radius: 1.1rem;
  border: 1px solid var(--border);
  background: var(--surface-alt);
}
@media (max-width: 720px) {
  .panel {
    padding: 2rem 1.25rem;
  }
}
</style>
