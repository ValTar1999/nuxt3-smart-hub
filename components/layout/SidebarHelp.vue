<template>
  <div>
    <Tooltip
      transparent
      :placement="sidebarCollapsed ? 'right-start' : 'bottom-start'"
      class:list="mt-auto flex flex-wrap items-center justify-center"
    >
      <template #trigger>
        <button
          v-if="sidebarCollapsed"
          class="flexcursor-pointer rounded-md hover:bg-gray-50 cursor-pointer focus-button"
        >
          <div class="flex h-10 w-10">
            <Icon
              collection="simple"
              variant="solid"
              name="question-mark-circle"
              class="m-auto text-gray-400"
            />
          </div>
        </button>

        <button
          v-else
          class="flex w-full cursor-pointer gap-1.5 rounded-md pl-2.5 pr-2 py-2.5 focus-button"
        >
          <div class="h-5 w-5">
            <Icon
              collection="simple"
              variant="solid"
              name="question-mark-circle"
              class="m-auto text-gray-400"
            />
          </div>
          <div class="whitespace-nowrap text-sm font-semibold text-gray-700">
            Help from Transcard
          </div>
        </button>
      </template>

      <div class="flex flex-col rounded-lg bg-white shadow-dropdown">
        <div class="px-4 py-4 text-sm">
          <div class="font-semibold text-gray-900">Contact Support</div>
          <div class="flex flex-col gap-1.5 text-gray-500">
            <div>support@transcard.com</div>
            <div>800-890-3128</div>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-1.5">
          <Button variant="linkPrimary" size="md">
            <div class="flex items-center gap-1.5 py-1.5 text-sm">
              FAQ & User Guides
              <Icon collection="simple" variant="solid" name="arrow-right" class="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
const sidebarCollapsed = useState('sidebar-collapsed')
</script>

<style></style>
