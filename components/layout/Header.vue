<template>
  <div class="relative z-10 flex flex-shrink-0 flex-col border-b border-gray-200 bg-white px-6">
    <div class="flex items-center pb-4 pt-6">
      <h2 class="m-0 flex items-center flex-grow h-10">
        <div class="text-2xl font-bold text-gray-900">Hello, {{ user.fullName }}</div>
      </h2>

      <!-- <DropdownBusinessChange /> -->
      <div class="ml-auto flex items-center gap-6">
        <HeaderNotification />
        <DropdownUser />
      </div>
    </div>

    <div class="border-t border-gray-200 py-4">
      <Breadcrumbs />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { user } from '@/enums/common/config'
</script>

<style></style>
