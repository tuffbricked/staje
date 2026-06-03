import { computed } from 'vue'
import { getTranslation } from '../i18n/translations.js'
import { currentLanguage } from './useLanguage.js'

export function useI18n() {
  const lang = computed(() => currentLanguage.value)

  const t = (key) => {
    return getTranslation(key, lang.value)
  }

  return {
    currentLanguage: lang,
    t,
  }
}
