<template>
  <div>
    <h1>Icons</h1>
    <div>
      <div v-for="(value, collection) in IconCollections" :key="`icon-${collection}`">
        <div v-if="Array.isArray(value)" class="custom-grid-columns-icons">
          <div
            v-for="name in value"
            :key="`icon-${collection}-${name}`"
            class="flex flex-nowrap gap-2 items-center min-w-0"
          >
            <Icon :collection="collection" :name="name" />
            <div>{{ name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/base/Icon.vue'
import { IconCollections } from '@/enums/common/iconList'
</script>

<style>
.custom-grid-columns-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}
</style>
