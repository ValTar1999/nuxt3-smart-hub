<template>
  <div>Bills table</div>
  <nuxt-link to="/bills/payment">Payment</nuxt-link>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Payables',
  breadcrumb: {
    label: 'Payables'
    // icon: {
    //   collection: 'simple',
    //   variant: 'solid',
    //   name: 'archive'
    // }
  }
})
</script>

<style></style>
