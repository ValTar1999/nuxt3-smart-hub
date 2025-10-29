<template>
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <Sidebar />
    <div class="flex w-0 flex-1 flex-col overflow-hidden">
      <Header />
      <main class="overflow-y-auto">
        <div class="flex min-w-0 flex-col gap-6 p-6">
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
