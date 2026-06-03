<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('farmers.title') }}</h2>
          <p>{{ t('farmers.description') }}</p>
        </div>
      </div>
      <div class="farmer-grid">
        <div class="card profile-card">
          <h3>Jean Bosco</h3>
          <div class="profile-meta">
            <span class="badge">Huye District</span>
            <span>10 years farming potatoes and maize</span>
          </div>
          <p>Jean grows high-quality Irish potatoes and also supplies fresh maize to local traders. He supports pickup or delivery within the district.</p>
          <button type="button" @click="alert('Contact form will be added later.')">Contact Jean</button>
        </div>
        <div class="card profile-card">
          <h3>Aline Mukamana</h3>
          <div class="profile-meta">
            <span class="badge">Gakenke District</span>
            <span>Specializes in organic tomatoes</span>
          </div>
          <p>Aline grows tomatoes using natural methods and sells to wholesalers, restaurants, and retailer markets across northern Rwanda.</p>
          <button type="button" @click="alert('Contact form will be added later.')">Contact Aline</button>
        </div>
        <div class="card profile-card">
          <h3>Emmanuel Niyonzima</h3>
          <div class="profile-meta">
            <span class="badge">Nyamasheke District</span>
            <span>Bananas and beans producer</span>
          </div>
          <p>Emmanuel sells sweet bananas and fresh beans. He is focused on serving buyers who need consistent quality and local delivery.</p>
          <button type="button" @click="alert('Contact form will be added later.')">Contact Emmanuel</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('farmers.howWorksTitle') }}</h2>
          <p>Simple steps for farmers and buyers to interact and trade with confidence.</p>
        </div>
      </div>
      <div class="how-grid">
        <div class="card">
          <h4>{{ t('farmers.howSteps.step1Title') }}</h4>
          <p>{{ t('farmers.howSteps.step1Desc') }}</p>
        </div>
        <div class="card">
          <h4>{{ t('farmers.howSteps.step2Title') }}</h4>
          <p>{{ t('farmers.howSteps.step2Desc') }}</p>
        </div>
        <div class="card">
          <h4>{{ t('farmers.howSteps.step3Title') }}</h4>
          <p>{{ t('farmers.howSteps.step3Desc') }}</p>
        </div>
        <div class="card">
          <h4>{{ t('farmers.howSteps.step4Title') }}</h4>
          <p>{{ t('farmers.howSteps.step4Desc') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
