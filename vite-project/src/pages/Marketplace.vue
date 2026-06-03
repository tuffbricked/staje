<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const searchInput = ref('')
const districtFilter = ref('')
const productFilter = ref('')

const products = [
  {
    name: 'Fresh Irish Potatoes',
    farmer: 'Jean Bosco',
    district: 'Huye',
    type: 'Potatoes',
    quantity: '200 kg',
    price: 'RWF 600 / kg',
    details: 'Harvest ready with local delivery and pickup options.'
  },
  {
    name: 'Organic Tomatoes',
    farmer: 'Aline Mukamana',
    district: 'Gakenke',
    type: 'Tomatoes',
    quantity: '120 kg',
    price: 'RWF 450 / kg',
    details: 'Fresh tomatoes grown with natural fertilizers, ideal for vendors.'
  },
  {
    name: 'Sweet Bananas',
    farmer: 'Emmanuel Niyonzima',
    district: 'Nyamasheke',
    type: 'Bananas',
    quantity: '150 bunches',
    price: 'RWF 350 / bunch',
    details: 'Sweet ripe bananas available for local trade.'
  },
  {
    name: 'Red Beans',
    farmer: 'Marie Claire',
    district: 'Ruhango',
    type: 'Beans',
    quantity: '180 kg',
    price: 'RWF 700 / kg',
    details: 'High-quality red beans for retail and wholesale buyers.'
  },
  {
    name: 'Yellow Maize',
    farmer: 'Eric Ndayisaba',
    district: 'Musanze',
    type: 'Maize',
    quantity: '300 kg',
    price: 'RWF 240 / kg',
    details: 'Dry maize ready for sale and distribution to local markets.'
  }
]

const filtered = computed(() => {
  return products.filter(product => {
    const matchesSearch = searchInput.value === '' ||
      product.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      product.type.toLowerCase().includes(searchInput.value.toLowerCase())
    const matchesDistrict = districtFilter.value === '' || product.district === districtFilter.value
    const matchesType = productFilter.value === '' || product.type === productFilter.value
    return matchesSearch && matchesDistrict && matchesType
  })
})

function resetFilters() {
  searchInput.value = ''
  districtFilter.value = ''
  productFilter.value = ''
}
</script>

<template>
  <main>
    <section class="section">
      <div class="section-header">
        <div>
          <h2>{{ t('marketplace.title') }}</h2>
          <p>{{ t('marketplace.description') }}</p>
        </div>
      </div>

      <div class="filters">
        <input 
          v-model="searchInput"
          type="search" 
          :placeholder="t('marketplace.searchPlaceholder')"
        >
        <select v-model="districtFilter">
          <option value="">{{ t('marketplace.allDistricts') }}</option>
          <option value="Huye">Huye</option>
          <option value="Gakenke">Gakenke</option>
          <option value="Nyamasheke">Nyamasheke</option>
          <option value="Ruhango">Ruhango</option>
          <option value="Musanze">Musanze</option>
        </select>
        <select v-model="productFilter">
          <option value="">{{ t('marketplace.allProducts') }}</option>
          <option value="Potatoes">Potatoes</option>
          <option value="Tomatoes">Tomatoes</option>
          <option value="Bananas">Bananas</option>
          <option value="Beans">Beans</option>
          <option value="Maize">Maize</option>
        </select>
        <button type="button" @click="resetFilters">{{ t('marketplace.resetFilters') }}</button>
      </div>

      <div class="cards">
        <template v-if="filtered.length">
          <article v-for="product in filtered" :key="product.name" class="card product-card">
            <div>
              <h3>{{ product.name }}</h3>
              <div class="data-row">
                <span class="badge">{{ product.type }}</span>
                <span>{{ product.district }}</span>
              </div>
              <p>{{ product.details }}</p>
            </div>
            <div>
              <p class="product-meta"><strong>Farmer:</strong> {{ product.farmer }}</p>
              <p class="product-meta"><strong>Quantity:</strong> {{ product.quantity }}</p>
              <p class="product-meta"><strong>Price:</strong> {{ product.price }}</p>
              <button type="button" @click="alert('You can contact ' + product.farmer + ' using the contact form.')">Request product</button>
            </div>
          </article>
        </template>
        <div v-else class="card">
          <h3>No products found</h3>
          <p>Try a different search term or filter.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
