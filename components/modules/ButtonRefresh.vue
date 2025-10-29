<template>
  <Tooltip placement="bottom-end">
    <template #trigger>
      <Button
        :variant="buttonVariant[currentState]"
        size="sm"
        :icon="buttonIcon[currentState]"
        class="font-semibold"
        :readonly="currentState !== 'processing'"
        @click="changeState"
      >
        <svg
          v-if="currentState === 'processing'"
          class="h-4.5 w-4.5"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="text-gray-200"
            d="M17.4375 9.5C17.4375 13.8492 13.9117 17.375 9.5625 17.375C5.21326 17.375 1.6875 13.8492 1.6875 9.5C1.6875 5.15076 5.21326 1.625 9.5625 1.625C13.9117 1.625 17.4375 5.15076 17.4375 9.5ZM4.05 9.5C4.05 12.5445 6.51803 15.0125 9.5625 15.0125C12.607 15.0125 15.075 12.5445 15.075 9.5C15.075 6.45553 12.607 3.9875 9.5625 3.9875C6.51803 3.9875 4.05 6.45553 4.05 9.5Z"
            fill="currentColor"
          />
          <path
            class="origin-center animate-spin text-blue-600"
            d="M16.2563 9.5C16.9086 9.5 17.4466 8.96823 17.3491 8.32317C17.254 7.69389 17.0827 7.07702 16.8381 6.48637C16.4423 5.53093 15.8622 4.6628 15.131 3.93153C14.3997 3.20027 13.5316 2.6202 12.5761 2.22445C11.9855 1.97979 11.3686 1.80854 10.7393 1.71343C10.0943 1.61594 9.5625 2.15386 9.5625 2.80625C9.5625 3.45864 10.0973 3.97485 10.7347 4.11358C11.0545 4.18317 11.3682 4.28127 11.672 4.40711C12.3408 4.68414 12.9485 5.09019 13.4604 5.60207C13.9723 6.11396 14.3784 6.72165 14.6554 7.39046C14.7812 7.69426 14.8793 8.00798 14.9489 8.32776C15.0876 8.96523 15.6039 9.5 16.2563 9.5Z"
            fill="currentColor"
          />
        </svg>
        {{ titles[currentState] }}
      </Button>
    </template>

    <div class="flex flex-col gap-0.5 rounded-md bg-white p-2 shadow-dropdown">
      <div class="text-xs text-gray-400">Last refreshed:</div>
      <div class="text-sm font-medium text-gray-700">Jan 22, 2025 at 12:34 AM</div>
    </div>
  </Tooltip>
</template>

<script lang="ts" setup>
import type { TIcon } from '~/enums/common/iconList'

const state = ref(0)

const mapStates: { [key: number]: string } = {
  0: 'default',
  1: 'processing',
  2: 'done'
}

const currentState = computed(() => mapStates[state.value])

const titles = ref({
  default: 'Refresh',
  processing: 'Refreshing...',
  done: 'Refresh complete'
})

const buttonVariant = ref({
  default: 'gray',
  processing: 'gray',
  done: 'green'
})

const buttonIcon: Ref<{ [key: string]: TIcon | undefined }> = ref({
  default: { name: 'refresh', collection: 'simple', variant: 'solid' },
  processing: undefined,
  done: { name: 'check', collection: 'simple', variant: 'solid' }
})

function changeState() {
  state.value++
  if (state.value > 2) {
    state.value = 0
  }
}
</script>

<style></style>
