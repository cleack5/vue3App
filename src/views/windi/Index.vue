<template>
  <div>
    <h1 class="p-5px">windi-index</h1>
    <div class="p-15px">
      {{ state.count }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  const state = reactive({ count: 0 })
</script>

<style scoped lang="less"></style>
