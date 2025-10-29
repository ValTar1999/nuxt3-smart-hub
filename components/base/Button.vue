<template>
  <!-- Button -->
  <button :class="classListRoot">
    <Icon v-if="icon && !iconRight" v-bind="icon" :class="classListIcon" />
    <slot />
    <Icon v-if="icon && iconRight" v-bind="icon" :class="classListIcon" />
  </button>
  <!-- END Button -->
</template>

<script lang="ts" setup>
import {
  classes as enumClasses,
  sizes as enumSizes,
  type TVariants
} from '~/enums/components/Button'
import type { TCommonSizes } from '~/enums/common/sizes'
import type { TIcon } from '~/enums/common/iconList'

type Props = {
  size?: TCommonSizes
  variant?: TVariants
  icon?: TIcon
  iconRight?: boolean
}

const {
  size = 'lg',
  variant = 'primary',
  iconRight = false,
  icon = undefined
} = defineProps<Props>()

const slots = useSlots()
const isIconOnly = !slots.default && icon ? 'only' : 'default'

const classListRoot = computed(() => [
  enumClasses.common,
  enumClasses.colors[variant],
  enumSizes.buttonSize[isIconOnly][size],
  enumSizes.rounded[size]
])

const classListIcon = computed(() => [
  enumClasses.colorsIcon[variant],
  enumSizes.iconSize[isIconOnly][size],
  enumSizes.rounded[size]
])
</script>

<style></style>
