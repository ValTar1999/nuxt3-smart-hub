<template>
  <div class="w-full">
    <Tooltip :placement="props.childrens ? 'right-start' : 'right'">
      <template #trigger>
        <component
          :is="component"
          :class="[
            'flex items-center w-full px-2 py-2 text-sm font-medium rounded-md',
            isActive
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            props.child && 'ml-6'
          ]"
          :to="props.childrens ? undefined : props.href"
          @click="props.childrens ? onTriggerClick() : null"
        >
          <Icon
            v-if="!props.child"
            v-bind="icon"
            :class="isActive ? 'text-blue-600' : 'text-gray-400'"
          />

          <div
            v-if="!sidebarCollapsed"
            :class="['flex flex-grow items-center transition-all', props.child ? 'pl-1.5' : 'pl-3']"
          >
            <span>{{ props.title }}</span>
            <span
              v-if="props.counter"
              :class="[
                'ml-auto rounded-full px-3 py-0.5 text-xs font-medium transition-opacity duration-100',
                isActive ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-600'
              ]"
              >{{ props.counter }}</span
            >
          </div>

          <Icon
            v-if="props.childrens && !sidebarCollapsed"
            collection="simple"
            variant="solid"
            name="chevron-down"
            :class="['transform text-gray-400 transition-all', itemOpened && 'rotate-180']"
          />
        </component>
      </template>

      <template v-if="sidebarCollapsed">
        <div
          v-if="props.childrens"
          class="flex flex-col gap-2 whitespace-normal rounded-md bg-white px-4 pb-1 pt-3 text-left text-sm font-normal text-gray-700 shadow-dropdown"
        >
          <div class="text-xs font-normal text-gray-500">{{ props.title }}</div>
          <div class="-mx-3 flex flex-col">
            <nuxt-link
              v-for="(item, index) in props.childrens"
              :key="`childs-${index}`"
              :to="item.href"
              class="rounded px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>

        <div v-else class="component-tooltip-dark">
          <span>{{ props.title }}</span>
        </div>
      </template>
    </Tooltip>

    <div
      v-if="props.childrens && !sidebarCollapsed"
      ref="sidebar-childs"
      :class="['mt-1 gap-1 custom-collapse-menu-item', itemOpened && 'is-active']"
    >
      <div class="min-h-0">
        <SidebarItem
          v-for="(item, index) in props.childrens"
          :key="`childs-${index}`"
          v-bind="item"
          child
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TIcon } from '~/enums/common/iconList'

const sidebarCollapsed = useState('sidebar-collapsed', () => false)

type Props = {
  title: string
  counter?: number
  childrens?: object
  icon: TIcon
  child?: boolean
  href?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  counter: undefined,
  childrens: undefined,
  child: false
})

const component = computed(() => {
  if (props.childrens) return 'button'
  return defineNuxtLink({})
})

const route = useRoute()

console.log(props.href)
console.log(route.path)

const isActive =
  props.href === '/' ? false : computed(() => route.path.startsWith(props.href ?? '/'))

const itemOpened = ref(false)

function onTriggerClick() {
  itemOpened.value = !itemOpened.value
}
</script>

<style>
.custom-collapse-menu-item {
  display: grid;
  grid-template-rows: 0fr;
  overflow: auto hidden;
  transition: grid-template-rows 0.3s;
}
.custom-collapse-menu-item.is-active {
  grid-template-rows: 1fr;
}
</style>
