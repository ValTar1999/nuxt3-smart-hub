<template>
  <button class="relative w-8 h-8 flex items-center justify-center">
    <div
      v-if="counter"
      class="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full border border-red-200"
    >
      {{ counter }}
    </div>
    <Icon collection="simple" variant="outline" name="bell" class="text-gray-500" />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  counter?: number | boolean
}

const { counter = 6 } = defineProps<Props>()
</script>

<style></style>
