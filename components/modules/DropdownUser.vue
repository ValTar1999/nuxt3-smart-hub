<template>
  <Tooltip placement="bottom-end" trigger="click">
    <template #trigger>
      <button class="rounded-full focus-button">
        <Avatar size="md" image-src="/images/avatar-example.jpeg" />
      </button>
    </template>

    <div class="w-50 rounded bg-white shadow-dropdown divide-y divide-gray-200">
      <div class="px-4 py-4">
        <h4 class="overflow-hidden m-0 text-base font-semibold text-ellipsis text-gray-900">
          Emil Schaefer
        </h4>
        <span class="text-sm font-normal text-gray-500">Role</span>
      </div>
      <div>
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.href || '#'"
          class="relative inline-flex items-center w-full px-4 py-3 text-sm font-normal text-gray-900 focus-visible:z-10 hover:bg-gray-50 last:rounded-b focus-item"
        >
          <Icon v-if="item.icon" v-bind="item.icon" class="mr-3 text-gray-500" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
  </Tooltip>
</template>

<script lang="ts" setup>
const items = [
  {
    icon: {
      collection: 'simple',
      variant: 'solid',
      name: 'user'
    },
    title: 'Profile',
    href: '#'
  },
  {
    icon: {
      collection: 'simple',
      variant: 'solid',
      name: 'logout'
    },
    title: 'Sign out',
    href: '#'
  }
] as const
</script>

<style></style>
