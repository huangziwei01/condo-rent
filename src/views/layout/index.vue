<template>
  <div class="layout">
    <my-header></my-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script setup>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  .content {
    margin-top: 80px;
    padding: 0 100px;
  }
}
</style>
