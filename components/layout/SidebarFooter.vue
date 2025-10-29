<template>
  <div class="mt-auto flex flex-wrap items-center justify-center pb-4 pt-6">
    <Tooltip v-if="sidebarCollapsed" class="mx-auto w-auto" placement="right">
      <template #trigger>
        <div class="flex h-10 w-10 cursor-pointer rounded-md">
          <img
            class="m-auto"
            src="/images/transcard-shield.svg"
            title="Powered by Transcard"
            alt="Transcard Shield"
          />
        </div>
      </template>

      <div
        class="flex flex-col items-start gap-2 rounded-lg bg-white px-4 py-3 text-xs shadow-dropdown"
      >
        <div class="flex items-baseline text-gray-800">
          Powered by <img src="/images/transcard-text.svg" class="ml-1" alt="Transcard" />
        </div>
        <div class="flex items-center gap-2 text-gray-700">
          <a href="#" class="hover:text-gray-600" target="_blank">Terms of Use</a>
          <span>•</span>
          <a href="#" class="hover:text-gray-600" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </Tooltip>

    <div v-else class="flex flex-col items-center gap-2 rounded-lg bg-white px-4 py-3 text-xs">
      <div class="flex items-center text-gray-800">
        <img
          class="mr-1"
          src="/images/transcard-shield.svg"
          title="Powered by Transcard"
          alt="Transcard Shield"
        />
        Powered by <img src="/images/transcard-text.svg" class="ml-1" alt="Transcard" />
      </div>
      <div class="flex items-center gap-2 text-gray-700">
        <a href="#" class="hover:text-gray-600" target="_blank">Terms of Use</a>
        <span>•</span>
        <a href="#" class="hover:text-gray-600" target="_blank">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sidebarCollapsed = useState('sidebar-collapsed')
</script>
