<template>
  <div class="flex items-center">
    <!-- Trigger -->
    <div
      ref="triggerRef"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      class="flex items-center w-full"
      @mouseenter="onTriggerEnter"
      @mouseleave="onTriggerLeave"
      @click="onTriggerClick"
      @focus="isOpen = true"
      @blur="isOpen = false"
    >
      <slot name="trigger" />
    </div>

    <!-- Tooltip вынесен из всех родителей через Teleport -->
    <Teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          ref="tooltipRef"
          role="tooltip"
          class="z-50"
          @mouseleave="onTooltipLeave"
          @mouseenter="updatePosition"
        >
          <div class="p-2 -m-2">
            <slot />
          </div>
          <!-- class="z-[9999] px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg" -->
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom'

const props = defineProps<{
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end'
  /** Открытие по hover (по умолчанию) или по клику */
  trigger?: 'hover' | 'click'
}>()

const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

let cleanupAutoUpdate: (() => void) | null = null
let cleanupEscape: (() => void) | null = null

const strategy: 'fixed' | 'absolute' = 'fixed' // ВАЖНО: fixed + Teleport to="body"

const updatePosition = async () => {
  if (!triggerRef.value || !tooltipRef.value) return
  const { x, y } = await computePosition(triggerRef.value, tooltipRef.value, {
    placement: props.placement ?? 'top',
    strategy,
    middleware: [offset(8), flip(), shift({ padding: 16 })]
  })
  Object.assign(tooltipRef.value.style, {
    left: `${x}px`,
    top: `${y}px`,
    position: strategy
  })
}

watch(isOpen, (open) => {
  if (open && triggerRef.value && tooltipRef.value) {
    cleanupAutoUpdate = autoUpdate(triggerRef.value, tooltipRef.value, updatePosition)
    // Закрытие по Esc
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (isOpen.value = false)
    window.addEventListener('keydown', onKey)
    cleanupEscape = () => window.removeEventListener('keydown', onKey)
    updatePosition()
  } else {
    cleanupAutoUpdate?.()
    cleanupAutoUpdate = null
    cleanupEscape?.()
    cleanupEscape = null
  }
})

onBeforeUnmount(() => {
  cleanupAutoUpdate?.()
  cleanupEscape?.()
})

// Хелперы для разных триггеров
const onTriggerClick = () => {
  if (props.trigger === 'click') isOpen.value = !isOpen.value
}
const onTriggerEnter = () => {
  if (props.trigger !== 'click') isOpen.value = true
}
const onTriggerLeave = (e: MouseEvent) => {
  if (props.trigger === 'click') return
  const to = e.relatedTarget as Node | null
  if (tooltipRef.value && to && tooltipRef.value.contains(to)) return // не закрывать при переходе на тултип
  isOpen.value = false
}
const onTooltipLeave = (e: MouseEvent) => {
  if (props.trigger === 'click') return
  const to = e.relatedTarget as Node | null
  if (triggerRef.value && to && triggerRef.value.contains(to)) return
  isOpen.value = false
}
</script>
