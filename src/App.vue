<script setup>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
</script>

<template>
  <my-header></my-header>
  <router-view></router-view>
  <my-footer></my-footer>
</template>

<style>
@import './assets/css/reset.css';
</style>
