<template>
  <div class="page-root">
    <div class="header">CSS文章列表</div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="go(item.path)">
          {{ 1 + index + '.' + item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { RouteLocationRaw, useRouter } from 'vue-router'
  const router = useRouter()

  const list = reactive([
    { name: 'flex', path: '/css/flex' },
    { name: 'grid', path: '/css/grid' },
  ])

  function go(path: RouteLocationRaw | string) {
    router.push(path)
  }
</script>

<style scoped lang="less">
  .page-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .header {
      // margin-bottom: 50px;
      padding: 50px;
      font-size: 1.5rem;
    }

    .content {
      padding: 0 50px;
      flex-grow: 1;

      ul {
        li {
          cursor: pointer;
          margin-bottom: 10px;
          &:hover {
            background-color: #e9e9e9;
          }
        }
      }
    }
  }
</style>
