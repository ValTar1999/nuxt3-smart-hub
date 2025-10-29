<template>
  <ContentPaymentWrap>
    <Select
      v-model="selectedSection"
      :options="[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ]"
    >
    </Select>
  </ContentPaymentWrap>
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

const selectedSection = ref('')
</script>

<style></style>
