<template>
  <!-- Icon -->
  <component :is="IconComponent" :class="classListRoot" />
  <!-- <svg-icon :name="icon" :class="classListRoot" /> -->
  <!-- END Icon -->
</template>

<script lang="ts" setup>
import type { TIcon } from '~/enums/common/iconList'

const { name = 'placeholder', collection = 'duotone', variant } = defineProps<TIcon>()

// const icon = `${collection}${variant ? `-${variant}/` : '/'}${name}`

const IconComponent = defineAsyncComponent(
  variant
    ? () => import(`@/assets/icons/${collection}/${variant}/${name}.svg`)
    : () => import(`@/assets/icons/${collection}/${name}.svg`)
)

const attrs = useAttrs()

const classListRoot = computed(() => [
  'flex-shrink-0',
  ((typeof attrs.class === 'string' && !attrs.class.match(/(^(w-)|( w-))(.)/g)) ||
    typeof attrs.class === 'undefined') &&
    'w-5 h-5'
])
</script>
