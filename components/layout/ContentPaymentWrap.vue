<template>
  <div class="max-w-7xl mx-auto w-full bg-white shadow rounded-lg">
    <div class="p-6 flex flex-col gap-6">
      <!--  -->
      <div class="flex items-center gap-4 border-b border-gray-200 pb-4">
        <ButtonAction
          :icon="{ collection: 'simple', variant: 'solid', name: 'arrow-left' }"
          @click="$router.back()"
        />
        <div v-if="title" class="text-lg font-medium">
          {{ title }}
        </div>
        <ButtonRefresh class="ml-auto" />
      </div>
      <!--  -->
      <slot />
      <!--  -->
      <CollapseInBox headline="Payable Summary">
        <TablePayableSummary />
      </CollapseInBox>
      <CollapseInBox id="activity-log" headline="Activity Log">
        <ActivityLog variant="unprocessed" />
      </CollapseInBox>
    </div>
    <div class="p-6"></div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title?: string
}

const { title = 'Initiate a Payment' } = defineProps<Props>()
</script>

<style></style>
