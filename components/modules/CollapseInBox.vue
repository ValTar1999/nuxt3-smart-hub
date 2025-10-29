<template>
  <Collapse>
    <template #header="{ opened }">
      <div class="flex cursor-pointer items-center border-b border-gray-200 py-4">
        <h3 class="text-lg font-medium text-gray-900">{{ headline }}</h3>
        <div class="ml-auto h-5 w-5 text-gray-400">
          <Icon
            collection="simple"
            variant="solid"
            name="chevron-down"
            :class="['transition-transform', opened && 'rotate-180']"
          />
          <!-- ЭТО ИКОНКА ДЛЯ ПЕРЕВАОРОТА -->
        </div>
      </div>
    </template>

    <div class="pt-6">
      <slot />
    </div>
  </Collapse>
</template>

<script lang="ts" setup>
type Props = {
  headline: string
  // opened?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  // opened: false
})
</script>

<style></style>
