<template>
  <div>Home</div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  const state = reactive({ count: 0 })
</script>

<style scoped lang="less">
  a {
    color: #42b983;
  }
</style>
