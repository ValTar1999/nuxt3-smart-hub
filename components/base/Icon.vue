<template>
  <!-- Icon -->
  <component :is="IconComponent" :class="classListRoot" />
  <!-- <svg-icon :name="icon" :class="classListRoot" /> -->
  <!-- END Icon -->
</template>

<script lang="ts" setup>
import type { TIcon } from '~/enums/common/iconList'

defineOptions({
  inheritAttrs: false
})

const { name = 'placeholder', collection = 'duotone', variant } = defineProps<TIcon>()

// const icon = `${collection}${variant ? `-${variant}/` : '/'}${name}`

const IconComponent = defineAsyncComponent(
  variant
    ? () => import(`@/assets/icons/${collection}/${variant}/${name}.svg`)
    : () => import(`@/assets/icons/${collection}/${name}.svg`)
)

const attrs = useAttrs()

const classListRoot = computed(() => {
  const classes: (string | object)[] = ['flex-shrink-0']

  // Добавляем переданные классы из $attrs
  if (attrs.class) {
    if (typeof attrs.class === 'string') {
      const classArray = attrs.class.split(' ').filter(Boolean)
      classes.push(...classArray)
    } else if (Array.isArray(attrs.class)) {
      classes.push(...attrs.class.filter(Boolean))
    } else if (typeof attrs.class === 'object') {
      classes.push(attrs.class)
    }
  }

  // Проверяем, есть ли классы размера (w-* или h-*)
  const classString = Array.isArray(classes)
    ? classes.filter((c) => typeof c === 'string').join(' ')
    : ''
  const hasSizeClass = /(^|\s)(w-|h-)/.test(classString)

  // Добавляем дефолтные размеры, если не указаны классы ширины/высоты
  if (!hasSizeClass) {
    classes.push('w-5', 'h-5')
  }

  return classes
})
</script>
