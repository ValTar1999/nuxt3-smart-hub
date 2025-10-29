<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom'

interface Option {
  label: string
  value: string
  [key: string]: any
}

const props = defineProps<{
  options: Option[]
  modelValue?: string
  placeholder?: string
  placement?: 'bottom' | 'top' | 'left' | 'right'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const activeIndex = ref<number | null>(null)

let cleanupAutoUpdate: (() => void) | null = null

const selectedOption = computed(() => props.options.find((o) => o.value === props.modelValue))
const selectedLabel = computed(() =>
  selectedOption.value ? selectedOption.value.label : (props.placeholder ?? 'Выберите...')
)

const updatePosition = async () => {
  if (!triggerRef.value || !menuRef.value) return
  const { x, y } = await computePosition(triggerRef.value, menuRef.value, {
    placement: props.placement ?? 'bottom',
    strategy: 'fixed',
    middleware: [offset(6), flip(), shift({ padding: 6 })]
  })
  Object.assign(menuRef.value.style, {
    left: `${x}px`,
    top: `${y}px`,
    position: 'fixed'
  })
}

watch(isOpen, async (open) => {
  if (open && triggerRef.value && menuRef.value) {
    cleanupAutoUpdate = autoUpdate(triggerRef.value, menuRef.value, updatePosition)
    await nextTick()
    updatePosition()
    window.addEventListener('click', onClickOutside, true)
    const selectedIndex = props.options.findIndex((o) => o.value === props.modelValue)
    activeIndex.value = selectedIndex >= 0 ? selectedIndex : 0
  } else {
    cleanupAutoUpdate?.()
    cleanupAutoUpdate = null
    window.removeEventListener('click', onClickOutside, true)
    activeIndex.value = null
  }
})

onBeforeUnmount(() => {
  cleanupAutoUpdate?.()
  window.removeEventListener('click', onClickOutside, true)
})

const onClickOutside = (e: MouseEvent) => {
  const target = e.target as Node
  if (triggerRef.value?.contains(target) || menuRef.value?.contains(target)) return
  isOpen.value = false
}

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const onKeyDown = (e: KeyboardEvent) => {
  if (!isOpen.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault()
    isOpen.value = true
    return
  }

  if (!isOpen.value) return

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      activeIndex.value =
        activeIndex.value === null ? 0 : Math.min(props.options.length - 1, activeIndex.value + 1)
      scrollToActive()
      break
    case 'ArrowUp':
      e.preventDefault()
      activeIndex.value =
        activeIndex.value === null ? props.options.length - 1 : Math.max(0, activeIndex.value - 1)
      scrollToActive()
      break
    case 'Enter':
      e.preventDefault()
      if (activeIndex.value != null) {
        selectOption(props.options[activeIndex.value])
      }
      break
    case 'Escape':
      e.preventDefault()
      isOpen.value = false
      break
  }
}

const scrollToActive = () => {
  nextTick(() => {
    if (!menuRef.value || activeIndex.value == null) return
    const activeEl = menuRef.value.querySelector(`[data-index='${activeIndex.value}']`)
    if (activeEl instanceof HTMLElement) {
      activeEl.scrollIntoView({ block: 'nearest' })
    }
  })
}
</script>

<template>
  <div class="inline-block text-left">
    <!-- 🔹 Триггер — можно переопределить -->
    <div
      ref="triggerRef"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-controls="'select-menu'"
      aria-haspopup="listbox"
      tabindex="0"
      class="inline-flex justify-between items-center w-64 px-3 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
      @click="isOpen = !isOpen"
      @keydown="onKeyDown"
    >
      <slot name="trigger" :selected="selectedOption" :label="selectedLabel">
        <span>{{ selectedLabel }}</span>
      </slot>

      <svg
        class="w-4 h-4 ml-2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- 🔹 Dropdown со слотами для опций -->
    <Teleport to="body">
      <!-- <transition
        enter-active-class="transition transform duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      > -->
      <ul
        v-show="isOpen"
        id="select-menu"
        ref="menuRef"
        role="listbox"
        class="z-[9999] w-64 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
      >
        <li
          v-for="(option, index) in props.options"
          :key="option.value"
          :data-index="index"
          role="option"
          :aria-selected="option.value === props.modelValue"
          :class="[
            'cursor-pointer px-4 py-2',
            option.value === props.modelValue
              ? 'bg-blue-100 text-blue-700'
              : activeIndex === index
                ? 'bg-blue-50'
                : 'text-gray-700'
          ]"
          @click="selectOption(option)"
          @mouseenter="activeIndex = index"
        >
          <!-- 🔹 Кастомный рендер через слот -->
          <slot
            name="option"
            :option="option"
            :is-active="activeIndex === index"
            :is-selected="option.value === props.modelValue"
          >
            {{ option.label }}
          </slot>
        </li>
      </ul>

      <slot name="action" />
      <!-- </transition> -->
    </Teleport>
  </div>
</template>
