<template>
  <div :class="[sidebarCollapsed ? 'w-20' : 'w-76', 'hidden md:flex md:flex-shrink-0']">
    <div class="flex flex-col transition-width w-full">
      <div class="flex min-h-0 flex-1 flex-col border-sidebar bg-white">
        <div class="no-scrollbar flex flex-1 flex-col overflow-y-auto overflow-x-hidden pb-4 pt-5">
          <div class="flex items-center px-5">
            <Logo v-if="!sidebarCollapsed" class="mr-2 w-35 transition-all" />

            <SidebarToggler @on-toggle="toggleSidebar" />
          </div>

          <nav class="mt-9 grid grid-cols-1 gap-1 px-5">
            <template v-for="(itemGroup, index) in sidebarMenu" :key="index">
              <hr v-if="index > 0" class="border-bottom my-2 w-full border-gray-200" />
              <SidebarItem v-for="item in itemGroup" :key="item.title" v-bind="item" />
            </template>
          </nav>

          <div class="border-color-200 mt-9 px-5">
            <SidebarHelp />
          </div>

          <!-- <div class="mt-5 space-y-1 bg-white px-5">
            <SidebarAccountInfo />
          </div> -->

          <SidebarFooter class="mt-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sidebarMenu } from '@/enums/common/sidebarMenu'
const sidebarCollapsed = useState('sidebar-collapsed', () => false)

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value
}
</script>

<style></style>
