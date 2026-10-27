import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import MonthsSince from './MonthsSince.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MonthsSince', MonthsSince)
  },
} satisfies Theme
