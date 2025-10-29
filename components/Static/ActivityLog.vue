<template>
  <div>
    <div v-if="props.variant === 'unprocessed'" class="flex">
      <div class="mr-4 flex flex-shrink flex-col items-center pt-1.5">
        <Icon
          collection="simple"
          variant="solid"
          name="flag"
          class="mb-1.5 h-3.5 w-3.5 text-gray-500"
        />
      </div>

      <div class="pb-6">
        <div class="text-base font-medium">Unprocessed</div>
        <div class="mt-1 text-sm text-gray-700">
          <div>
            Payment for payable ID

            <a class="text-smart-main hover:text-smart-main-darken hover:underline" href="#">
              #2345REQ3
            </a>

            is pending initiation on 04/22/2022
          </div>
        </div>
        <div class="mt-1 text-xs font-medium text-gray-400">Aug 29, 2023 10:40 AM (EST)</div>
      </div>
    </div>

    <template v-if="!props.variant">
      <div v-for="(item, index) in data" :key="item.title" class="flex">
        <div class="mr-4 flex flex-shrink flex-col items-center pt-1.5">
          <Icon v-bind="item.icon" class="['mb-1.5 h-3.5 w-3.5', item.iconClass]" />
          <div v-if="index !== data.length - 1" class="w-0.5 flex-grow bg-gray-200" />
        </div>

        <div class="pb-6">
          <div class="text-base font-medium">{{ item.title }}</div>
          <div class="mt-1 text-sm font-medium text-gray-400">{{ item.date }}</div>
          <div class="mt-1 text-sm text-gray-700">
            <div v-html="item.textHTML" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    icon: 'in-progress',
    iconClass: 'text-smart-main',
    title: 'Processing',
    date: 'Nov 29, 2021 10:40 AM',
    textHTML:
      'Payment for payable ID <a class="text-smart-main hover:underline hover:text-smart-main-darken" href="#">#2345REQ3</a> is processing'
  },
  {
    icon: 'in-progress',
    iconClass: 'text-smart-main',
    title: 'Initiated',
    date: 'Nov 29, 2021 10:40 AM',
    textHTML:
      'Payment for payable ID <a class="text-smart-main hover:underline hover:text-smart-main-darken" href="#">#2345REQ3</a> has been initiated'
  },
  {
    icon: 'calendar',
    iconClass: 'text-gray-500',
    title: 'Pending Initiation',
    date: 'Nov 29, 2021 10:40 AM',
    textHTML:
      'Payment for payable ID <a class="text-smart-main hover:underline hover:text-smart-main-darken" href="#">#2345REQ3</a> is pending billing for 04/22/2022'
  },
  {
    icon: 'flag',
    iconClass: 'text-gray-500',
    title: 'Unprocessed',
    date: 'Nov 29, 2021 10:40 AM',
    textHTML:
      'Payment for payable ID <a class="text-smart-main hover:underline hover:text-smart-main-darken" href="#">#2345REQ3</a> is pending initiation on 04/22/2022'
  }
]

const props = withDefaults(
  defineProps<{
    variant?: 'unprocessed'
  }>(),
  {
    variant: undefined
  }
)
</script>
