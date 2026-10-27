<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Months from `from` (YYYY-MM) to now, end month excluded, plus fixed past months.
const props = withDefaults(defineProps<{ from: string; plus?: number }>(), { plus: 0 })

function format(now: Date) {
  const [year, month] = props.from.split('-').map(Number)
  const total = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + props.plus
  const years = Math.floor(total / 12)
  const months = total % 12
  if (years === 0) return `${months}개월`
  return months === 0 ? `${years}년` : `${years}년 ${months}개월`
}

// SSR renders the build date; recompute on mount so the page stays current between deploys.
const text = ref(format(new Date()))
onMounted(() => (text.value = format(new Date())))
</script>

<template>{{ text }}</template>
