<template>
  <div class="relative" data-collapse>
    <input
      :id="props.id"
      v-model="isOpen"
      :name="props.name"
      :value="props.value"
      :type="props.type"
      class="target-checked-deep sr-only"
      data-checkbox-collapse
    />
    <label :for="props.id" data-collapse-header>
      <slot name="header" :opened="isOpen" />
    </label>
    <div
      v-if="slots.default"
      :class="[edgeScroll && '-mx-6 px-6', 'custom-collapse-content']"
      data-collapse-content
    >
      <div class="min-h-0">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  id?: string
  name?: string
  value?: string | number
  type?: 'checkbox' | 'radio'
  opened?: boolean
  edgeScroll?: boolean
}

const slots = useSlots()

const props = withDefaults(defineProps<Props>(), {
  id: unicId,
  name: '',
  value: '',
  type: 'checkbox',
  opened: false
})

const isOpen = ref(props.opened)

watch(
  () => props.opened,
  (val) => (isOpen.value = val)
)
</script>

<script lang="ts" module>
export const unicId = `randomId-${Math.floor(Math.random() * 10000)}`
</script>

<style>
.custom-collapse-content {
  display: grid;
  grid-template-rows: 0fr;
  overflow: auto hidden;
  transition: grid-template-rows 0.3s;
}

[data-checkbox-collapse]:checked ~ [data-collapse-content] {
  grid-template-rows: 1fr;
}

[data-checkbox-collapse]:checked ~ [data-collapse-header] [data-collapse-icon] {
  transform: rotate(180deg);
}

[data-checkbox-collapse]:checked ~ [data-collapse-header] [data-collapse-icon-right] {
  transform: rotate(90deg);
}

[data-checkbox-collapse]:checked ~ [data-collapse-header='acc'] > label {
  --tw-bg-opacity: 1;

  background: rgb(243 244 246 / var(--tw-bg-opacity));
}

[data-checkbox-collapse]:checked ~ [data-collapse-header] [data-radio-figure] {
  box-shadow: inset 0 0 0 5px rgb(37 99 235 / 100%);
}
</style>
