<script setup>
import { useI18n } from '../composables/useI18n'

const { currentLanguage, setLanguage, t } = useI18n()

const languages = [
  { code: 'en', label: 'English', icon: '🇬🇧' },
  { code: 'fr', label: 'Français', icon: '🇫🇷' },
  { code: 'rw', label: 'Kinyarwanda', icon: '🇷🇼' },
]
</script>

<template>
  <main class="translator-page">
    <div class="page-header">
      <h1>{{ t('translator.title') }}</h1>
      <p>{{ t('translator.selectLanguage') }}</p>
    </div>

    <div class="language-grid">
      <div 
        v-for="lang in languages" 
        :key="lang.code"
        class="language-card"
        :class="{ active: currentLanguage === lang.code }"
        @click="setLanguage(lang.code)"
      >
        <div class="language-icon">{{ lang.icon }}</div>
        <h2>{{ lang.label }}</h2>
        <p class="language-desc">
          <span v-if="lang.code === 'en'">{{ t('translator.exploreEnglish') }}</span>
          <span v-else-if="lang.code === 'fr'">{{ t('translator.exploreFrench') }}</span>
          <span v-else>{{ t('translator.exploreKinyarwanda') }}</span>
        </p>
        <button class="select-btn" :class="{ selected: currentLanguage === lang.code }">
          {{ currentLanguage === lang.code ? t('translator.selectedButton') : t('translator.selectButton') }}
        </button>
      </div>
    </div>

    <div class="language-info">
      <div class="info-card">
        <h3>{{ t('translator.currentLanguageLabel') }}</h3>
        <p class="current-lang">{{ currentLanguage.toUpperCase() }}</p>
      </div>
      <div class="info-card">
        <h3>{{ t('translator.aboutTitle') }}</h3>
        <p>{{ t('translator.aboutDesc') }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.translator-page {
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.page-header {
  text-align: center;
  margin-bottom: 2rem;
}
.page-header h1 {
  font-size: clamp(2.1rem, 3vw, 3rem);
  margin-bottom: 0.75rem;
}
.page-header p {
  color: var(--muted);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.7;
}
.language-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}
.language-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem 1.8rem;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  display: grid;
  gap: 1rem;
}
.language-card:hover,
.language-card.active {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.08);
}
.language-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: rgba(83, 131, 67, 0.14);
  font-size: 1.5rem;
}
.language-card h2 {
  margin: 0;
  font-size: 1.2rem;
}
.language-desc {
  color: var(--muted);
  line-height: 1.75;
}
.select-btn {
  margin-top: auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.9rem 1.3rem;
  background: transparent;
  color: var(--text-h);
  font-weight: 700;
  transition: background 0.2s ease, color 0.2s ease;
}
.select-btn.selected {
  background: var(--accent);
  border-color: transparent;
  color: var(--light);
}
.language-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}
.info-card {
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.75rem;
}
.info-card h3 {
  margin: 0 0 0.75rem;
}
.current-lang {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
}
@media (max-width: 860px) {
  .language-grid,
  .language-info {
    grid-template-columns: 1fr;
  }
}
</style>
