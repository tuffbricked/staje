<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const role = ref('farmer')

// Farmer form
const farmerName = ref('')
const farmerEmail = ref('')
const farmerPhone = ref('')
const farmerLocation = ref('')
const farmerProducts = ref('')

// Buyer form
const buyerName = ref('')
const buyerEmail = ref('')
const buyerPhone = ref('')
const buyerType = ref('')
const buyerNeeds = ref('')

function selectRole(newRole) {
  role.value = newRole
}

function submitFarmerForm() {
  if (!farmerName.value || !farmerEmail.value || !farmerPhone.value || !farmerLocation.value || !farmerProducts.value) {
    alert('Please complete all farmer fields before submitting.')
    return
  }
  alert(`Thank you, ${farmerName.value}! Your farmer profile request has been received. We will contact you soon at ${farmerEmail.value}.`)
  farmerName.value = ''
  farmerEmail.value = ''
  farmerPhone.value = ''
  farmerLocation.value = ''
  farmerProducts.value = ''
}

function submitBuyerForm() {
  if (!buyerName.value || !buyerEmail.value || !buyerPhone.value || !buyerType.value || !buyerNeeds.value) {
    alert('Please complete all buyer fields before submitting.')
    return
  }
  alert(`Thank you, ${buyerName.value}! Your buyer registration is ready. We will help you find products soon.`)
  buyerName.value = ''
  buyerEmail.value = ''
  buyerPhone.value = ''
  buyerType.value = ''
  buyerNeeds.value = ''
}
</script>

<template>
  <main>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('register.title') }}</h2>
          <p>{{ t('register.description') }}</p>
        </div>
      </div>
      <div class="form-card">
        <div class="role-toggle">
          <button 
            :class="{ active: role === 'farmer' }"
            @click="selectRole('farmer')"
          >{{ t('register.roleFarmer') }}</button>
          <button 
            :class="{ active: role === 'buyer' }"
            @click="selectRole('buyer')"
          >{{ t('register.roleBuyer') }}</button>
        </div>

        <div v-if="role === 'farmer'" class="form-grid">
          <h3>{{ t('register.farmerHeading') }}</h3>
          <input v-model="farmerName" type="text" :placeholder="t('register.form.firstName')" required>
          <input v-model="farmerEmail" type="email" :placeholder="t('register.form.email')" required>
          <input v-model="farmerPhone" type="tel" :placeholder="t('register.form.phone')" required>
          <input v-model="farmerLocation" type="text" :placeholder="t('register.form.location')" required>
          <textarea v-model="farmerProducts" :placeholder="t('register.form.productDetails')" required></textarea>
          <button class="button-primary" type="button" @click="submitFarmerForm">{{ t('register.form.farmerButton') }}</button>
        </div>

        <div v-if="role === 'buyer'" class="form-grid">
          <h3>{{ t('register.buyerHeading') }}</h3>
          <input v-model="buyerName" type="text" :placeholder="t('register.form.firstName')" required>
          <input v-model="buyerEmail" type="email" :placeholder="t('register.form.email')" required>
          <input v-model="buyerPhone" type="tel" :placeholder="t('register.form.phone')" required>
          <select v-model="buyerType" required>
            <option value="">{{ t('register.form.buyerTypePlaceholder') }}</option>
            <option value="Trader">{{ t('register.form.buyerTypeTrader') }}</option>
            <option value="Wholesaler">{{ t('register.form.buyerTypeWholesaler') }}</option>
            <option value="Retailer">{{ t('register.form.buyerTypeRetailer') }}</option>
            <option value="Individual">{{ t('register.form.buyerTypeIndividual') }}</option>
          </select>
          <textarea v-model="buyerNeeds" :placeholder="t('register.form.buyerNeeds')" required></textarea>
          <button class="button-primary" type="button" @click="submitBuyerForm">{{ t('register.form.buyerButton') }}</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
