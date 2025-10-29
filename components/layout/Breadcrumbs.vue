<template>
  <nav class="flex items-center" aria-label="Breadcrumb">
    <h2 v-if="headline" class="my-0 whitespace-nowrap text-xl font-semibold text-gray-900">
      {{ headline }}
    </h2>
    <hr v-if="route.path !== '/'" class="mx-6 flex h-5 w-1px bg-gray-300" />
    <ol
      v-if="route.path !== '/'"
      role="list"
      class="my-0 flex list-none items-center space-x-4 pl-0"
    >
      <li class="inline-flex">
        <div class="inline-flex">
          <a href="/" class="inline-flex rounded text-gray-400 hover:text-gray-500 link">
            <Icon collection="simple" variant="solid" name="home" class="text-gray-400" />
          </a>
        </div>
      </li>

      <li v-for="(crumb, i) in crumbs" :key="crumb.to">
        <div class="flex items-center">
          <Icon collection="simple" variant="solid" name="chevron-right" class="text-gray-400" />
          <NuxtLink
            :to="crumb.to"
            class="ml-4 flex items-center rounded text-sm gap-2 font-medium text-gray-500 focus-button hover:text-gray-700"
          >
            <Icon v-if="crumb.icon" v-bind="crumb.icon" class="text-gray-400" />
            {{ crumb.label }}
          </NuxtLink>
          <span v-if="i < crumbs.length - 1">/</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()
const headline = route?.meta?.breadcrumb?.label

const crumbs = computed(() =>
  route.matched.map((r) => ({
    label: r.meta?.breadcrumb?.label || r.name,
    icon: r.meta?.breadcrumb?.icon || undefined,
    to: r.path
  }))
)
</script>

<style></style>
