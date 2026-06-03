<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')

function submitContactForm() {
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    alert('Please fill in all contact fields before sending.')
    return
  }
  alert(`Thank you, ${contactName.value}! Your message has been sent. We will reply to ${contactEmail.value} shortly.`)
  contactName.value = ''
  contactEmail.value = ''
  contactMessage.value = ''
}
</script>

<template>
  <main>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('contact.title') }}</h2>
          <p>{{ t('contact.description') }}</p>
        </div>
      </div>
      <div class="contact-columns">
        <div class="card contact-card">
          <h3>{{ t('contact.supportTitle') }}</h3>
          <div class="form-grid">
            <input v-model="contactName" type="text" :placeholder="t('contact.name')" required>
            <input v-model="contactEmail" type="email" :placeholder="t('contact.email')" required>
            <textarea v-model="contactMessage" :placeholder="t('contact.message')" required></textarea>
            <button type="button" @click="submitContactForm">{{ t('contact.send') }}</button>
          </div>
        </div>
        <div class="card">
          <h3>{{ t('contact.platformTitle') }}</h3>
          <p><strong>{{ t('contact.goalLabel') }}:</strong> Connect rural farmers in Rwanda with buyers and traders.</p>
          <p><strong>{{ t('contact.focusLabel') }}:</strong> product visibility, local market access, and simple buyer/farmer contact.</p>
          <p><strong>{{ t('contact.benefitLabel') }}:</strong> Helps farmers sell more reliably and enables buyers to find fresh local produce.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
