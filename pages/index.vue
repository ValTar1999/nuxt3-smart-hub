<template>
  <div>
    <Button
      class="ololololol"
      variant="linkSecondary"
      size="lg"
      :icon="{ name: 'logout', collection: 'simple', variant: 'solid' }"
    />
    <img
      class="m-auto"
      src="/images/avatar-example.jpeg"
      title="Powered by Transcard"
      alt="Transcard Shield"
    />
    <button>Test</button>
    <Icon id="15" class="w-4 h-4" collection="duotone" name="placeholder" />
    <Icon collection="simple" variant="solid" name="hand" class="w-4 h-4" />

    <a href="/" class="ui-card-main"> </a>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  breadcrumb: {
    label: 'Main'
    // icon: {
    //   collection: 'simple',
    //   variant: 'solid',
    //   name: 'archive'
    // }
  }
})

const route = useRoute()
useHead({
  title: route?.meta?.breadcrumb?.label
})
</script>

<style></style>
