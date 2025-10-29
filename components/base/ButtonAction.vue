<template>
  <!-- Button -->
  <button :class="classListRoot">
    <Icon v-bind="icon" />
  </button>
  <!-- END Button -->
</template>

<script lang="ts" setup>
import { classes as enumClasses } from '@/enums/components/Button'
import type { TIcon } from '@/enums/common/iconList'

type Props = {
  size?: 'sm' | 'lg'
  icon?: TIcon
}

const { size = 'lg', icon = { collection: 'simple', variant: 'solid', name: 'plus' } } =
  defineProps<Props>()

const classListRoot = computed(() => [
  enumClasses.common,
  size === 'lg' ? 'w-10 h-10' : 'w-5.5 h-5.5',
  'rounded-md inline-flex items-center justify-center font-semibold text-center whitespace-nowrap text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus-item disabled:opacity-40 disabled:pointer-events-none'
])
</script>

<style></style>
