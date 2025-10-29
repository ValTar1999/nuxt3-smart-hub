<template>
  <div class="ml-auto flex justify-center items-center">
    <Tooltip placement="right">
      <template #trigger>
        <button :class="classListButton" @click="handleClick()">
          <Icon
            v-if="sidebarCollapsed"
            :class="classListIcon"
            collection="simple"
            variant="solid"
            name="login"
          />
          <Icon v-else :class="classListIcon" collection="simple" variant="solid" name="logout" />
        </button>
      </template>
      <div class="component-tooltip-dark">
        <span v-if="sidebarCollapsed">Expand</span>
        <span v-else>Collapse</span>
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { classes as enumClasses, sizes as enumSizes } from '~/enums/components/Button'

const classListButton = computed(() => [
  enumClasses.common,
  enumClasses.colors.linkSecondary,
  enumSizes.buttonSize.default.lg,
  enumSizes.rounded.lg
])

const classListIcon = computed(() => [
  'text-gray-400 hover:text-gray-600',
  enumSizes.iconSize.default.lg
])

const emit = defineEmits(['onToggle'])
const sidebarCollapsed = useState('sidebar-collapsed')

function handleClick() {
  emit('onToggle')
}
</script>
