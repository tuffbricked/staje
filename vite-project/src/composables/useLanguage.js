import { ref, computed } from 'vue'

export const currentLanguage = ref(localStorage.getItem('language') || 'en')

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  return {
    currentLanguage,
    setLanguage,
  }
}
