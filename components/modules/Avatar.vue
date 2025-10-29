<template>
  <div :class="['relative', enumClasses[size].image]">
    <div
      v-if="notification"
      :class="[
        'absolute right-0 rounded-full ring-2 ring-white bg-green-400',
        enumClasses[size].notifications
      ]"
    />

    <div class="w-full h-full rounded-full overflow-hidden bg-gray-100 ring-2 ring-white">
      <img v-if="imageSrc" class="object-cover" :src="imageSrc" alt="User Avatar" />

      <img
        v-if="!imageSrc && !fullName && !firstName && !lastName"
        class="object-cover"
        src="/images/avatar-placeholder.svg"
        alt="User Avatar Placeholder"
      />

      <div
        v-if="fullName || firstName || (lastName && !imageSrc)"
        :class="[
          'flex items-center justify-center rounded-full w-full h-full uppercase text-white bg-slate-500',
          enumClasses[size].text
        ]"
      >
        {{ letters }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type TSizes, classes as enumClasses } from '@/enums/components/Avatar'

type Props = {
  firstName?: string | undefined
  lastName?: string | undefined
  fullName?: string | undefined
  size?: TSizes
  notification?: boolean
  imageSrc?: string | undefined
}

const {
  fullName = undefined,
  firstName = undefined,
  lastName = undefined,
  size = 'xs',
  notification = false,
  imageSrc = undefined
} = defineProps<Props>()

const letters = computed(() => {
  if (fullName) {
    const lettersArr = fullName.split(' ')
    return (lettersArr[0][0] + lettersArr[1][0]).toUpperCase()
  }
  return (((firstName && firstName[0]) || '') + ((lastName && lastName[0]) || '')).toUpperCase()
})
</script>

<style></style>
