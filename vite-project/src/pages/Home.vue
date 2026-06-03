<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="hero">
      <div>
        <h1>{{ t('home.heroTitle') }}</h1>
        <p>{{ t('home.heroDesc') }}</p>
        <div class="hero-actions">
          <router-link to="/register" class="button-primary">{{ t('home.joinFarmer') }}</router-link>
          <router-link to="/marketplace" class="button-secondary">{{ t('home.browseProducts') }}</router-link>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80" alt="Farmer holding vegetables in Rwanda">
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('home.whyMatters') }}</h2>
          <p>{{ t('home.whyMattersDesc') }}</p>
        </div>
      </div>
      <div class="feature-grid">
        <div class="card">
          <h3>{{ t('home.empowermentTitle') }}</h3>
          <p>{{ t('home.empowermentDesc') }}</p>
        </div>
        <div class="card">
          <h3>{{ t('home.listingTitle') }}</h3>
          <p>{{ t('home.listingDesc') }}</p>
        </div>
        <div class="card">
          <h3>{{ t('home.accessTitle') }}</h3>
          <p>{{ t('home.accessDesc') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
