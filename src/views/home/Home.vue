<template>
  <div class="page-root">
    <div class="page-header"></div>
    <div class="page-body"></div>
    <div class="page-footer">
      <div class="ipc-box">
        <a href="https://beian.miit.gov.cn/">粤ICP备2021127505号</a>
      </div>
    </div>
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

    .page-header,
    .page-footer {
      flex-grow: 0;
      flex-shrink: 0;
      height: 100px;
    }

    .page-body {
      flex-grow: 1;
    }

    .page-footer {
      text-align: center;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      background-color: #e7e7e7;

      .ipc-box {
        a {
          color: #222222;
          text-decoration: none;
          font-size: 14px;
        }
      }
    }
  }
</style>
