<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const theme = ref('light')
const { t } = useI18n()
const { currentLanguage, setLanguage } = useLanguage()

function applyTheme(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  localStorage.setItem('theme', value)
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  applyTheme(stored === 'dark' ? 'dark' : 'light')
})
</script>

<template>
  <header class="site-header">
    <div class="brand">{{ t('brand') }}</div>
    <nav class="site-nav">
      <router-link to="/" :class="{active: route.name==='Home'}">{{ t('nav.home') }}</router-link>
      <router-link to="/marketplace" :class="{active: route.name==='Marketplace'}">{{ t('nav.marketplace') }}</router-link>
      <router-link to="/farmers" :class="{active: route.name==='Farmers'}">{{ t('nav.farmers') }}</router-link>
      <router-link to="/register" :class="{active: route.name==='Register'}">{{ t('nav.register') }}</router-link>
      <router-link to="/contact" :class="{active: route.name==='Contact'}">{{ t('nav.contact') }}</router-link>
    </nav>

    <div class="language-switch">
      <button
        class="lang-btn"
        :class="{ active: currentLanguage === 'rw' }"
        @click="setLanguage('rw')"
        aria-label="Kinyarwanda"
      >
        <span class="flag">🇷🇼</span>
        <span class="code">RW</span>
      </button>
      <button
        class="lang-btn"
        :class="{ active: currentLanguage === 'en' }"
        @click="setLanguage('en')"
        aria-label="English"
      >
        <span class="flag">🇬🇧</span>
        <span class="code">EN</span>
      </button>
      <button
        class="lang-btn"
        :class="{ active: currentLanguage === 'fr' }"
        @click="setLanguage('fr')"
        aria-label="Français"
      >
        <span class="flag">🇫🇷</span>
        <span class="code">FR</span>
      </button>
    </div>

    <button class="theme-switch" type="button" @click="toggleTheme">
      {{ theme === 'dark' ? t('nav.light') : t('nav.dark') }}
    </button>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--primary);
  color: var(--light);
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.brand {
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 1.05rem;
}
.site-nav {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.site-nav a {
  color: var(--light);
  text-decoration: none;
  font-weight: 600;
  padding: 10px 12px;
  border-radius: 999px;
  transition: background 0.2s ease;
}
.site-nav a:hover,
.site-nav a.active {
  background: rgba(255, 255, 255, 0.18);
}
.theme-switch {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
}

.language-switch {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 12px;
}
.lang-btn {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: transparent;
  color: var(--light);
  font-weight: 700;
  cursor: pointer;
}
.lang-btn .flag { font-size: 1rem }
.lang-btn .code { font-size: 0.85rem }
.lang-btn.active {
  background: rgba(255,255,255,0.12);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
</style>
