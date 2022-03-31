<template>
  <div class="page-root">
    <img src="@/assets/flexbox.png" alt="" />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  const state = reactive({ count: 0 })
</script>

<style scoped lang="less">
  .page-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
